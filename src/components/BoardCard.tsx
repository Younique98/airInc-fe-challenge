import { ImageWithPlaceholder } from "./ImageWithPlaceholder";

/**
 * BoardCard
 * 
 * A styled card component for displaying a creative asset or board item.
 * Renders an optimized image with title and board name.
 * 
 * Props:
 * @param title - the title of the asset or board
 * @param thumbnail - the image URL (can be external)
 * @param boardName - the board or category this item belongs to
 */

export interface IBoardCardProps {
    title: string;
    thumbnail: string;
    boardName: string;
    priority?: boolean;
}

export const BoardCard = ( { title, thumbnail, boardName, priority }: IBoardCardProps ) => {
    return (
        <div className="rounded-lg shadow-sm border bg-white hover:shadow-md transition duration-200 ease-in-out">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-lg">
                <ImageWithPlaceholder
                    src={thumbnail}
                    alt={title}
                    className="rounded-t-lg"
                    priority={priority}
                />
            </div>
            <div className="p-3">
                <h3 className="text-sm font-semibold truncate">{title}</h3>
                <p className="text-xs text-gray-500">{boardName}</p>
            </div>
        </div>
    );
}
