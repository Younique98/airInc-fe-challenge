import { ImageWithPlaceholder } from "./ImageWithPlaceholder";

export interface IBoardCardProps {
    title: string;
    thumbnail: string;
    boardName: string;
}

export const BoardCard = ( { title, thumbnail, boardName }: IBoardCardProps ) => {
    return (
        <div className="rounded-lg shadow-sm border bg-white hover:shadow-md transition duration-200 ease-in-out">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-lg">
                <ImageWithPlaceholder
                    src={thumbnail}
                    alt={title}
                    className="rounded-t-lg"
                    priority={false}
                />
            </div>
            <div className="p-3">
                <h3 className="text-sm font-semibold truncate">{title}</h3>
                <p className="text-xs text-gray-500">{boardName}</p>
            </div>
        </div>
    );
}
