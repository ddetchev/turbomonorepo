import React from "react";
import Link from "next/link";
import NavSquare from "./navsquare";
import "@repo/ui/styles";



const Navbar = () => {
  return (
    <>
      <div className="fixed wider rounded-lg bg-neutral-900">
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
            {/* <NavSquare /> */}
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
            </div>
    </>
  );
};

export default Navbar;