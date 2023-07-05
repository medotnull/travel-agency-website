import "./Banner.scss";
import Advertisment from "../../../assets/advertisement.png";
const Banner = () => {
    return (<div className="ad">
        <div className="content">
            <div className="text-content">
                <h1 className="text-content-h1">Explore!</h1>
                <p>Unlock Your Bucket List with Unforgettable Journeys!
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read more</div>
                    <div className="banner-cta v2">Book now</div>
                </div>
            </div>
            <img className="ad-img" src= {Advertisment}  alt="ad" />
        </div>
    </div>
    );
};

export default Banner;
