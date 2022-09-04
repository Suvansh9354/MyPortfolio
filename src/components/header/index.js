import './header.css';
import MyPic from './img/MyPic.jpg';
import { FaHome } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { CgAwards } from 'react-icons/cg';
import { FaCode } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { MdContacts } from 'react-icons/md';

function Header() {
    return(
        <header>
        <div className="user">
            <img src={MyPic} alt=""/>
            <h3 className="name">Suvansh Nayyar</h3>
            <p className="post">Web Developer</p>
        </div>

        <nav className="navbar">
            <ul>
                <li><a href="#home"><i className="FaHome"/><FaHome /> home</a></li>
                <li><a href="#about"><i className="FaUserAlt"/><FaUserAlt /> about</a></li>
                <li><a href="#education"><i className="FaUserGraduate"/><FaUserGraduate /> education</a></li>
                <li><a href="#skills"><i className="FaLaptopCode"/><FaLaptopCode /> technical skills</a></li>
                <li><a href="#awards"><i className="CgAwards"/><CgAwards /> awards & honours</a></li>
                <li><a href="#projects"><i className="FaCode"/><FaCode /> My Projects</a></li>
                <li><a href="#portfolio"><i className="TbCertificate"/><TbCertificate /> portfolio</a></li>
                <li><a href="#contact"><i className="MdContacts"/><MdContacts /> contact</a></li>
            </ul>
        </nav>

    </header>
    );
}

export default Header;
