import React, {useState, useEffect} from 'react'
import { useNavigate} from "react-router-dom";


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            })

        })
        .then(() => {
            navigate("/")
        })
    }

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={register}>
            <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username' />
            <br />
            <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />
            <br />
            <button type='submit'>Register</button>
        </form>
      </div>
  )
}

export default Register