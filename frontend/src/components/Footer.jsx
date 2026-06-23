import { NavLink } from 'react-router-dom';

const Footer = () => {
  const productLinks = [
    { name: 'Applications', path: '/applications' },
    { name: 'Modules', path: '/modules' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Features', path: '/features' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Help Center', path: '/help-center' },
  ];

  const companyLinks = [
    { name: 'About us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Join us', path: '/join' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Newsletter', path: '/newsletter' },
  ];

  const legalLinks = [
    { name: 'Legal Notice', path: '/legal-notice' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms Of Use', path: '/terms' },
    { name: 'Cookies Policy', path: '/cookies' },
    { name: 'Copyright Policy', path: '/copyright' },
    { name: 'Accessibility', path: '/accessibility' },
  ];

  const legalFormsLinks = [
    { name: 'Data Subject Objection', path: '/data-subject-objection' },
    { name: 'Consent Potential Employees', path: '/consent-employees' },
    { name: 'Consent Potential Clients', path: '/consent-clients' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.688-11.68 9.97 9.97 0 002.555-2.614z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        {/* Main footer grid - responsive: 2 columns on mobile, 2 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-12 border-b border-gray-800 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Social Column - spans full width on mobile */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">TeraStamp</span>
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            </div>
            <p className="text-base text-gray-300 max-w-xs">
              Infrastructure data intelligence for civil, tunneling, mining, and smart cities.
            </p>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-300">
                Follow us on:
              </p>
              <div className="flex gap-4 mt-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors hover:text-blue-400"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors hover:text-blue-400 ${
                        isActive ? 'text-blue-400 font-semibold' : 'text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors hover:text-blue-400 ${
                        isActive ? 'text-blue-400 font-semibold' : 'text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors hover:text-blue-400 ${
                        isActive ? 'text-blue-400 font-semibold' : 'text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Forms Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Legal Forms
            </h3>
            <ul className="mt-4 space-y-2">
              {legalFormsLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base transition-colors hover:text-blue-400 ${
                        isActive ? 'text-blue-400 font-semibold' : 'text-white'
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
        <div className="pt-8 text-center text-sm text-gray-400 lg:text-left">
          <p>© {new Date().getFullYear()} TeraStamp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;