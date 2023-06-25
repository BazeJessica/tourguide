import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="mt-4 flex grow items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center">Login</h1>
                <form className="max-w-md mx-auto"> 
                    <input type="email" name="" id="" placeholder="yahoo@gmail.com" />
                    <input type="password" name="password" id="" placeholder="Password" />
                    <button className="primary">Login</button>
                    <div className="p-2 text-center text-gray-500">
                        Don't have an account yet? <Link className="text-black" to={"/register"}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
        
    );
}