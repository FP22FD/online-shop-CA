import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

function Footer() {
  return (
    <footer className="row-start-3 col-span-12" role="contentinfo" aria-label="Footer section">
      <div className="bg-gradient-to-r from-accent to-primary-light">
        <div className="pt-9">
          {/* Navegação para links sociais */}
          <nav aria-label="Social media links">
            <div className="flex justify-center mb-9">
              <Link
                className="mr-9 duration-300 ease-in hover:scale-125"
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <IoLogoFacebook className="w-6 h-6" aria-hidden="true" />
              </Link>
              <Link
                className="mr-9 duration-300 ease-in hover:scale-125"
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
              >
                <IoLogoInstagram className="w-6 h-6" aria-hidden="true" />
              </Link>
              <Link
                className="mr-9 duration-300 ease-in hover:scale-125"
                to="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok page"
              >
                <IoLogoTiktok className="w-6 h-6" aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </div>

        {/* Copyright section */}
        <div className="p-4 text-center text-xs">
          <p>
            &copy; 2024 Online Shop
            <br />
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
