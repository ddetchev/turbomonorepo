import DashJourney from "../ui/dashboardjourney"
import SideNav from "../ui/sidenav"
import Popup from "../ui/popupnav"

export default function Page() {

    return (
        
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
      
      <section>
      <DashJourney />
      <SideNav />
      <Popup />
      </section>
    </main>
        
    )

}