import Image from "next/image";

interface IImageWithPlaceholderProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    sizes?: string;
}

export const ImageWithPlaceholder = ( {
    src,
    alt,
    width = 600,
    height = 400,
    className = "",
    priority = false,
    sizes = "(min-width: 1024px) 25vw, 50vw"
}: IImageWithPlaceholderProps ) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`object-cover ${ className }`}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PSc1MCUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nNTAlJyBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+"
            priority={priority}
            sizes={sizes}
        />
    );
}
