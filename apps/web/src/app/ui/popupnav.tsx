'use client';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { useState, useEffect } from "react";


export default function Popup() {

    useEffect(() => {
      
      gsap.registerPlugin(Draggable);

      Draggable.create(".popuppos", {
        bounds: "body"
      })

    });

    const [canSee, setSee] = useState(false);

    return (
<>
        
<div className="popuppos">

<button onClick={() => {canSee ? setSee(false) : setSee(true)}}>
  {canSee ? 
  <div className="bg-zinc-200 p-2 rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</div>
  
  : 
  
  <div className="bg-zinc-300 p-2 rounded-full">
   <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg> 
</div>
  }

</button>


</div>

{canSee ? <div className="popup rounded-3xl">

    <p className="text-black">All</p>
    <p className="text-zinc-400">Art Direction</p>
    <p className="text-zinc-400">Production</p>
    <p className="text-zinc-400">Brand Identity</p>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

<form className="border border-black">
<input placeholder="Search"></input>
</form>


</div> : null}

</>
    );

}