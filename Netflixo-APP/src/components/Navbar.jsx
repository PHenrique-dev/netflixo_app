import { Link, useNavigate } from "react-router-dom"
import {BiSearchAlt2} from "react-icons/bi";
import {BsFillFilePlayFill} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { useState, useRef } from "react";
import { sidebar } from "./sidebar";

function Navbar() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
    console.log(isActive)
  };
  return (
    <nav id="navbar" >
      <button className="but"><AiOutlineMenu className="barras" onClick={onClick}/></button>
      <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
      <ul>
        <li><a href="">Ação</a></li>
        <li><a href="">Comédia</a></li>
        <li><a href="">Terror</a></li>
        <li><a href="">Aventura</a></li>
        <li><a href="">Drama</a></li>
        <li><a href="">Ficção</a></li>
      </ul>
      </nav>
      <h1>
        <Link to="/"><BsFillFilePlayFill />NETFLIXO</Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Qual filme deseja?"
          onChange={(e) => setSearch(e.target.value)}
          value={search} />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
export default Navbar