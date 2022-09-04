import './awards.css';
import { FaGraduationCap } from 'react-icons/fa';

function Awards() {
    return(
        <section className="awards" id="awards">
        <h1 className="heading">Awards <span>& Honours</span></h1>
        <div className="box-container">

            <div className="box">
                <i className="FaGraduationCap"><FaGraduationCap /></i>
                <span>Secondary School</span>
                <h3>PowerPoint Presentation Competition</h3>
                <p>S.S.D Saraswati Bal Mandir</p>
            </div>

            <div className="box">
                <i className="FaGraduationCap"><FaGraduationCap /></i>
                <span>NGO</span>
                <h3>The Earth Saviours Foundation</h3>
                <p>S.S.D Saraswati Bal Mandir</p>
            </div>

            <div className="box">
                <i className="FaGraduationCap"><FaGraduationCap /></i>
                <span>Innovage Tech</span>
                <h3>Logo Making Competition</h3>
                <p>Institute of Innovation in Technology and Management</p>
            </div>

        </div>
    </section>
    );
}

export default Awards;

