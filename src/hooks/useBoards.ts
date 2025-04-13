import { useEffect, useState } from "react";
import { fetchBoards, Board } from "@/app/api/boards";

export const useBoards = () => {
    const [ boards, setBoards ] = useState<Board[]>( [] );
    const [ loading, setLoading ] = useState( true );

    useEffect( () => {
        const loadBoards = async () => {
            try {
                const res = await fetchBoards();
                setBoards( res.data );
            } catch ( error ) {
                console.error( "Error fetching boards", error );
            } finally {
                setLoading( false );
            }
        };

        loadBoards();
    }, [] );

    return { boards, loading };
};
