import Sidenav from "../ui/sideNav";

export default function Layout({children}:{children:React.ReactNode}){
  return(
    <div className="flex h-screen">
      <div>
        <Sidenav/>
      </div>
      <div>
        {children}
      </div>
    </div>
  )  

}