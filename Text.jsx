import './Text.css';
import { IoIosSearch } from "react-icons/io";

function Text(){
    return(
        <>
        <div className="div">
        <div className="text">

        <h2>Discover the world’s top designers</h2>
        <p>Explore work from the most talented and accomplished designers ready to take on your next project</p>
        
        <div className="button">
        <input type="text" placeholder="What are you looking for?" />
            <button>Shots</button>

            <div className="icon">
              <IoIosSearch />
            </div>
        </div>
      
       </div>

       <div className="buttons">
            <button id="btn">Trending searches</button>
            <button>Landing page</button>
            <button>e-commerce</button>
            <button>mobile app</button>
            <button>logo design</button>
            <button>dashboard</button>
            <button>icons</button>
        </div>
       
        </div>

       </>
    )
}

export default Text;