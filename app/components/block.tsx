import Image from "next/image";

const imageStyle = {
  borderRadius: "50%",
  objectPosition: "center bottom",
};

interface BlockProps {
  title: string;
  content: string;
  photo: string;
  size: number;
}

const Block = ({ title, content, photo, size }: BlockProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-main text-2xl text-slate-700 underline decoration-yellow-500 underline-offset-8 decoration-1">
        {title}
      </h1>
      <div className="w-full md:w-2/3 pt-2">
        <p className="font-secondary text-center text-sm sm:text-base text-gray-400">
          {content}
        </p>
        {title === "WHERE TO STAY" && (
          <p className="pt-4 text-center font-main text-2xl text-slate-500">
            <a href="https://www.coombelodge.co.uk/accommodation/local-accommodation/">
              Accomodation Ideas !
            </a>
          </p>
        )}
      </div>
      <div className="relative">
        <Image
          src="/blob.svg"
          width={450}
          height={450}
          alt="blob"
          className="opacity-30"
        />
        <div className="pt-4 pb-8 absolute right-20 top-20  sm:pr-4 flex items-center justify-center">
          <Image
            src={photo}
            alt="house"
            className="object-cover border-gray-100 border-2 w-48 h-48 xs:w-64 xs:h-64"
            style={imageStyle}
            width={size}
            height={size}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Block;
