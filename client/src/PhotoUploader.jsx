import axios from "axios";
import {useEffect, useState} from "react";
import Image from "./Image.jsx";

export default function PhotosUploader({addedPhotos,onChange}) {
  const [photoLink,setPhotoLink] = useState('');

  const [allPhotos,setAllPhotos]=useState([])


  async function addPhotoByLink(ev) {
    ev.preventDefault();
    // const {data:filename} = await axios.post('/upload-by-link', {link: photoLink});
    // onChange(prev => {
    //   return [...prev, filename];
    // });


    setAllPhotos([...allPhotos , photoLink])
    setPhotoLink('');
 
  }
  // function uploadPhoto(ev) {
  //   const files = ev.target.files;
  //   const data = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     data.append('photos', files[i]);
  //   }
  //   axios.post('/upload', data, {
  //     headers: {'Content-type':'multipart/form-data'}
  //   }).then(response => {
  //     const {data:filenames} = response;
  //     onChange(prev => {
  //       return [...prev, ...filenames];
  //     });
  //   })
  // }
  // function removePhoto(ev,filename) {
  //   ev.preventDefault();
  //   onChange([...addedPhotos.filter(photo => photo !== filename)]);
  // }
  // function selectAsMainPhoto(ev,filename) {
  //   ev.preventDefault();
  //   onChange([filename,...addedPhotos.filter(photo => photo !== filename)]);
  // }

  useEffect(() => {
   onChange(allPhotos)
  }, [allPhotos]);

  return (
    <>
      <div className="flex gap-2">
        <input value={photoLink}
               onChange={ev => setPhotoLink(ev.target.value)}
               type="text" placeholder={'Add using a link ....jpg'}/>
        <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
      </div>

{photoLink&& <img src = {photoLink} className=""/>}
<div className="flex gap-5 pt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
{allPhotos&&allPhotos.map((eachPhoto,index)=>{
  return < img src={eachPhoto} key={index} height="300px" width="350px"  className=" border rounded-2xl"/>

   
})}
    </div>

{/* import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";

export default function PhotosUploader({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState("");
  const [allPhotos, setAllPhotos] = useState([]);

  async function addPhotoByLink(ev) {
    ev.preventDefault();

    // Assuming you have initialized Firebase with your config
    // firebase.initializeApp(yourFirebaseConfig);

    try {
      // Upload the photoLink to the Firebase database
      const photoRef = firebase.database().ref("photos").push();
      await photoRef.set(photoLink);

      // Add the photoLink to the allPhotos state
      setAllPhotos([...allPhotos, photoLink]);

      // Clear the input field
      setPhotoLink("");
    } catch (error) {
      console.error("Error uploading photo to Firebase:", error);
    }
  }

  // ... Rest of the code remains the same ...

  return (
    <>
      <div className="flex gap-2">
        <input
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          type="text"
          placeholder={"Add using a link ....jpg"}
        />
        <button
          onClick={addPhotoByLink}
          className="bg-gray-200 px-4 rounded-2xl"
        >
          Add&nbsp;photo
        </button>
      </div>

      {photoLink && <img src={photoLink} alt="Uploaded" className="" />}
      <div className="flex gap-5 pt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {allPhotos &&
          allPhotos.map((eachPhoto, index) => {
            return (
              <img
                src={eachPhoto}
                alt={`Uploaded ${index}`}
                key={index}
                height="300px"
                width="350px"
                className=" border rounded-2xl"
              />
            );
          })}
      </div>
    </>
  );
} */}


    </>
  );
}