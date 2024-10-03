import React, { useState } from "react";
import axiosInstance from "../../axiosInstance";

function CatForm({ setCats, user }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");  

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/cats", { name, breed, userId:user.id });
      console.log(data);
      setCats((prev) => [...prev, data.cat]);
      setName("");
      setBreed("");
    } catch (error) {
      console.error("Ошибка при отправке формы", error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Имя
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя кота"
        />
      </label>
      <br />
      <label>
        Порода
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          placeholder="Введите породу кота"
        />
      </label>
      <br />
      <br />
      <button type="submit">Добавить кота</button>
    </form>
  );
}

export default CatForm;
