
import { Link } from "react-router-dom";
import "./Home.css";

function Home(){

    return(
        <div className="home-container">
            <Link className="btn btn-primary link" to="/todo">To Do App</Link>
            {/* <a href="todo" className="">
                To Do App
            </a> */}
            <Link className="btn btn-primary link" to="/notes">Note Keeper</Link>
            {/* <a href="notes" className="btn btn-primary link">
                Note Keeper
            </a> */}
        </div>
    )
}

export default Home;