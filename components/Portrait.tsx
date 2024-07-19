import Image from "next/image";

interface PictureProps {
  src: string;
  alt: string;
}

export default function Portrait({ src, alt }: PictureProps): JSX.Element {
  return (
    <Image
      className="m-5 rounded-lg outline outline-8 outline-white shadow-lg rotate-2"
      src={src}
      alt={alt}
      width={125}
      height={125}
    />
  );
}
