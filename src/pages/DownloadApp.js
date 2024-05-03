import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/DownloadApp.css';
import AndroidStockImage from '../components/assets/AndroidStockImage.png';
import CrimsonRoyaleQR from '../components/assets/CrimsonRoyaleQR.png';
import muchMore from '../components/assets/muchMore.png'

function DownloadApp(){
    return(
        <>
            <Navbar />
            <div id="AdContainerTop">
                <div id="DownloadLeft">
                    <img src={AndroidStockImage} alt="Android Stock" id="AndroidImage"/>
                </div>

                <div id="DownloadRight">
                    <h1 id="DownloadTheApp">Download Our App!</h1>
                    <p className="AppAd">Easy to use: A breeze to navigate, even for first-timers.</p>
                    <p className="AppAd">Fast & Flexible: Book a table in seconds, no matter the time or day.</p>
                    <p className="AppAd">Your Dining Companion: Explore cuisines, find hidden gems, and discover new favorites - all in one place!</p>
                    <br/>
                    <p className="AppAd">Download the Crimson Royale App today and enjoy a stress-free dining experience!</p>
                    <div id="DownloadImages">
                        <img src={CrimsonRoyaleQR} alt="QR Code" id="CrimsonRoyaleQR"/>
                        <a href="https://drive.usercontent.google.com/u/0/uc?id=10ou1fGbqjmzQ6VsA0y2OPdXgtcZ4JSPM&export=download&authuser=0" target="_blank" rel="noreferrer" alt="Drive Link" id="DownloadButton">Download The App</a>
                    </div>
                </div>
            </div>
            <div id="AdContainerMid">
                <div id="DownloadLeft1">
                    <h1 id="DownloadTheApp">Exclusive Deals!</h1>
                    <p className="AppAd">Enjoy App Only Discounts. ✅</p>
                    <p className="AppAd">Skip the Waitlist: Reserve your table with ease and avoid the wait at popular spots. ✅</p>
                    <p className="AppAd">Exclusive Perks: Be the first to know about upcoming promotions and special events. ✅</p>
                    <br/>
                    <p id="DiscountAd">Enter the Following Code to Enjoy a 5% Discount on your First Booking!</p>
                    <p id="DiscountButton">5CRPR</p>
                </div>

                <div id="DownloadRight1">
                    <h1 id="percentAge">%</h1>
                </div>
            </div>
            <div id="AdContainerBottom">
                <div id="DownloadLeft2">
                    <img src={muchMore} alt="Much More" id="muchMore"/>
                </div>

                <div id="DownloadRight2">
                <br/><br/><br/><br/><br/><br/>
                <h1 id="MuchMore">& Much More!</h1>
                    <br/>
                    <p className="AppAd">Chatbot for personal recommendations!</p>
                    <p className="AppAd">Push Notifications!</p>
                    <p className="AppAd">Personalized recommendations for your taste palette.</p>
                    <br/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DownloadApp;