import { FaGraduationCap } from 'react-icons/fa';
import './education.css';

function Education() {
    return(
        <section className="education" id="education">

        <h1 className="heading"> my <span>education</span> </h1>

        <div className="box-container">

            <div className="box">
                <i className="FaGraduationCap"><FaGraduationCap /></i>
                <span>2018</span>
                <h3>10th Class</h3>
                <p>S.S.D Saraswati Bal Mandir</p>
                <p>Central Board of Secondary Education(C.B.S.E)</p>
            </div>

            <div className="box">
                <i className="FaGraduationCap"><FaGraduationCap /></i>
                <span>2020</span>
                <h3>12th Class</h3>
                <p>S.S.D Saraswati Bal Mandir</p>
                <p>Central Board of Secondary Education(C.B.S.E)</p>
            </div>

            <div className="box">
                <i className="FaGraduationCap"><FaGraduationCap /></i>
                <span>2023</span>
                <h3>Bachelor's in Computer Applications</h3>
                <p>Institute of Innovation in Technology and Management</p>
                <p>Guru Gobind Singh Indraprastha University(GGSIPU)</p>
            </div>

        </div>

    </section>
    );
}

export default Education;