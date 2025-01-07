import React from "react";
import BoxCard from "./BoxCard";

const Practice1 = () => {
  const title1 = "挨拶運動しました";
  const content1 = "今日は、朝から挨拶運動をしました。";
  const title2 = "全校集会でした";
  const content2 = "午前は、始業式と全校集会で校長先生の話を聞いていました。";
  const title3 = "集中講義でした";
  const content3 = "三年生は高校受験に向けて頑張っています。";
  return (
    <div className="container mt-10 max-w-full mx-auto">
      <div className="p-6 grid gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3">
        <BoxCard title={title1} content={content1} />
        <BoxCard title={title2} content={content2} />
        <BoxCard title={title3} content={content3} />
        <BoxCard title={title3} content={content3} />
        <BoxCard title={title3} content={content3} />
        <BoxCard title={title3} content={content3} />
      </div>
    </div>
  );
};

export default Practice1;
