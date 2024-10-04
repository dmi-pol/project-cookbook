import { useState } from "react"
import axiosInstance, { SetAccessToken } from "../../axiosInstance";
import { useNavigate } from "react-router-dom";


function AuthorizationPage({ setUser }) {

    const [email, setEmail] = useState("john.doe@example.com");
    const [password, setPassword] = useState("123456");
    const navigate = useNavigate();

    async function onSubmitHandler(e) {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("Заполните все поля!")
        }
        const response = await axiosInstance.post("/users/authorization", { email, password })
        if(response.status === 201){
            setUser(response.data.user)
            SetAccessToken(response.data.accessToken)
            navigate('/')
        }else{
            console.log("Нету пользователя =(")
        }
    }

    return (
        <div>
        <form className="reg-form" onSubmit={onSubmitHandler}>
            <label>Email
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                > </input>
            </label>
            <label>Пароль
                <input
                type="password"
                
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                > </input>

                
            </label>
            <button type="submit">Авторизоваться</button>
        </form>
    </div> 
    )
}

export default AuthorizationPage;