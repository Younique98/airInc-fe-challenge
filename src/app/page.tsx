"use client"
import { BoardSection } from "@/components/BoardSection";
import { useBoards } from "@/hooks/useBoards";

export default function Home() {
  const { boards, loading } = useBoards();
  return (
    <div className="p-6">
      {loading && <p>Loading boards...</p>}
      {boards.map( ( board ) => (
        <BoardSection key={board.id} />
      ) )}
    </div>
  )
}
