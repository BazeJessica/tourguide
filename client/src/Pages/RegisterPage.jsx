import { Link } from "react-router-dom";

export default function RegisterPage(){
    return(
        <div className="mt-4 flex grow items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center">Register</h1>
                <form className="max-w-md mx-auto"> 
                    <input type="text" name="username" id="" placeholder="John Quaye" />
                    <input type="email" name="" id="email" placeholder="yahoo@gmail.com" />
                    <input type="password" name="password" id="" placeholder="Password" />
                    <button className="primary">Login</button>
                    <div className="p-2 text-center text-gray-500">
                        Already have an account? <Link className="text-black" to={"/login"}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
        
    );
}