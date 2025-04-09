import '@/components/layout/footer/Footer.css';
import facebookIcon from '@/assets/icons/social/facebook-white.svg';
import instagramIcon from '@/assets/icons/social/instagram-white.svg';
import xIcon from '@/assets/icons/social/twitter-white.svg';
import appleAppstoreIcon from '@/assets/icons/store/app-store.svg';
import googleAppstoreIcon from '@/assets/icons/store/play-store.svg';
import windowsAppstoreIcon from '@/assets/icons/store/windows-store.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <ul className="footer-links">
                    <li>Home</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Collection Statement</li>
                    <li>Help</li>
                    <li>Manage Account</li>
                </ul>
                <p className="copyright">
                    Copyright © 2016 DEMO Streaming. All Rights Reserved.
                </p>
            </div>

            <div className="footer-bottom">
                <div className="footer-social">
                    <a href="https://www.facebook.com/StanAustralia" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/StanAustralia" target="_blank" rel="noopener noreferrer">
                        <img src={xIcon} alt="X (Twitter)" />
                    </a>
                    <a href="https://www.instagram.com/stanaustralia/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                </div>

                <div className="footer-stores">
                    <a href="https://apps.apple.com/au/app/stan/id948095331" target="_blank" rel="noopener noreferrer">
                        <img src={appleAppstoreIcon} alt="App Store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=au.com.stan.and" target="_blank" rel="noopener noreferrer">
                        <img src={googleAppstoreIcon} alt="Google Play" />
                    </a>
                    <a href="https://help.stan.com.au/hc/en-us/articles/5664409887247-Setting-up-Stan-on-My-Windows-Device" target="_blank" rel="noopener noreferrer">
                        <img src={windowsAppstoreIcon} alt="Windows Store" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
