import Image from "next/image";
import photo1 from "../public/photo1.jpg";
import photo2 from "../public/photo2.jpg";
import photo3 from "../public/photo3.jpg";
import photo4 from "../public/photo4.jpg";

export default function images() {
  return (
    <div className="col-start-3 col-span-10 flex flex-col gap-3 mt-32">
      <div className="w-full h-96 flex text-xs">
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-full">
            <Image
              src={photo1}
              alt="me"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              priority={true}
            />
          </div>
          Heewoojeongro 38, Mapo-gu
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-full">
            <Image
              src={photo2}
              alt="me"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              priority={true}
            />
          </div>
          Cafe TERTRE, Naksan 5-gil, Jongno-gu
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-full">
            <Image
              src={photo3}
              alt="me"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              priority={true}
            />
          </div>
          Achasan Sunrise Park
        </div>
      </div>
    </div>
  );
}
