export default function TopNav() {

    return (

        <div className="flextopcontainer">
            
            <p className="white text-xl">Welcome home, Chris.</p>

            <div>

            <button type="button" className="text-white bg-black hover:bg-gray-900 border border-red-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-red-900">Schedule</button>
            <button type="button" className="text-gray-500 font-bold bg-white border border-red-900 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-red-900 dark:hover:bg-gray-700 dark:hover:border-red-900 dark:focus:ring-gray-700">Network</button>

            </div>

            <div className="flexpointscontainer text-sm">

                <p>Points: <b>3000XP</b></p>
                <p className="text-xs">Active Journey: <b>ACTIVE</b></p>

            </div>

            <p className="white text-sm">Top Skills: <b>Technology, Leadership, Operations</b></p>

        </div>
    
    )

}