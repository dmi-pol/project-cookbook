import React from "react";
import { useState } from "react";
import axiosInstance, { SetAccessToken } from "../../axiosInstance";
import { useNavigate } from "react-router-dom";
 

function RegPage({ setUser }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!email.trim() || !name.trim() || !password.trim()){
      alert("Заполните все поля!")
    }
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
      console.log(response, "====")
      if (response.status === 201) {
        setUser(response.data.user);
        SetAccessToken(response.data.accessToken);
        navigate('/');
      } else {
        setErrorMessage("Нету пользователя =(");
      }
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
      <label>
          <p>Имя</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
           </label>
        <label>
          <p>Email</p>
          
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          <p>Пароль</p>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label>
          <p>Повторите пароль</p>
          
          <input
            type="password"
            value={rpassword}
            onChange={(e) => setRpassword(e.target.value)}
          ></input>
        </label>
        <button type="submit">Зарегистрироваться</button>
        {showError && (
        <div className="error">{errorMessage}</div>
      )}
      </form>
      
    </div>
  );
}

export default RegPage;
