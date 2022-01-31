import Image from "next/image";
import photo1 from "../public/photo1.jpg";
import photo2 from "../public/photo2.jpg";
import photo3 from "../public/photo3.jpg";

export default function MyImages() {
  return (
    <>
      <div className="h-96">
        <Image
          src={photo1}
          alt="me"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority={true}
        />
        <p>Heewoojeongro 38, Mapo-gu</p>
      </div>
      <div className="h-96">
        <Image
          src={photo2}
          alt="me"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority={true}
        />
        <p>TERTRE, Naksan 5-gil, Jongno-gu</p>
      </div>
      <div className="h-96">
        <Image
          src={photo3}
          alt="me"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority={true}
        />
        <p>Achasan Sunrise Park</p>
      </div>
    </>
  );
}
