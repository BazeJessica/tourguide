import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function RegisterPage(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = (e) => {
        e.preventDefault()
        axios.post("/register", {
            name,
            email,
            password
        })
    }

    return(
        <div className="mt-4 flex grow items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}> 
                    <input type="text" name="username" value={name} o id="" placeholder="John Quaye" onChange={e=> setName(e.target.value)} />
                    <input type="email" name="" id="email" value={email} placeholder="yahoo@gmail.com" onChange={e=> setEmail(e.target.value)} />
                    <input type="password" name="password" id="" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)} />
                    <button className="primary">Register</button>
                    <div className="p-2 text-center text-gray-500">
                        Already have an account? <Link className="text-black" to={"/login"}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
        
    );
}