import mockAssets from "@/data/mockAssets.json";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {mockAssets.map( ( asset ) => (
        <div key={asset.id} className="rounded shadow bg-white p-2">
          <Image
            src={asset.thumbnail}
            alt={asset.title}
            width={600}
            height={400}
            className="rounded object-cover"
          />
          <h2 className="mt-2 text-sm font-semibold">{asset.title}</h2>
          <p className="text-xs text-gray-500">{asset.boardName}</p>
        </div>
      ) )}
    </main>
  );
}
