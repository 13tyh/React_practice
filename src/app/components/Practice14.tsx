"use client";

import {Button} from "@/components/ui/button";
import {Input} from "../../components/ui/input";
import React from "react";
import {usePokemon} from "@/hooks/usePokemon";

const Practice14 = () => {
  const {pokemonData, query, error, handleSetQuery, fetchPokemon} =
    usePokemon();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl mb-4">ポケモン検索</h3>
          {/* 入力フォーム */}
          <div>
            <Input
              type="text"
              value={query}
              placeholder="ポケモンの名前"
              onChange={handleSetQuery}
            />
          </div>

          <p className="mt-2 text-base text-red-500">{error ? error : " "}</p>

          {/* ポケモンの情報 */}
          <div>
            {pokemonData && (
              <div className="text-center text-base">
                <h2 className="text-3xl">{pokemonData.name}</h2>
                <div className="mt-2 flex justify-center">
                  <img
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name}
                  />
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <p>高さ：{pokemonData.height}m</p>
                  <p>体重：{pokemonData.weight}kg</p>
                  <p>
                    タイプ：
                    {pokemonData.types.map((t) => t.type.name).join(", ")}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-center">
            <Button className="bg-blue-400" onClick={fetchPokemon}>
              検索
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice14;
