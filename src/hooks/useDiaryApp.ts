import {useState, useMemo} from "react";

type Diary = {
  title: string;
  content: string;
  date: Date;
};

export const useDiaryApp = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [filterDate, setFilterDate] = useState<Date | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleFilterDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterDate(new Date(e.target.value));
  };

  const handleAddDiary = () => {
    if (!title || !content) {
      return;
    }

    const diary: Diary = {
      title,
      content,
      date: new Date(),
    };

    setDiaries((prevDiary) => [...prevDiary, diary]);
    setTitle("");
    setContent("");
  };

  const filteredDiaries = useMemo(() => {
    return filterDate
      ? diaries.filter(
          (diary) =>
            diary.date.toLocaleDateString() === filterDate.toLocaleDateString()
        )
      : diaries;
  }, [diaries, filterDate]);

  return {
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handleFilterDateChange,
    handleAddDiary,
    filteredDiaries,
  };
};
