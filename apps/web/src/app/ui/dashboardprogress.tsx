export default function DashProgress({ profilename, points, topskills, activity } : any) {

    return (

        <div>

            <div className="flexdashcontainer">

                <p className="white text-2xl">{`Welcome home, ${profilename}.`}</p>
                <p className="text-xs">Points: <b>{`${points}XP`}</b></p>
                <p className="text-xs">Top Skills: <b>{topskills}</b></p>
                <p className="text-xs">Active Journey: <b>{activity}</b></p>




            </div>

        </div>

    )

}