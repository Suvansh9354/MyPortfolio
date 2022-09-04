import { FaUser } from 'react-icons/fa';
import './home.css';

function Home() {
    return(
        <section className="home" id="home">

        <h3>HI THERE !</h3>
        <h1>I'M <span>Suvansh Nayyar</span></h1>
        <p>A Web Developer with hands on experience in various Web Development Technologies. As a designer and a
            developer, I will help companies around the world to build amazing websites, apps and services that are
            simple, beautiful and easy to use.</p>
        <h1>Let's build <span>something great</span></h1>
        <a href="#about"><button className="btn">about me <i className="FaUser"><FaUser /></i></button></a>
    </section>
    );
}

export default Home;