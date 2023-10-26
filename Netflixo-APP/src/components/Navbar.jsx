import { Link, useNavigate } from "react-router-dom"
import {BiSearchAlt2} from "react-icons/bi";
import {FaPlayCircle, FaBars, FaPlay} from "react-icons/fa";
import "./Navbar.css";
import { useState, useRef } from "react";

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
      <>
    <nav id="navbar">
        <button className="but">
        <FaBars className="barras" onClick={onClick} />
        </button>
        <h1>
          <Link to="/"><FaPlayCircle />NETFLIXO</Link>
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
      <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
      <ul>
        <li><Link to="action"> <FaPlay/> Ação</Link></li>
        <li><Link to="comedy"><FaPlay/> Comédia</Link></li>
        <li><Link to="horror"><FaPlay/> Terror</Link></li>
        <li><Link to="adventure"><FaPlay/> Aventura</Link></li>
        <li><Link to="drama"><FaPlay/> Drama</Link></li>
        <li><Link to="fiction"><FaPlay/> Ficção</Link></li>
      </ul>
  </nav>
      </>
  );
}
export default Navbar