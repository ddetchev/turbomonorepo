import Review from "./userreview"


export default function Middle() {

    return (
        <div className="midblock bg-neutral-900">
            <div className="rel">

            <p className="text-6xl font-light bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 inline-block text-transparent bg-clip-text">
	One price
</p>
<br></br>
<p className="text-6xl font-light bg-gradient-to-r from-violet-500 to-pink-500 inline-block text-transparent bg-clip-text">
	for all.
</p>
<br></br>
<br></br>
<p>Pick your starting price</p>
<br></br>
<p className="text-4xl">$20.00</p>
<p className="text-gray-200">Per user per month</p>
<br></br>
<button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Next Step</button>
        
        <div className="profilepic">
            <Review />
        </div>

        </div>
        </div>
        
        
    )

}