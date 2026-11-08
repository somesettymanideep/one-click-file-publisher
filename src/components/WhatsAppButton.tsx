const WHATSAPP_NUMBER = "919888959659";
const WHATSAPP_MESSAGE = "Hello! I'd like to know more about DigiNex Solutions.";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-6 z-50 group"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.4s]" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#25D366]/50">
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16.002 2C8.268 2 2 8.268 2 16.002c0 2.49.65 4.83 1.787 6.86L2 30l7.338-1.762A13.94 13.94 0 0 0 16.002 30C23.73 30 30 23.73 30 16.002 30 8.268 23.73 2 16.002 2zm0 25.538a11.5 11.5 0 0 1-5.867-1.608l-.42-.25-4.354 1.046 1.072-4.24-.274-.435A11.463 11.463 0 0 1 4.462 16c0-6.36 5.18-11.538 11.54-11.538S27.54 9.64 27.54 16c0 6.358-5.178 11.538-11.538 11.538zm6.33-8.64c-.347-.174-2.054-1.013-2.372-1.13-.318-.115-.55-.174-.782.174-.232.347-.9 1.13-1.1 1.362-.202.23-.405.26-.752.086-.347-.174-1.464-.54-2.787-1.72-1.03-.92-1.726-2.055-1.928-2.402-.202-.347-.022-.534.152-.707.156-.155.347-.405.52-.608.173-.202.23-.347.347-.578.115-.232.058-.434-.029-.608-.087-.174-.782-1.882-1.07-2.578-.282-.676-.568-.584-.782-.595l-.666-.012c-.232 0-.608.087-.927.434-.318.347-1.214 1.186-1.214 2.892s1.243 3.354 1.417 3.586c.174.232 2.447 3.734 5.929 5.235.829.358 1.476.572 1.98.732.832.265 1.59.228 2.188.138.668-.1 2.054-.84 2.344-1.652.29-.81.29-1.505.203-1.65-.086-.145-.318-.232-.665-.406z" />
        </svg>
      </span>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-card text-card-foreground text-xs font-body font-medium px-3 py-1.5 rounded-lg shadow-md border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
