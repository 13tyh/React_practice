"use client";

import React from "react";
import {Button} from "@/components/ui/button";
import {useSWAPI} from "@/hooks/useSWAPI";

const Practice13 = () => {
  const {character, handleChangeApiId} = useSWAPI();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {character ? (
            <div className="text-center text-base">
              <h2 className="text-2xl">{character.name}</h2>
              <p>身長：{character.height}</p>
              <p>体重：{character.mass}</p>
              <p>髪の色：{character.hair_color}</p>
              <p>肌の色：{character.skin_color}</p>
              <p>目の色：{character.eye_color}</p>
              <p>生年：{character.birth_year}</p>
              <p>性別：{character.gender}</p>
            </div>
          ) : (
            <div className="text-center text-base">
              <h2 className="text-2xl">読み込み中...</h2>
            </div>
          )}

          <div className="flex justify-center">
            <Button className="bg-blue-400 " onClick={handleChangeApiId}>
              次のキャラクター
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice13;
