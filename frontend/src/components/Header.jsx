import { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

const PRODUCT_LINKS = [
  { to: '/applications', label: 'Applications' },
  { to: '/modules', label: 'Modules' },
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/faq', label: 'FAQ' },
]

const COMPANY_LINKS = [
  { to: '/about', label: 'About us' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [productOpen, setProductOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const productTimer = useRef(null)
  const companyTimer = useRef(null)

  const navLinkClass = ({ isActive }) =>
    `text-[15px] font-semibold transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`

  const openProduct = () => {
    clearTimeout(productTimer.current)
    setProductOpen(true)
  }
  const closeProduct = () => {
    productTimer.current = setTimeout(() => setProductOpen(false), 120)
  }
  const openCompany = () => {
    clearTimeout(companyTimer.current)
    setCompanyOpen(true)
  }
  const closeCompany = () => {
    companyTimer.current = setTimeout(() => setCompanyOpen(false), 120)
  }

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-white sm:text-xl">
          <span className="text-accent">◆</span>
          TeraStamp
          <span className="text-xs align-top text-white/40">®</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:gap-9 md:flex">
          <div className="relative" onMouseEnter={openProduct} onMouseLeave={closeProduct}>
            <button
              className="flex items-center gap-1.5 text-[15px] font-semibold text-white/80 hover:text-white"
              aria-expanded={productOpen}
            >
              Product
              <svg className={`h-3.5 w-3.5 transition-transform ${productOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productOpen && (
              <div className="absolute left-0 top-full w-56 pt-3">
                <div className="rounded-xl bg-ink py-2 shadow-2xl ring-1 ring-white/10">
                  {PRODUCT_LINKS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setProductOpen(false)}
                      className="block px-5 py-2.5 text-[15px] font-medium text-white/85 hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={openCompany} onMouseLeave={closeCompany}>
            <button
              className="flex items-center gap-1.5 text-[15px] font-semibold text-white/80 hover:text-white"
              aria-expanded={companyOpen}
            >
              Company
              <svg className={`h-3.5 w-3.5 transition-transform ${companyOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {companyOpen && (
              <div className="absolute left-0 top-full w-48 pt-3">
                <div className="rounded-xl bg-ink py-2 shadow-2xl ring-1 ring-white/10">
                  {COMPANY_LINKS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setCompanyOpen(false)}
                      className="block px-5 py-2.5 text-[15px] font-medium text-white/85 hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/use-cases" className={navLinkClass}>Use Cases</NavLink>
          <NavLink to="/Blog" className={navLinkClass}>Blog</NavLink>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-lg bg-accent px-5 py-2.5 text-[15px] font-bold text-white transition-colors hover:bg-accent/90 lg:px-6 lg:py-3"
          >
            Claim demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink transition-[max-height] duration-300 md:hidden ${
          mobileOpen ? 'max-h-[480px]' : 'max-h-0 border-t-0'
        }`}
      >
        <div className="px-4 py-4 sm:px-6">
          <p className="px-1 pb-1 pt-2 text-xs uppercase tracking-wider text-white/40">Product</p>
          {PRODUCT_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-1 py-2 text-sm text-white/85 hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}

          <p className="px-1 pb-1 pt-4 text-xs uppercase tracking-wider text-white/40">Company</p>
          {COMPANY_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-1 py-2 text-sm text-white/85 hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}

          <NavLink
            to="/use-cases"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-lg px-1 py-2 text-sm font-semibold text-white/85 hover:bg-white/5"
          >
            Use Cases
          </NavLink>
          <NavLink
            to="/Blog"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-1 py-2 text-sm font-semibold text-white/85 hover:bg-white/5"
          >
            Blog
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            Claim demo
          </Link>
        </div>
      </div>
    </header>
  )
}