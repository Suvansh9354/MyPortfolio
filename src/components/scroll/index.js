import './scroll.css'; 
import rocket from './img/rocket.jpg';

function Scroll() {
    return(
        <a href="#home" className="top">
        <img src={rocket} alt=""/>
    </a>
    );
}

export default Scroll;