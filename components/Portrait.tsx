import Image from "next/image";

interface PictureProps {
  src: string;
  alt: string;
}

export default function Portrait({ src, alt }: PictureProps): JSX.Element {
  return (
    <Image
      className="rounded-md outline-white shadow-md mb-4 z-0 w-auto h-auto grayscale-[0.45]"
      src={src}
      alt={alt}
      width={125}
      height={125}
      priority
    />
  );
}
