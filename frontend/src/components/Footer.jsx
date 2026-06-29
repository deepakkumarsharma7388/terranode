import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { name: "Applications", path: "/applications" },
    { name: "Modules", path: "/modules" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Features", path: "/features" },
    { name: "FAQ", path: "/faq" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Help Center", path: "/help-center" },
  ];

  const companyLinks = [
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Join us", path: "/join" },
    { name: "Contact Us", path: "/contact" },
    { name: "Newsletter", path: "/newsletter" },
  ];

  const legalLinks = [
    { name: "Legal Notice", path: "/legal-notice" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms Of Use", path: "/terms" },
    { name: "Cookies Policy", path: "/cookies" },
    { name: "Copyright Policy", path: "/copyright" },
    { name: "Accessibility", path: "/accessibility" },
  ];

  return (
    <footer className="bg-[#26282C] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/logo5.png"
                alt="TeraStamp"
                className="h-[80px] w-auto"
              />
            </Link>

            <p className="max-w-xs text-base text-white/60">
              Infrastructure data intelligence for civil, tunneling, mining,
              and smart cities.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7C8595]">
              Product
            </h3>

            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors hover:text-[#F26418] ${
                        isActive
                          ? "font-semibold text-[#F26418]"
                          : "text-white/70"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7C8595]">
              Company
            </h3>

            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors hover:text-[#F26418] ${
                        isActive
                          ? "font-semibold text-[#F26418]"
                          : "text-white/70"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7C8595]">
              Legal
            </h3>

            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors hover:text-[#F26418] ${
                        isActive
                          ? "font-semibold text-[#F26418]"
                          : "text-white/70"
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
        <div className="pt-8 text-center text-sm text-white/50 lg:text-left">
          <p>© {new Date().getFullYear()} TeraStamp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;