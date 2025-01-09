import {useEffect, useState} from "react";

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

type useSWAPIType = {
  character: Character | null;
  handleChangeApiId: () => void;
  id: number;
};

export const useSWAPI = (): useSWAPIType => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [id, setId] = useState(1);

  const handleChangeApiId = () => {
    setId((prevId) => prevId + 1);
  };

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}/`);
      const data = (await response.json()) as Character;
      setCharacter(data);
      return 0;
    };

    void fetchCharacter();
  }, [id]);
  return {character, handleChangeApiId, id};
};
