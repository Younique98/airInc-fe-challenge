'use client'
import { Clip } from '@/app/api/clips'
import { formatDuration } from '@/utils/formatDuration'
import Image from 'next/image'
import { useEffect, useRef, useState, memo, useCallback } from 'react'
import { clsx } from 'clsx'
import { getOptimizedImageUrl } from '@/utils/getOptimizedImageUrl'

interface IClipCardProps {
    clip: Clip
    isFirst?: boolean
}

const ClipCard = ({ clip, isFirst = false }: IClipCardProps) => {
    const displayName = clip.title ?? clip.importedName ?? ''
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [timeLeft, setTimeLeft] = useState<number | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const animationRef = useRef<number | null>(null)
    const supportsHover =
        typeof window !== 'undefined' &&
        window.matchMedia('(hover: hover)').matches

    const updateTimer = useCallback(() => {
        if (
            videoRef.current &&
            !videoRef.current.paused &&
            !videoRef.current.ended
        ) {
            setTimeLeft(
                videoRef.current.duration - videoRef.current.currentTime
            )
            animationRef.current = requestAnimationFrame(updateTimer)
        }
    }, [])

    useEffect(() => {
        if (!videoRef.current) return

        const video = videoRef.current

        const handlePlay = () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            animationRef.current = requestAnimationFrame(updateTimer)
        }

        const handlePause = () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
                animationRef.current = null
            }
        }

        // Set initial time
        if (video.duration) {
            setTimeLeft(video.duration)
        } else {
            video.addEventListener(
                'loadedmetadata',
                () => {
                    setTimeLeft(video.duration)
                },
                { once: true }
            )
        }

        video.addEventListener('play', handlePlay)
        video.addEventListener('pause', handlePause)
        video.addEventListener('ended', handlePause)

        return () => {
            video.removeEventListener('play', handlePlay)
            video.removeEventListener('pause', handlePause)
            video.removeEventListener('ended', handlePause)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [updateTimer])

    // Pause video if card scrolls out of view
    useEffect(() => {
        if (!videoRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
                if (!entry.isIntersecting && videoRef.current) {
                    videoRef.current.pause()
                }
            },
            { threshold: 0.5, rootMargin: '100px' }
        )

        observer.observe(videoRef.current)
        return () => {
            observer.disconnect()
        }
    }, [])

    const handleMouseEnter = () => {
        if (supportsHover && videoRef.current && isVisible) {
            videoRef.current.play().catch(() => {
                console.warn('Video autoplay prevented by browser')
            })
        }
    }

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }
    }

    return (
        <div className="rounded overflow-hidden shadow bg-white hover:shadow-lg transition-transform duration-200 ease-in-out hover:scale-105">
            {clip.type === 'photo' && (
                <div className="relative aspect-video w-full bg-gray-200">
                    {!isImageLoaded && isFirst && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}
                    <Image
                        src={getOptimizedImageUrl(clip.assets.image)}
                        alt={displayName}
                        fill
                        className={clsx(
                            isImageLoaded ? 'opacity-100' : 'opacity-0',
                            'object-cover opacity-0 transition-opacity duration-500 ease-in-out'
                        )}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={isFirst}
                        loading={isFirst ? 'eager' : 'lazy'}
                        fetchPriority={isFirst ? 'high' : 'auto'}
                        onLoad={() => setIsImageLoaded(true)}
                    />
                </div>
            )}

            {clip.type === 'video' && (
                <div
                    className="relative aspect-video group overflow-hidden rounded-md group-hover:brightness-90 group-hover:scale-105 transition cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        ref={videoRef}
                        poster={getOptimizedImageUrl(clip.assets.image)}
                        muted
                        playsInline
                        preload="metadata"
                        controls={false}
                        className="aspect-video object-cover rounded-md transition group-hover:brightness-90 group-hover:scale-105 w-full"
                    >
                        <source
                            src={clip.assets.previewVideo}
                            type="video/mp4"
                        />
                    </video>

                    {clip.duration && (
                        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-1 rounded pointer-events-none">
                            {formatDuration(timeLeft ?? clip.duration)}
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}

export default memo(ClipCard)
export { ClipCard }
