import Image from "next/image";

interface PictureProps {
  src: string;
  alt: string;
}

export default function Portrait({ src, alt }: PictureProps): JSX.Element {
  return (
    <Image
      className="rounded-lg outline outline-4 outline-white shadow-xl rotate-2 mb-4 z-0 w-auto h-auto"
      src={src}
      alt={alt}
      width={125}
      height={125}
      priority
    />
  );
}
