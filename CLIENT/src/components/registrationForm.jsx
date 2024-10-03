import React from "react";
import { useState } from "react";
import axiosInstance, { SetAccessToken } from "../../axiosInstance";
 

function RegPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== rpassword) {
      setErrorMessage("Пароли не совпадают");
      setShowError(true);
    } else {
      setShowError(false);
      const response = await axiosInstance.post("/users/registration", {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        setUser(response.data.user);
        SetAccessToken(response.data.accessToken);
      } else {
        setErrorMessage("Нету пользователя =(");
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
      <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
           </label>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          Pass
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label>
          Repeat password
          <input
            type="password"
            value={rpassword}
            onChange={(e) => setRpassword(e.target.value)}
          ></input>
        </label>
        <button type="submit">Зарегаться!!!!!</button>
      </form>
      {showError && (
        <div style={{ border: "1px solid red" }}>{errorMessage}</div>
      )}
    </div>
  );
}

export default RegPage;
