import { Outlet } from "react-router-dom";
import "./Home.css"

function Home(){

  return(
    <div className="Home">
      <div className="container">
        <Outlet/>


      </div>

    </div>
  )
}

export default Home;
