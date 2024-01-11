'use client';

import React from "react";
import Link from "next/link";
import NavSquare from "./navsquare";
import "@repo/ui/styles";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
// import { useGSAP } from "@gsap/react";
import { useEffect } from 'react';



export default function Navbar() {

  useEffect(() => {
    
    gsap.registerPlugin(Draggable);

    Draggable.create("#flexer", {
      bounds: "html"
    })

  });


  return (
    <>
      <div id="flexer" className="flexbottomcontainer rounded-lg bg-neutral-900">

          
          <div style={{['paddingLeft' as any] : '1.5rem', ['borderLeft' as any] : '1px solid #625555'}}>
          <NavSquare />
          </div>
          <div style={{['paddingLeft' as any] : '.5rem'}}>
          <NavSquare />
          </div>
          <div style={{['paddingLeft' as any] : '.5rem'}}>
          <NavSquare />
          </div>
          <div style={{['paddingLeft' as any] : '.5rem'}}>
          <NavSquare />
          </div>
          
          
          
                  {/* <p className="white">Explore</p> */}
        

        

        <div style={{['paddingLeft' as any] : '37rem'}}>
                <Link href="/explore">
                  <p className="white">Explore</p>
                </Link>
                </div>
                <div style={{['paddingLeft' as any] : '2rem'}}>
                <Link href="/members">
                  <p className="white">Members</p>
                </Link>
                </div>
                <div style={{['paddingLeft' as any] : '2rem'}}>
                <Link href="/mentors">
                  <p className="white">Mentors</p>
                </Link>
                </div>
                <div style={{['paddingLeft' as any] : '2rem'}}>
                <Link href="/network">
                  <p className="white">Network</p>
                </Link>
                </div>
                <div style={{['paddingLeft' as any] : '4rem', ['alignSelf' as any] : 'center'}}>
                <Link href="/start">
                <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Start</button>
                </Link>
                </div>
              

        

        </div>


      {/* <div className="fixed wider rounded-lg bg-neutral-900">
        <div className="rel">
          <div className="navsquarecontainer">
            <ul>
            <li className="navsquares">
              <NavSquare />
              </li>
              <li className="navsquares">
              <NavSquare />
              </li>
              <li className="navsquares">
              <NavSquare />
              </li>
              <li className="navsquares">
              <NavSquare />
              </li>

              </ul>
            </div>
        <div className="vertcent">
            <ul>
              <li className="inline">
                <Link href="/explore">
                  <p className="white">Explore</p>
                </Link>
              </li>
              <li className="inline">
                <Link href="/members">
                  <p className="white">Members</p>
                </Link>
              </li>
              <li className="inline">
                <Link href="/mentors">
                  <p className="white">Mentors</p>
                </Link>
              </li>
              <li className="inline">
                <Link href="/network">
                  <p className="white">Network</p>
                </Link>
              </li>
              <li className="inline">
                <Link href="/start">
                <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Start</button>
                </Link>
              </li>
            </ul>
            </div>
            </div>
            </div> */}
    </>
  );
};

