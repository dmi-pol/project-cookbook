import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

function Post({ cat, setCats }) {
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  async function deleteHeandler(id) {
    const response = await axiosInstance.delete(`/cats/${cat.id}`);
  
    
    if (response.status === 200) {
      setCats((prev) => prev.filter((el) => el.id !== id));
    }
  }

  async function updateHeandler(e) {
    e.preventDefault();
    const response = await axiosInstance.put(`/cats/${cat.id}`, {
      name,
      breed,
    });
    console.log(response);
    if (response.status === 200) {
      setCats((prev) =>
        prev.map((el) =>
          el.id === response.data.cat.id
            ? response.data.cat
            : el
        )
      );
      setIsShow(false);
    }
  }
  return (
    <div>
      <Link to={`/cats/${cat.id}`}>
        <h3>{cat.name}</h3>
      </Link>
      <p>{cat.breed}</p>
      <button type="button" onClick={() => deleteHeandler(cat.id)}>
        Delete cat
      </button>
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        Update cat
      </button>
      {isShow && (
        <form onSubmit={updateHeandler}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Breed
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
}

export default Post;
