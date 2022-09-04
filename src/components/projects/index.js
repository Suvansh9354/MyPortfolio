import './projects.css';
import { FaTelegramPlane } from 'react-icons/fa';

function Projects() {
    return(
        <section className="projects" id="projects">

        <h1 className="heading"> <span>My</span> Projects </h1>

        <div className="row">

            <div className="info">
                <ul>
                    <li>Facebook Clone</li>
                    <p>Facebook Clone is purely HTML and CSS based Web Application which provides all the functionality
                        and features which are also provided by the Facebook(Meta). The main and highlighted features of
                        this Web Application is that it provides feeds section, story section and also post section.</p>
                    <a href="https://suvansh-facebook-clone.netlify.app/"><button
                            className="btn"><i className='FaTelegramPlane'><FaTelegramPlane /></i> Please Visit  </button></a>
                    <li>Placement Tracker (Working on it)</li>
                    <p>Placement Tracker is a Web Application by which users can login and register through which they
                        can enroll for the jobs in different companies. It also provides previous years interview
                        questions and answers with article.</p>
                        <a href="https://gitlab.com/SuvanshNayyar/placementtrackerwebsite"><button
                            className="btn"><i className='FaTelegramPlane'><FaTelegramPlane /></i> Please Visit  </button></a>
                </ul>
            </div>
        </div>

    </section>
    );
}

export default Projects;