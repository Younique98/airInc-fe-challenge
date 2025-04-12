import mockAssets from "@/data/mockAssets.json";
import { BoardCard } from "@/components/BoardCard";

export default function Home() {
  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {mockAssets.map( ( asset ) => (
        <BoardCard
          key={asset.id}
          title={asset.title}
          thumbnail={asset.thumbnail}
          boardName={asset.boardName}
        />
      ) )}
    </main>
  );
}
