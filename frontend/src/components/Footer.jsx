import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { name: "Applications", path: "/applications" },
    { name: "Modules", path: "/modules" },
    { name: "Projects", path: "/use-cases" },
    { name: "Features", path: "/features" },
    { name: "FAQ", path: "/faq" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Help Center", path: "/helpcenter" },
  ];

  const companyLinks = [
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Join us", path: "/joinus" },
    { name: "Contact Us", path: "/contact" },
    { name: "Newsletter", path: "/newsletter" },
  ];

  const legalLinks = [
    { name: "Legal Notice", path: "/legal-notice" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms Of Use", path: "/terms" },
    { name: "Cookies Policy", path: "/cookies" },
    { name: "Copyright Policy", path: "/copyright" },
    { name: "Accessibility", path: "/accessibility" },
  ];

  return (
    <footer className="bg-[#26282C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-x-20 xl:gap-x-28">
          {/* Logo & Description */}
          <div className="col-span-2 max-w-[260px] lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/logo5.png"
                alt="TeraStamp"
                className="h-[80px] w-auto"
              />
            </Link>

            {/* Desktop */}
            <p className="hidden lg:block mt-2 max-w-[230px] text-[17px] leading-8 text-white">
              Infrastructure data
              <br />
              intelligence for civil,
              <br />
              tunneling, mining,
              <br />
              and smart cities.
            </p>

            {/* Mobile & Tablet */}
            <p className="mt-2 text-base leading-7 text-white lg:hidden">
              Infrastructure data intelligence for civil, tunneling, mining, and
              smart cities.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors duration-200 hover:text-[#F26418] ${
                        isActive
                          ? "font-semibold text-[#F26418]"
                          : "text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors duration-200 hover:text-[#F26418] ${
                        isActive
                          ? "font-semibold text-[#F26418]"
                          : "text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors duration-200 hover:text-[#F26418] ${
                        isActive
                          ? "font-semibold text-[#F26418]"
                          : "text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-white/70 lg:text-left">
          <p>© {new Date().getFullYear()} TeraStamp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;