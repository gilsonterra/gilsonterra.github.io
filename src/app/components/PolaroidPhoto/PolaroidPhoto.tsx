import Image from "next/image";
import "./styles.css";

type PolaroidPhotoProps = {
  src: string;
  alt: string;
  caption: string;
};

const PolaroidPhoto: React.FC<PolaroidPhotoProps> = ({ src, alt, caption }) => {
  return (
    <figure className="polaroid-photo">
      <div className="polaroid-photo__frame">
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className="polaroid-photo__image"
        />
      </div>
      <figcaption className="polaroid-photo__caption">{caption}</figcaption>
    </figure>
  );
};

export default PolaroidPhoto;
