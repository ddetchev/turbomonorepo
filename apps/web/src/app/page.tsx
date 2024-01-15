import TopNav from "./ui/topnav";
import "@repo/ui/styles";
import Middle from "./ui/homemiddle";
import Popup from "./ui/popupnav";
import SideNav from "./ui/sidenav";





export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <section>
      <TopNav profilename="Chris" points="3000" activity="ACTIVE" topskills="Technology, Leadership, Operations" />
      {/* <Middle /> */}
      </section>
      <section>
      <Middle />
      <SideNav />
      <Popup />
      </section>
        {/* <Popup /> */}
    </main>
  );
}
