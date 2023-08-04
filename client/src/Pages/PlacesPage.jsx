import { useEffect, useState } from "react";
import Image from "../Image.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
// import PerksLabels from "../PerksLabels";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../DbConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function PlacesPage(params) {
    const{action} = useParams()
    // const [title,setTitle] = useState('')
    // const [address,setAddress] = useState('')
    // const [addedPhotos,setAddedPhotos] = useState([])
    // const [photoLink,setPhotoLink] = useState('')
    // const [description,setDescription] = useState('')
    // const [perks,setPerks] = useState([])
    // const [checkIn,setCheckIn] = useState('')
    // const [checkOut,setCheckOut] = useState('')
    // const [maxGuest,setMaxGuest] = useState(1)
    const [redirectToPlace,setRedirectToPlace]=useState(false)
    function inputHeader(text){
        return(
            <h2 className="2xl mt-4">{text}</h2>
        )
    }
    function inputDescription(text){
        return(
            <p className="text-gray 500 text-sm"> {text}</p>
        )
    }
     
    function preInput(header,description){
      return(
                <>
                     {inputHeader(header)}
                     {inputDescription(description)}
                 </>
            )
     }

     const [places,setPlaces] = useState([]);


     useEffect(() => {
        const itemArr=[]
         onAuthStateChanged(auth,async(user)=>{
          
    // axios.get('/places').then(response => {
    //       setPlaces(response.data);
    //     });
    
    const data = await getDocs(collection(db,"Places"))
    
    data.forEach((item)=>{
      const dataPac ={...item.data(),id: item.id}
      itemArr.push(dataPac)
    })
         setPlaces(itemArr)
         
        })
    
        
      }, []);
    
      //Here fetch

    // async function addPhotoByLink(ev){
    //     ev.preventDefault()
    //     const {data:filename}= await axios.post('./upload-by-link',{Link:photoLink})
    //     setAddedPhotos(prev =>{
    //         return [...prev,filename]
    //     })
    //     setPhotoLink('')
    //  }
    //  function uploadPhoto(ev) {
    //   const files= ev.target.files
    //   const data= new FormData()

    //   for(let i = 0; i < files.length; i++){
    //     data.append('photos',files[i])
    //   }

    //   axios.post('/uploads',data,{
    //     headers:{'Content-type':'/multipart/form-data'}

    //   }).then(response =>{
    //     const{data:filenames}=response
    //     setAddedPhotos(prev =>{
    //         return [...prev,...filenames]
    //     })
    //   })   
    //  }
      
    //  async function addNewPlace(ev){
    //     ev.preventDefault()
    //     try {
    //         await addDoc(collection(db,{
    //             title,address,addedPhotos,
    //             description,perks,extraInfo,
    //             checkIn,checkOut,maxGuest
    //         }))
    //         setRedirectToPlace(true)
    //         console.log(success); 
    //     } catch (error) {
    //         alert(error)
    //     }
      


    //     // await axios.post('/places',{
    //     //     title,address,addedPhotos,
    //     //     description,perks,extraInfo,
    //     //     checkIn,checkOut,maxGuest
    //     // })
        
    // }


    // useEffect(() => {
    //     const itemArr=[]
    //      onAuthStateChanged(auth,async(user)=>{
    // // axios.get('/places').then(response => {
    // //       setPlaces(response.data);
    // //     });
    
    // const data = await getDocs(collection(db,"Places"))
    
    // data.forEach((item)=>{
    //   itemArr.push(item.data())
    // })
    //      setPlaces(itemArr)
    //       })

    //     }, []);

    if(redirectToPlace && action){
       return <Navigate to={'/account/places'}/>
    }
     return(
        <div>
            {action !== 'new' && (
              <div className="text-center">
                <Link className= "inline-flex  gap-1 bg-primary text-white px-6 py-2 rounded-full" to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
</                  svg>

                    Add a new place
                    </Link>
                    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                     {places.length > 0 && places.map((place) => (
                         <Link key={place.id} to={'/place/' + place._id}>
                             <div className="bg-gray-500 mb-2 rounded-2xl flex">
                                 {place.addedPhotos?.[0] && (
                                     <Image className="rounded-2xl object-cover aspect-square" src={place.addedPhotos?.[0]} alt="" />
                                 )}
                             </div>
                             <h2 className="font-bold">{place.address}</h2>

                             <h3 className="text-sm text-gray-500">{place.title}</h3>
                             <div className="mt-1">
                                 <span className="font-bold">${place.price}</span> per night
                                 <h2 className="font-bold">Perks:{place.perks + " "} </h2>
                                 <h2 className="font-bold">CheckIn:{place.checkIn}</h2>
                                 <span><h2 className="font-bold">CheckOut:{place.checkOut}</h2></span>
                                 <h2 className="font-bold">{place.maxGuest}</h2>
                                 <h2 className="font-bold">{place.description}</h2>

                             </div>
                         </Link>
                     ))}
                    </div>

            </div>  
            )}
            {/* {action ==='new' &&(
                <div>
                    <form>
                        {preInput("Tittle","Something needs to be fixed here!!! Will come back to you later")}
                        <input type="text" 
                        placeholder="title, for example: My lovely apartment"
                        value={title}
                        onchange = {en => setTitle(ev.target.value)}
                        
                        ></input>
                        {preInput("Address","Something needs to be fixed here!!! Will come back to you later")}
                        <input type="text" placeholder="address" value={address}
                        onchange = {en => setAddress(ev.target.value)} />

                        {preInput("Photos","More Photos")}
                        <div className="flex gap-2">
                            <input type="text" placeholder={'Add a photo using a link.......(Jpeg)'}  value={photoLink}
                        onchange = {en => setPhotoLink(ev.target.value)}/>
                            <button onClick={addPhotoByLink} className="bg-gray-300 px-4 rounded-2xl ">Add&ngsp;photo</button>
                        </div>


                        <div className="mt-2 gap-2 grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5">
                            {addedPhotos.length > 0 && addedPhotos.map(link =>(
                                <div className="h-32 flex" key = {link}>
                                    <img  className="rounded 2xl w-full object-cover"  src={"http://localhost:4000/uploads/"+ link} alt="" />
                                </div> 
                            ))}
                             <labels className="h-32 cursor-pointer flex items-center gap-2 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                                <input type="file" multiple className="hidden" onChange={uploadPhoto}/>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                 Uploads
                             </labels>
                        </div>
                        {preInput("Description","Any other description")}
                        <template value={description}
                        onchange = {en => setDescription(ev.target.value)}/>

                        {preInput("Perks","Choose that which best describ your place")}
                        <div className=" mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-col-6 gap-2" >
                            <PerksLabels selected={perks} onchange={setPerks}/>
                        </div>

                        {preInput("ExtraInfo","Rules and Regulations")}
                        <textarea value={extraInfo}
                        onchange = {en => setExtraInfo(ev.target.value)}/>

                        {preInput("Check In && Out time"," Times for checkin and checkout/n. Time to clean room between guest")}
                        <div className="grid sm:grid-cols-3 gap-2">
                            <div>
                                <h3 className="mt-2 -mb-1">check in time</h3>
                                <input type="text" placeholder="14:00" value={checkIn}
                                     onchange = {en => setCheckIn(ev.target.value)} />
                            </div>

                            <div>
                            <h3 className="mt-2 -mb-1">check out time</h3>
                                <input type="text"  placeholder="09:00" value={checkOut}
                                     onchange = {en => setCheckOut(ev.target.value)}/>
                            </div>

                            <div>
                            <h3 className="mt-2 -mb-1">Max number of Guest</h3>
                                <input type="number" value={maxGuest}
                                    onchange = {en => setMaxGuest(ev.target.value)} />
                            </div>
                        </div>

                        <div>
                            <button className="primary mt-2 mb-2" >Save</button>
                        </div>
                    </form>
                </div>
            )} */}
        </div>
    )
    
}