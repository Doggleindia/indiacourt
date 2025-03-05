import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919992782657"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[2%] md:bottom-[2%] right-3 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-white w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
