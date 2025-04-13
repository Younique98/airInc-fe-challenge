'use client'

import { useEffect, useRef, useState } from 'react'
import { useInfiniteAssets } from '@/hooks/useInfiniteAssets'
import { ClipCard } from '@/components/ClipCard'
import { BoardCard } from './BoardCard'
import { Board, fetchBoards } from '@/app/api/boards'



export const BoardSection = () => {
    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteAssets()

    const loadMoreRef = useRef<HTMLDivElement | null>( null )
    const [ boards, setBoards ] = useState<Board[]>( [] )
    const [ boardsLoading, setBoardsLoading ] = useState( true )

    useEffect( () => {
        const loadBoards = async () => {
            try {
                const response = await fetchBoards()
                setBoards( response.data ?? [] )
            } catch ( error ) {
                console.error( 'Failed to fetch boards:', error )
            } finally {
                setBoardsLoading( false )
            }
        }

        loadBoards()
    }, [] )

    useEffect( () => {
        if ( !loadMoreRef.current ) return
        const observer = new IntersectionObserver( ( entries ) => {
            if ( entries[ 0 ].isIntersecting && hasNextPage && !isFetchingNextPage ) {
                fetchNextPage()
            }
        } )
        const current = loadMoreRef.current
        observer.observe( current )
        return () => current && observer.unobserve( current )
    }, [ fetchNextPage, hasNextPage, isFetchingNextPage ] )

    if ( isLoading ) return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from( { length: 6 } ).map( ( _, i ) => (
                <div key={i} className="h-48 bg-gray-100 animate-pulse rounded" />
            ) )}
        </section>
    )
    if ( isError ) return <p className="text-red-500">Error loading assets</p>

    const clips = data?.pages.flatMap( ( page ) => page.data.clips ) ?? []

    return (
        <>
            <section className="mb-6">
                <h2 className="text-sm font-semibold text-gray-700 mb-2">Boards ({boards.length})</h2>
                {boardsLoading ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {Array.from( { length: boards.length } ).map( ( _, i ) => (
                            <div key={i} className="h-40 bg-gray-100 animate-pulse rounded-lg" />
                        ) )}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {boards.map( ( board ) => (
                            <BoardCard
                                key={board.id}
                                title={board.title}
                                thumbnail={board.thumbnails?.[ 0 ]}
                            />
                        ) )}
                    </div>
                )}
            </section>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Assets ({clips.length})</h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {clips.map( ( clip, index ) => (
                    <ClipCard key={clip.id} clip={clip} isFirst={index === 0} />
                ) )}
            </section>

            <div ref={loadMoreRef} className="py-10 flex justify-center">
                {isFetchingNextPage && <span className="text-gray-500">Loading more...</span>}
            </div>
        </>
    )
}
