import './about.css';
import { FaDownload } from 'react-icons/fa';

function About() {
    return(
        <section className="about" id="about">

        <h1 className="heading"> <span>about</span> me </h1>

        <div className="row">

            <div className="info">
                <h3> <span> name : </span> Suvansh Nayyar </h3>
                <h3> <span> age : </span> 20 </h3>
                <h3> <span> qualification : </span> Bachelor's in Computer Applications </h3>
                <h3> <span> post : </span> Web Developer </h3>
                <h3> <span> language : </span> hindi, English </h3>
                <a href="https://github.com/Suvansh9354/MyResume/archive/refs/heads/main.zip"><button
                        className="btn"> download resume <i className="FaDownload"><FaDownload /></i> </button></a>
            </div>
        </div>

    </section>
    );
}

export default About;