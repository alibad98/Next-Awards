import React from "react";

interface TitleAnimatedProps {
  title: string;
  containerClass: string;
}

const TitleAnimated = ({ title, containerClass }: TitleAnimatedProps) => {
  return (
    <div className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 md:gap-3 px-10"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TitleAnimated;
