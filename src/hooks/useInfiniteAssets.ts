import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAssets } from "@/app/api/clips";
import type { ClipsListResponse } from "@/app/api/clips";


export const useInfiniteAssets = () => {
    return useInfiniteQuery<ClipsListResponse, Error>( {
        queryKey: [ "clips" ],
        initialPageParam: null,
        queryFn: ( { pageParam } ) => {
            const cursor = typeof pageParam === "string" || pageParam === null ? pageParam : null;
            return fetchAssets( { cursor } );
        },
        getNextPageParam: ( lastPage ) =>
            lastPage.pagination.hasMore ? lastPage.pagination.cursor : undefined,
    } );
};