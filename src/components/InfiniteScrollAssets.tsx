'use client';

import { useEffect, useRef, useState } from "react";
import mockAssets from "@/data/mockAssets.json";
import { BoardCard } from "@/components/BoardCard";

const PAGE_SIZE = 4;

export const InfiniteScrollAssets = () => {
    const [ visibleAssets, setVisibleAssets ] = useState( () => mockAssets.slice( 0, PAGE_SIZE ) );
    const [ page, setPage ] = useState( 1 );
    const loadMoreRef = useRef<HTMLDivElement | null>( null );

    useEffect( () => {
        const loadMoreEl = loadMoreRef.current;

        if ( !loadMoreEl ) return;

        const observer = new IntersectionObserver(
            ( entries ) => {
                if ( entries[ 0 ].isIntersecting ) {
                    setPage( ( prev ) => prev + 1 );
                }
            },
            { threshold: 1 }
        );

        observer.observe( loadMoreEl );

        return () => {
            observer.unobserve( loadMoreEl );
        };
    }, [] );


    useEffect( () => {
        const nextItems = mockAssets.slice( 0, ( page + 1 ) * PAGE_SIZE );
        setVisibleAssets( nextItems );
    }, [ page ] );

    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {visibleAssets.map( ( asset, i ) => (
                <BoardCard
                    key={asset.id}
                    title={asset.title}
                    thumbnail={asset.thumbnail}
                    boardName={asset.boardName}
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                />
            ) )}
            <div ref={loadMoreRef} className="col-span-full h-10" />
        </section>
    );
}
