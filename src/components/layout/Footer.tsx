import { Link } from 'react-router-dom';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTiktok } from 'react-icons/io5';

function Footer() {
  return (
    <div className="bg-gradient-to-r from-primary to-main">
      <div className="pt-9">
        <div className="flex justify-center mb-9">
          <Link className="mr-9 duration-300 ease-in hover:scale-125" to="https://www.instagram.com/">
            <IoLogoInstagram className="w-6 h-6 fill-current text-typo-default-dark" />
          </Link>
          <Link className="mr-9 duration-300 ease-in hover:scale-125" to="https://www.facebook.com/">
            <IoLogoFacebook className="w-6 h-6 fill-current text-typo-default-dark" />
          </Link>
          <Link className="mr-9 duration-300 ease-in hover:scale-125" to="https://www.tiktok.com/">
            <IoLogoTiktok className="w-6 h-6 fill-current text-typo-default-dark" />
          </Link>
        </div>
      </div>

      <div className="p-4 text-center text-xs">
        Copyright© 2024 Online Shop
        <br />
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
