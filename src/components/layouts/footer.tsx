import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  const message =
    "Hello, I am interested in booking a test drive for one of your car models. Could you please provide me with more information?";
  const phoneNumber = "+6285121303990";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <div className="flex p-5">
        <div></div>
        <div className="flex justify-end w-full">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400"
          >
            <FaInstagram />
          </a>
          <a
            href={`tel:${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400"
          >
            <FaPhone />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
