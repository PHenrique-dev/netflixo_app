import {FaGithub, FaEnvelope, FaWhatsapp, FaLinkedin} from 'react-icons/fa'
import "./Footer.css"
function Footer(){
    return (
        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 Pedro Henrique</p>
            <ul className='link center-ul'>
                <li><a href="https://github.com/Pedroiga" target="_blank"><FaGithub /></a></li>
                <li><a href="mailto:pedrohenso@outlook.com" target="_blank"><FaEnvelope /></a></li>
                <li><a href="https://wa.me/5577981625185" target="_blank"><FaWhatsapp /></a></li>
                <li><a href="https://www.linkedin.com/in/pedro-henrique-da-silva-oliveira-5a4536280/" target="_blank"><FaLinkedin /></a></li>
            </ul>
          </div>
        </footer>
      );
}
export default Footer