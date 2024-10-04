

import { Link, Outlet } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { useEffect, useState } from "react";

function Layout({ user, setUser }) {
  const [loading, setLoading] = useState(true);
  console.log(user)

  async function logoutHandler() {
    const response = await axiosInstance.delete("users/logout");
    if (response.status === 200) {
      setUser(null);
    }
  }

  useEffect(() => {
    // Эмулируем ожидание данных
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <>
      <header className="header">
        <div className="header__logo">
        <Link to={`/`}>
          <h1 id="Delicios"> Delicious club</h1>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item "> 
              <Link to={"/"}>Главная</Link>
            </li>
            <li className="header__nav-item ">
              <Link to={"/recipes"}>Рецепты</Link>
            </li>
            {!user && (
              <>
                <li className="header__nav-item ">
                  <Link to={"/authorization"}>Авторизация</Link>
                </li>
                <li className="header__nav-item ">
                  <Link to={"/registration"}>Регистрация</Link>
                </li>
              </>
            )}
            <li id="user" >
              {user && (
                <>
                  {"Привет, " + user.name}
                  <button id="exit"type="button" onClick={logoutHandler}>
                    Выйти
                  </button>
                </>
              )}
            </li>
          </ul>
        </nav>
      </header>
      {
        loading ? (
        <div className="loader"></div>
      ) : (
        <div className="content">
        <main>
        <Outlet /> {/* Основной контент будет отображаться здесь */}
      </main>
        </div>
      )
      }
      
    </>
  );
}

export default Layout;
