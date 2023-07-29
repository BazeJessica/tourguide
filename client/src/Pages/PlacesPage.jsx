import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PlacesPage(params) {
    const{action} = useParams()
    const [title,setTitle] = useState('')
    const [address,setAddress] = useState('')
    const [existingPhotos,setExistingPhotos] = useState([])
    const [photoLink,setPhotoLink] = useState('')
    const [desciption,setDescription] = useState('')
    const [perks,setPerks] = useState([])
    const [checkIn,setCheckIn] = useState('')
    const [checkOut,setCheckOut] = useState('')
    const [maxGuest,setMaxGuest] = useState(1)
     return(
        <div>
            {action !== 'new' && (
              <div className="text-center">
                <Link className= "inline-flex  gap-1 bg-primary text-white px-6 py-2 rounded-full" to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clip-rule="evenodd" />
</                  svg>

                    Add a new place
                    </Link>
            </div>  
            )}
            {action ==='new' &&(
                <div>
                    <form>
                        <h2 className="2xl mt-4">Title</h2>
                        <p className="text-gray 500 text-sm"> Something needs to be fixed here!!! Will come back to you later</p>
                        <input type="text" placeholder="title, for example: My lovely apartment"></input>
                        
                        <h2 className="2xl mt-4">Address</h2>
                        <p className="text-gray 500 text-sm"> Something needs to be fixed here!!! Will come back to you later</p>
                        <input type="text" placeholder="address" />

                        <h2 className="2xl mt-4">Photos</h2>
                        <p className="text-gray 500 text-sm"> Something needs to be fixed here!!! Will come back to you later</p>
                        <div className="flex gap-2">
                            <input type="text" placeholder={'Add a photo using a link.......(Jpeg)'}  />
                            <button className="bg-gray-300 px-4 rounded-2xl ">Add&ngsp;photo</button>
                        </div>
                        <div className="mt-2 grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5">
                             <button className=" flex gap-2 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                 Upload
                             </button>
                        </div>

                        <h2 className="2xl mt-4">Description</h2>
                        <p className="text-gray 500 text-sm"> Description of the place should go here~!!!</p>
                        <template/>

                        <h2 className="2xl mt-4">Perks</h2>
                        <p className="text-gray-500 text-sm">Selects all perks of your place</p>

                        <div className=" mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-col-6 gap-2" >
                            <label className="p-4 flex gap-2 item-center rounded-2xl cursor-pointer">
                                <input type="checkbox"/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <span>TV</span>
                            </label>

                            <label className="p-4 flex gap-2 item-center rounded-2xl cursor-pointer">
                                <input type="checkbox"/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                <span>Trash Can</span>
                            </label>

                            <label className="p-4 flex gap-2 item-center rounded-2xl cursor-pointer">
                                <input type="checkbox"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                    </svg>
                                <span>Wifi </span>
                            </label>

                            <label className="p-4 flex gap-2 item-center rounded-2xl cursor-pointer">
                                <input type="checkbox"/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                                <span>Free parking spot</span>
                            </label>

                            <label className="p-4 flex gap-2 item-center rounded-2xl cursor-pointer">
                                <input type="checkbox"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg>
                                <span>Bacony</span>
                            </label>

                            <label className="p-4 flex gap-2 item-center rounded-2xl cursor-pointer"> className=""
                                <input type="checkbox"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                <span>Private Entrance</span>
                            </label>
                            
                        </div>

                        <h2 className="2xl mt-4">Extra Info</h2>
                        <p className="text-gray-500 text-sm">Rules && Regulations</p>
                        <textarea/>

                        <h2 className="2xl mt-4">Check "IN" & "OUT" time</h2>
                        <p className="text-gray-500 text-sm">
                            Times for checkin and checkout. <br /> 
                            Time to clean room between guest
                        </p>
                        <div className="grid sm:grid-cols-3 gap-2">
                            <div>
                                <h3 className="mt-2 -mb-1">check in time</h3>
                                <input type="text" placeholder="14:00" />
                            </div>
                            <div>
                            <h3 className="mt-2 -mb-1">check out time</h3>
                                <input type="text" />
                            </div>
                            <div>
                            <h3 className="mt-2 -mb-1">Max number of Guest</h3>
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <button className="primary mt-2 mb-2" >Save</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
    
}