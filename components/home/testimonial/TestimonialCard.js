import Image from "next/image";
import React from "react";
import image from "@/assets/testimonials/image.png";

const TestimonialCard = () => {
  return (
    <div className="grid max-w-lg grid-cols-2 gap-4 mx-2">
      <div>
        <Image src={image} alt="testimonial image" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-xl font-bold md:text-2xl text-primary">
          Amanda Seyfried
        </h2>
        <h4 className="text-lg font-bold text-gray-500">
          Sales & Marketing Alien Ltd.
        </h4>
        <p className="mt-2 font-light">
          Consulting WP really helped us achieve our financial goals. The slick
          presentation along with fantastic readability ensures that our
          financial standing is stable.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
