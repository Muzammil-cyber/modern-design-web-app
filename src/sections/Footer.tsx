import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div>
            <Image src={logoImage} alt="Logo" />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
