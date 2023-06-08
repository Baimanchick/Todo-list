import React, { useState, useRef } from "react";
import "../css/index.css";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  //!   const [title, setTitle] = useState(''); Нельзя на TypeScript
  //   const [title, setTitle] = useState<string>();
  const ref = useRef<HTMLInputElement>(null);

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";

      //   console.log(title);
      //   setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={handleChange}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
