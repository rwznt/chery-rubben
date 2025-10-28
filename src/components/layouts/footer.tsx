import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

const Footer = () => {
  const message =
    "Hello, I am interested in booking a test drive for one of your car models. Could you please provide me with more information?";
  const phoneNumber = "+6285121303990";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <footer className="bg-black text-white py-8 px-6">
      {/* Main Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 w-full max-w-6xl mx-auto">
        {/* Address */}
        <div className="text-sm md:text-base leading-relaxed">
          <h1 className="font-semibold text-lg mb-1">Chery Hasyim Ashari</h1>
          <p>
            Jl. K. H. Hasyim Ashari No.50, Duri Pulo, <br />
            Kecamatan Gambir, Kota Jakarta Pusat, <br />
            Daerah Khusus Ibukota Jakarta 10140
          </p>
        </div>

        {/* Email */}
        <div className="text-sm md:text-base">
          <h1 className="font-semibold text-lg mb-1">Contact</h1>
          <p className="break-all">cherymotor.rubben@gmail.com</p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/cherymotor.rubben/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              cherymotor.rubben
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${phoneNumber}`}
                className="hover:text-green-400 transition-colors duration-300"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
              {phoneNumber}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              Chery Motors Rubben
            </div>
          </div>
        </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Rubben. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
