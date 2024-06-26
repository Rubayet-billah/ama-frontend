import LucidIcon from "@/components/ui/icons/LucidIcons";
import Link from "next/link";
import React from "react";

const IndustryCard = ({ industry }) => {
  const { label, summary, icon, link } = industry;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <Link
      href={`/industries/${link}`}
      className="flex items-center gap-2 px-2 py-5 duration-300 hover:bg-white min-h-60 group"
    >
      <div>
        <div
          className={`w-0 mx-auto border-r-8 border-secondary group-hover:visible h-0 group-hover:h-8 duration-300`}
        ></div>
        <div className="relative z-10 w-20">
          {icon && (
            <LucidIcon
              name={icon}
              classNames="mx-auto text-primary"
              size={48}
            />
          )}
        </div>
        <div
          className={`w-0 h-0 mx-auto border-r-8 border-secondary group-hover:visible group-hover:h-8 duration-300`}
        ></div>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h1 className="text-xl font-bold text-primary">{label}</h1>
        <p className="text-sm text-neutral">
          {truncateText(
            summary ||
              "Dummy text: Showing because summary is empty now. It will replace when summary comes from backend",
            130
          )}
        </p>
      </div>
    </Link>
  );
};

export default IndustryCard;
