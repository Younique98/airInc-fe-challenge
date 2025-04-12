import { useEffect, useState } from "react";
import { fetchAssets, Clip } from "@/app/api/clips";

export const useAssets = () => {
    const [ assets, setAssets ] = useState<Clip[]>( [] );
    const [ cursor, setCursor ] = useState<string | null>( null );
    const [ loading, setLoading ] = useState( true );
    const [ hasMore, setHasMore ] = useState( true );

    const loadAssets = async ( loadMore = false ) => {
        try {
            const res = await fetchAssets( { cursor: loadMore ? cursor : null } );
            setAssets( ( prev ) =>
                loadMore ? [ ...prev, ...res.data.clips ] : res.data.clips
            );
            setCursor( res.pagination.cursor );
            setHasMore( res.pagination.hasMore );
        } catch ( error ) {
            console.error( "Error fetching assets", error );
        } finally {
            setLoading( false );
        }
    };

    useEffect( () => {
        loadAssets();
    }, [] );

    return { assets, loading, fetchMore: () => loadAssets( true ), hasMore };
};
