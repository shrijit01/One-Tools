
import "./Home.css";

function Home(){

    return(
        <div className="home-container">
            <a href="todo" className="btn btn-primary link">
                To Do App
            </a>
            <a href="notes" className="btn btn-primary link">
                Note Keeper
            </a>
        </div>
    )
}

export default Home;