import Image, { ImageProps } from "next/image";

export default function AppImage(props: ImageProps) {
  return <Image placeholder="blur" draggable={false} {...props} />;
}
