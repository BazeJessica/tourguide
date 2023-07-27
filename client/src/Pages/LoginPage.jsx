import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";

export default function LoginPage() {
    const[email,setEmail]= useState('')
    const[password,setPassword] =useState('')
    const[redirect,setRedirect] = useState(false)
   const {setUser} = useContext(UserContext)

   const navigate=useNavigate()

   
    async function handleSubmitLogin(ev) {
        ev.preventDefault()
        try{
           const {data} =  await axios.post('/login',{email,password})
           console.log(data);
            setUser(data)
            return navigate("/")
        na
        }catch (e){
            console.log(e);

        }
    }
        
  

    return(
        <div className="mt-4 flex grow items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleSubmitLogin}> 
                    <input type="email" name="email" placeholder="yahoo@gmail.com"
                         value={email} 
                         onChange= {ev => setEmail(ev.target.value)}
                     />
                    <input type="password" name="password"  placeholder="Password"
                        value={password} 
                        onChange={ev=>setPassword(ev.target.value)} 
                     />
                    <button className="primary">Login</button>
                    <div className="p-2 text-center text-gray-500">
                        Don't have an account yet? <Link className="text-black" to={"/register"}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
        
    );
}