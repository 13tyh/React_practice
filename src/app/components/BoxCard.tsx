import React from "react";

type Props = {
  title: string;
  content: string;
};

const BoxCard = (props: Props) => {
  const {title, content} = props;
  return (
    <div className="p-6 shadow-xl border-2 border-gray-300 rounded-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4 font-base">{content}</p>
    </div>
  );
};

export default BoxCard;
