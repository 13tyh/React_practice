import {useState, useMemo} from "react";

export type useUserSearch = {
  userName: string;
  userAge: string;
  query: string;
  handleChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeUserAge: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddUser: () => void;
  filteredUsers: User[];
};

export type User = {
  name: string;
  age: number;
};

const INITIAL_USERS: User[] = [
  {
    name: "Alice",
    age: 22,
  },
  {
    name: "Bob",
    age: 30,
  },
  {
    name: "Charlie",
    age: 25,
  },
  {
    name: "David",
    age: 40,
  },
  {
    name: "Eve",
    age: 35,
  },
  {
    name: "Frank",
    age: 28,
  },
];

export const useUserSearch = (): useUserSearch => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [query, setQuery] = useState("");

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAge(e.target.value);
  };

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleAddUser = () => {
    if (!userName || !userAge) {
      return;
    }

    const user: User = {
      name: userName,
      age: Number(userAge),
    };

    setUsers((prevUsers) => [...prevUsers, user]);
    setUserName("");
    setUserAge("");
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.name.includes(query));
  }, [users, query]);

  return {
    userName,
    userAge,
    query,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeQuery,
    handleAddUser,
    filteredUsers,
  };
};
