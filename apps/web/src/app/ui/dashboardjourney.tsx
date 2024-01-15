import SmallDashPiece from "./smalldashpiece"
import SmallDashPieceTwo from "./smalldashpiecetwo"
import LongDashPiece from "./longdashpiece"
import DashProgress from "./dashboardprogress"
import SideNav from "./sidenav"


export default function DashJourney() {

    return (

    <>
    <div className="dashtotalflex">
    <DashProgress profilename="Chris" activity="ACTIVE" points="3000" topskills="Technology, Leadership, Operations" />

    <div className="flexmaindashcontainer">

        <SmallDashPiece />
        <SmallDashPieceTwo dashsection="View your Profile" dashsectiontext="Learn more, and you may just learn more trying to learn more. Learn more, and you may just learn more."/>
        <SmallDashPieceTwo dashsection="Network" dashsectiontext="Learn more, and you may just learn more trying to learn more. Learn more, and you may just learn more."/>        
        <LongDashPiece sessionName="Dath" sessionImage="/dath.png"/>

    </div>
        </div>
    </>
    )

}