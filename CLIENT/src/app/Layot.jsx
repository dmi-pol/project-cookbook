// Layout.js

import { Link, Outlet } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

function Layout({ user, setUser }) {
  async function logoutHandler() {
    const response = await axiosInstance.delete("users/logout");
    if (response.status === 200) {
      setUser(null);
    }
  }

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1 id="Delicios"> Delicious club</h1>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <Link to={"/recipes"}>Рецепты</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/authorization"}>Авторизация</Link>
                </li>
                <li>
                  <Link to={"/registration"}>Регистрация</Link>
                </li>
              </>
            )}
            <li id="user">
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
      <main>
        <Outlet /> {/* Основной контент будет отображаться здесь */}
      </main>
    </>
  );
}

export default Layout;
