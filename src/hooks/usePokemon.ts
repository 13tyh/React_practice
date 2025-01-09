import {useState} from "react";

type PokemonSprites = {
  front_default: string;
};

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonData = {
  sprites: PokemonSprites;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
};

type usePokemonType = {
  pokemonData: PokemonData | null;
  query: string;
  error: string;
  handleSetQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchPokemon: () => Promise<void>;
};

export const usePokemon = (): usePokemonType => {
  const [query, setQuery] = useState("");
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [error, setError] = useState("");

  const handleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchPokemon = async () => {
    if (!query) {
      setError("クエリを入力してください");
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("ポケモンが見つかりませんでした");
      }
      const data = (await response.json()) as PokemonData;
      setPokemonData(data);
      setError("");
    } catch {
      setError("ポケモンが見つかりませんでした");
      setPokemonData(null);
    }
  };

  return {pokemonData, query, error, handleSetQuery, fetchPokemon};
};
