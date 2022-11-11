import './portfolio.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.png';
import img6 from './img/img6.png';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';

function Portfolio() {
    return(
        <section className="portfolio" id="portfolio">

        <h1 className="heading"> my <span>portfolio</span> </h1>

        <div className="box-container">

            <div className="box">
                <img src={img1} alt="" />
            </div>

            <div className="box">
                <img src={img2} alt="" />
            </div>

            <div className="box">
                <img src={img3} alt="" />
            </div>

            <div className="box">
                <img src={img4} alt="" />
            </div>

            <div className="box">
                <img src={img6} alt="" />
            </div>
            
            <div className="box">
                <img src={img5} alt="" />
            </div>

            <div className="box">
                <img src={img7} alt="" />
            </div>

            <div className="box">
                <img src={img8} alt="" />
            </div>
        </div>

    </section>
    );
}

export default Portfolio;