
import AccountNav from "../AccountNav";
import { signOut } from "firebase/auth";
import { auth } from "../DbConfig.js";
import { useParams } from "react-router-dom";

export default function AgentPage() {
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'agent';
    }

<h1>
..

</h1>



    const agents = [{
        name: "Sophia Martinez",
        intro: `An experienced and enthusiastic tourist agent with a passion for travel and exploration. With years of expertise in the industry, 
        she excels in crafting unforgettable, itineraries for clients, catering to their unique preferences and interests From recommending top destinations
                to organizing seamless travel arrangements, her attention to detail and customer-centric approach make her a 
                reliable and trusted partner for any travel adventure.`,
        contact: "jessicaDough@gmail.com",
        number:"+233-587265348",
        location:"Accra-Ghana",
        image: "https://images.unsplash.com/photo-1506880135364-e28660dc35fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZlbWFsZSUyMGFnZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }, {
        name: "Carlin Dough",
        intro: `An experienced and enthusiastic tourist agent, passionate about creating unforgettable travel experiences for his clients. 
        With an in-depth knowledge of various destinations, he meticulously plans and organizes customized itineraries tailored to each traveler's preferences and interests. 
        From booking flights and accommodations to arranging guided tours and excursions, 
        she ensures seamless travel arrangements, leaving no detail overlooked.`,
        contact: "jessicaDough@gmail.com",
        number:"+233-685492358",
        location:"Kumasi-Ghana",
        image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZlbWFsZSUyMGFnZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }, 
     {
        name: "Ava brown",
        intro: `A seasoned tourist agent with a passion for travel and exploration. With years of experience in the industry,
         she has developed a deep understanding of various destinations, 
        cultures, and travel logistics. Her warm and friendly demeanor puts her clients at ease, 
        allowing her to curate personalized itineraries that cater to their unique preferences and interests. 
        Whether it's a relaxing beach getaway  or adventurous trek through the mountains.`,
        contact: "jessicaDough@gmail.com",
        number:"+233-235879654",
        location:"Temale-Ghana",
        image: "https://images.unsplash.com/photo-1503034801854-d64b496ae5ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlJTIwYWdlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }, 
     {
        name: "Isabella Rodriguez",
        intro: `An experienced and passionate tourist agent with a deep love for travel and exploration. 
        With a keen eye for details and a friendly demeanor,she effortlessly guides her clients through the maze of travel choices, 
        ensuring their vacations are nothing short of unforgettable. Whether it's planning a dreamy tropical getaway,
         a thrilling adventure tour, or a culturally enriching experience, her extensive knowledge of destinations and travel logistics 
        makes her the go-to person for wanderlust seekers.
         an exceptional and seamless travel experience.`,
        contact: "jessicaDough@gmail.com",
        number:"+233-658235986",
        location:"Western-Ghana",
        image: "https://images.unsplash.com/photo-1522262590532-a991489a0253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMGFnZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }, 
     {
        name: "Emma Johnson",
        intro: `A skilled and enthusiastic tourist agent, with a passion for travel and exploration. With extensive knowledge of various destinations, 
        he excels in curating unforgettable travel experiences for her clients. From suggesting exciting itineraries to 
        arranging accommodations and transportation with working experience of 4yrs.`,
        contact: "jessicaDough@gmail.com",
        number:"+233-65873254",
        location:"Ho-Ghana",
        image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZlbWFsZSUyMGFnZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }, {
        name: "Oliva Thompson",
        intro: ` A dedicated and enthusiastic tourist agent with working experience of 5yr, who excels at creating memorable travel experiences for his clients. 
        With a passion for exploring new destinations and a wealth of knowledge about various cultures,
        she takes pride in curating personalized itineraries that cater to each traveler's unique interests and preferences.`,
        contact: "jessicaDough@gmail.com",
        number:"+233-365872985",
        location:"Bolegantaga-Ghana",
        image: "https://images.unsplash.com/photo-1532579224689-13465867b17d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbWFsZSUyMGFnZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }]

    return (
        <div>
            <AccountNav />
            {/* {subpage === 'agent' && (
          <div className="text-center max-w-lg mx-auto">
          </div>
        )}
        {/* {subpage === 'places' && (
          <PlacesPage />
        )} */}
        <div className=" flex justify-center">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
            <h1 style={{ fontWeight: 'bold',fontSize:'2rem' }}>Lets get interactive</h1>
        </div>
                
<div className="mt-2 pt-20 grid grid-row-1 md:row-cols-3 lg:grid-row-4 w-full">
  {agents.map((eachAgent) => {
    return (
        
      <div className="m-2  gap-2 border-gray-300 px-2 rounded-2xl pt-10 w-full">
        <img src={eachAgent.image} alt="" width="100px" height="20px" className="rounded-2xl flex mt-10" style={{ margin: 'auto' }} />
        <p style={{ fontWeight: 'bold', fontSize: '1.7rem' }}>{eachAgent.name}</p>
        {eachAgent.intro}
        <br />
        <span style={{ fontWeight: 'bold' }} className=" shadow shadow-gray-300">Email: <u>{eachAgent.contact}</u></span>
       <p style={{ fontWeight: 'bold' }}>Tele: {eachAgent.number} </p> 
       <p style={{ fontWeight: 'bold' }}> Location: {eachAgent.location}  </p>
       
      </div>
    );
  })}
</div>


            

               

        
        </div>
    )

}