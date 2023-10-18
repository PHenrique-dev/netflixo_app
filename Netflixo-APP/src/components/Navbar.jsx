import { Link } from "react-router-dom"
import {BiSearchAlt2} from "react-icons/bi";
import {BsFillFilePlayFill} from "react-icons/bs";

const Navbar = () =>{
    return(
        <nav id="navbar">
          <h2>
            <Link to="/"><BsFillFilePlayFill/> Netflixo</Link>
          </h2>
          <form >
            <input type="text" placeholder="Qual filme deseja?"/>
            <button type="submit">
                <BiSearchAlt2/>
            </button>
          </form>
        </nav>
    )
}
export default Navbar