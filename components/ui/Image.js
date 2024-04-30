import Image from "next/image";
import React from "react";

const MRFImage = ({
  children,
  src,
  alt,
  quality = 100,
  classNames = "",
  bgImage = false,
  ...rest
}) => {
  if (bgImage) {
    return (
      <div className={`relative ${classNames}`}>
        <div className="absolute w-full h-full">
          <Image
            alt={alt}
            src={src}
            placeholder="blur"
            blurDataURL="/images/blur-bg.jpg"
            quality={quality}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative z-[1]">{children}</div>
      </div>
    );
  } else {
    return (
      <Image
        className={classNames}
        alt={alt}
        src={src}
        placeholder="blur"
        blurDataURL="/images/blur-bg.jpg"
        quality={quality}
        style={{
          width: "100%",
        }}
      />
    );
  }
};

export default MRFImage;
