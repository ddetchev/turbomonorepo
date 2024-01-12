import SmallDashPiece from "./smalldashpiece"
import SmallDashPieceTwo from "./smalldashpiecetwo"
import SmallDashPieceThree from "./smalldashpiecethree"
import LongDashPiece from "./longdashpiece"


export default function DashJourney() {

    return (

    <>
    <div className="flexdashcontainer">

        <p className="white text-2xl">Welcome home, Chris.</p>

        {/* <div>

        <button type="button" className="text-white bg-black hover:bg-gray-900 border border-red-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-red-900">Schedule</button>
        <button type="button" className="text-gray-500 font-bold bg-white border border-red-900 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-red-900 dark:hover:bg-gray-700 dark:hover:border-red-900 dark:focus:ring-gray-700">Network</button>

        </div> */}

        

        <p className="text-xs">Points: <b>3000XP</b></p>
        <p className="text-xs">Top Skills: <b>Technology, Leadership, Operations</b></p>
        <p className="text-xs">Active Journey: <b>ACTIVE</b></p>


        

    </div>

    <div className="flexmaindashcontainer">

        <SmallDashPiece />
        <SmallDashPieceTwo />
        <SmallDashPieceThree />
        <LongDashPiece />

    </div>

    </>
    )

}