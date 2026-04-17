import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const socialLinks = [
  {
    id: "facebook",
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    id: "twitter",
    href: "https://x.com/",
    label: "X",
    icon: FaXTwitter,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-base-200 bg-slate-950 text-slate-100">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <Link to="/" className="inline-block text-2xl font-bold">
            Book Vibe
          </Link>
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Discover your next favorite read, keep track of books, and build a
            reading habit that feels good on every device.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>
            <Link to="/books" className="hover:text-green-400">
              Listed Books
            </Link>
            <Link to="/page-to-read" className="hover:text-green-400">
              Page to Read
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ id, href, label, icon: Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition hover:border-green-400 hover:text-green-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-400">
            Social links now use direct icon components, so they render
            correctly in Netlify production too.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
