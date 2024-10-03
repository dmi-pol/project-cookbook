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
      <nav>
        <div id="navig">
          <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <Link to={"/cats"}>кОты</Link>
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
                  <button type="button" onClick={logoutHandler}>
                    Выйти
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
