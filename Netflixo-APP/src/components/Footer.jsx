import {FaGithub, FaEnvelope, FaWhatsapp, FaLinkedin} from 'react-icons/fa'
import "./Footer.css"
function Footer(){
    return (
        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 Pedro Henrique</p>
            <ul className='link center-ul'>
                <li><a href="https://github.com/Pedroiga"><FaGithub /></a></li>
                <li><a href="mailto:pedrohenso@outlook.com"><FaEnvelope /></a></li>
                <li><a href="https://wa.me/5577981625185"><FaWhatsapp /></a></li>
                <li><a href="https://www.linkedin.com/in/pedro-henrique-da-silva-oliveira-5a4536280/"><FaLinkedin /></a></li>
            </ul>
          </div>
        </footer>
      );
}
export default Footer