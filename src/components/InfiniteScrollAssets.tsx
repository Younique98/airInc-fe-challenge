'use client';

import { useEffect, useRef, useState } from "react";
import mockAssets from "@/data/mockAssets.json";
import { BoardCard } from "@/components/BoardCard";

const PAGE_SIZE = 4;

export const InfiniteScrollAssets = () => {
    const [ visibleAssets, setVisibleAssets ] = useState( () => mockAssets.slice( 0, PAGE_SIZE ) );
    const [ page, setPage ] = useState( 1 );
    const loadMoreRef = useRef<HTMLDivElement | null>( null );
    const [ filter, setFilter ] = useState<string | null>( null );
    const filteredAssets = filter
        ? visibleAssets.filter( ( asset ) => asset.title === filter )
        : visibleAssets;

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
        <>
            <div className="flex gap-2 p-4">
                {[ "All", "Marketing", "People Ops", "Product Design", "Product Team", "Lab Team" ].map( ( name ) => (
                    <button
                        key={name}
                        onClick={() => setFilter( name === "All" ? null : name )}
                        className={`cursor-pointer text-sm px-3 py-1 rounded ${ filter === name ? "bg-black text-white" : "bg-gray-100"
                            }`}
                    >
                        {name}
                    </button>
                ) )}
            </div>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {filteredAssets.map( ( asset, index ) => (
                    <BoardCard
                        key={asset.id}
                        title={asset.title}
                        thumbnail={asset.thumbnail}
                        priority={index < 3}
                    />
                ) )}
                <div ref={loadMoreRef} className="col-span-full h-10" />
            </section>
        </>
    );
}
