import { Clip } from '@/app/api/clips'
import { formatDuration } from '@/utils/formatDuration'
import Image from 'next/image'
import { useRef } from 'react'

interface IClipCardProps {
    clip: Clip
    isFirst?: boolean
}

export const ClipCard = ( { clip, isFirst = false }: IClipCardProps ) => {
    const displayName = clip.title ?? clip.importedName ?? ''
    const videoRef = useRef<HTMLVideoElement | null>( null )

    const handleClick = () => {
        if ( videoRef.current ) {
            videoRef.current.play()
        }
    }

    return (
        <div
            className="rounded overflow-hidden shadow bg-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
            onClick={clip.type === 'video' ? handleClick : undefined}
        >
            {clip.type === 'photo' && (
                <div className="relative aspect-video w-full bg-gray-200">
                    {/* Low quality placeholder */}
                    <Image
                        src={`${ clip.assets.image }?w=20&q=10`}
                        alt=""
                        fill
                        className="object-cover transition-opacity duration-500 ease-in-out"
                        priority={false}
                    />

                    {/* Main image */}
                    <Image
                        src={clip.assets.image}
                        alt={displayName}
                        fill
                        className="object-cover opacity-0 transition-opacity duration-500 ease-in-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onLoadingComplete={( img ) => {
                            img.classList.remove( 'opacity-0' );
                        }}
                        priority={true}
                    />
                </div>
            )}

            {clip.type === 'video' && (
                <div className="relative aspect-video group overflow-hidden rounded-md">
                    <video
                        ref={videoRef}
                        src={clip.assets.previewVideo}
                        poster={clip.assets.image}
                        muted
                        playsInline
                        preload="metadata"
                        controls={false}
                        className="aspect-video object-cover rounded-md transition group-hover:brightness-90 group-hover:scale-105 w-full"
                    />

                    {clip.duration && (
                        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-1 rounded">
                            {formatDuration( clip.duration )}
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}
