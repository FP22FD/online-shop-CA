import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

function Footer() {
  return (
    <footer className="row-start-3 col-span-12" role="contentinfo" aria-label="Footer section">
      <div className="bg-custom-gradient-alt flex flex-col items-center">
        <nav aria-label="Social media links">
          <div className="flex pt-9 space-x-6">
            <Link
              className="duration-300 ease-in hover:scale-125"
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <IoLogoFacebook className="w-6 h-6" aria-hidden="true" />
            </Link>
            <Link
              className="duration-300 ease-in hover:scale-125"
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
            >
              <IoLogoInstagram className="w-6 h-6" aria-hidden="true" />
            </Link>
            <Link
              className="duration-300 ease-in hover:scale-125"
              to="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our TikTok page"
            >
              <IoLogoTiktok className="w-6 h-6" aria-hidden="true" />
            </Link>
          </div>
        </nav>

        <div className="flex flex-col items-center p-4 text-center text-xs font-semibold">
          <p className="mb-1">&copy; 2024 Online Shop. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
