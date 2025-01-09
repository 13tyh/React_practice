import {useState} from "react";

type useMemoListType = {
  memo: string;
  memoList: string[];
  handleChangeMemo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddMemo: () => void;
  handleDeleteMemo: (index: number) => void;
};

export const useMemoList = (): useMemoListType => {
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState<string[]>([]);
  const handleChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  };
  const handleAddMemo = () => {
    if (!memo) return;
    setMemoList([...memoList, memo]);
    setMemo("");
  };
  const handleDeleteMemo = (index: number) => {
    const newMemos = memoList.filter((_, i) => i !== index);
    setMemoList(newMemos);
  };
  return {memo, memoList, handleChangeMemo, handleAddMemo, handleDeleteMemo};
};
