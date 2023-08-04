
import {useEffect, useState} from "react";
// import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Image from "../Image.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../DbConfig.js";
import { collection, getDoc, getDocs } from "firebase/firestore";

export default function IndexPage() {
  const [places,setPlaces] = useState([]);


  const navigate = useNavigate()

  useEffect(() => {
    const itemArr=[]
     onAuthStateChanged(auth,async(user)=>{
      if(user){
// axios.get('/places').then(response => {
//       setPlaces(response.data);
//     });

const data = await getDocs(collection(db,"Places"))

data.forEach((item)=>{
  const dataPac ={...item.data(),id: item.id}
  itemArr.push(dataPac)
})
     setPlaces(itemArr)
      }else{
        return navigate("/login")
      }
    })

    
  }, []);



  // console.log(generateUniqueId());
  




  //Here fetch the places from the firebase dataase 
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {places.length > 0 && places.map((place) => (
        <Link key={place.id} to={'/place/'+place._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {place.addedPhotos?.[0] && (
              <Image className="rounded-2xl object-cover aspect-square" src={place.addedPhotos?.[0]} alt=""/>
            )}
          </div>
          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm text-gray-500">{place.title}</h3>
          <div className="mt-1">
            <span className="font-bold">${place.price}</span> per night
          </div>
        </Link>
      ))}
    </div>
  );
}


