import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

const ContactCenter = () => {
  const message =
    "Halo, saya tertarik untuk mencoba test drive salah satu model mobil Anda. Bisakah Anda memberikan informasi lebih lanjut?";
  const phoneNumber = "+6285121303990";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="flex flex-col justify-center items-center bg-black px-6 text-center">
      <p className="text-white text-xl max-w-md mb-8">
        Tertarik untuk test drive atau ingin informasi lebih lengkap? Silakan hubungi kami melalui salah satu media di bawah ini!
      </p>

      <div className="flex gap-10 text-gray-400 text-5xl">
        <a
          href="https://www.instagram.com/cherymotor.rubben/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href={`tel:${phoneNumber}`}
          className="hover:text-green-400 transition-colors duration-300"
          aria-label="Phone"
        >
          <FaPhone />
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default ContactCenter;
