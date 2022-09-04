import './header.css';
import MyPic from './img/MyPic.jpg';

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
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#education">education</a></li>
                <li><a href="#skills">technical skills</a></li>
                <li><a href="#awards">awards & honours</a></li>
                <li><a href="#projects">My Projects</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>

    </header>
    );
}

export default Header;