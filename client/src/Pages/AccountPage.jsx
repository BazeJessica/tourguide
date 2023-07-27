
import {useContext} from "react"
import {UserContext} from "../UserContext.jsx"
import {Link,Navigate, useParams} from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function AccountPage() {
    const {ready,user,setUser} = useContext(UserContext)
    const[redirect,setRedirect] = useState(null)

let {subpage} = useParams()
if (subpage === undefined){
    subpage = 'profile'
}



    if(!ready)
    {
        return 'Loading.....'
    }
    
    if (ready && !user && !redirect)
    { 
        return <Navigate to={'/login'} />
    }
     
    async function logout() {
        try {
            await axios.get('/logout')
            setUser(null)

            setRedirect('/login')
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    
        
    }

    function linkClasses(type =null) {
        let classes = 'py-2 px-6'
        if (type === subpage){
            classes += 'bg-gray-300 rounded full'
        }
        return classes
        
    }

    if(redirect){
        return <Navigate to={redirect}/>
    }


    return(
        <div> 
            <nav className="w-full flex mt-8 gap-4 justify-center mb-8">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
                <Link className={linkClasses('accommodation')} to={'/account/accommodations'}>My Accomodation</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
            Logged in as {user?.data.name}  ({user?.data.email})
                    <br/>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>

            )}
        </div>

    );}


    

   