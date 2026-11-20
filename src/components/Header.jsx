import { useState } from "react";

const Icon = ({ children }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const SearchIcon = () => (
  <Icon>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.6-3.6" />
  </Icon>
);
const HomeIcon = () => (
  <Icon>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v10h12V10" />
  </Icon>
);
const ShopIcon = () => (
  <Icon>
    <path d="M6 8h12l1 12H5L6 8Z" />
    <path d="M9 8a3 3 0 0 1 6 0" />
  </Icon>
);
const InfoIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <path d="M12 7.6h.01" />
  </Icon>
);
const PhoneIcon = () => (
  <Icon>
    <path d="M5 4h4l2 5-2.4 1.6a12 12 0 0 0 4.8 4.8L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Icon>
);

const menu = [
  { id: "home", label: "صفحه اصلی", icon: <HomeIcon /> },
  { id: "shop", label: "فروشگاه", icon: <ShopIcon /> },
  { id: "info", label: "درباره ما", icon: <InfoIcon /> },
  { id: "phone", label: "تماس با ما", icon: <PhoneIcon /> },
];

function Header() {
    const [active, setActive]=useState("home");
    const [query,setQuery]=useState("");
    const handleSearch =(e)=>{
        e.preventDefault();
        console.log("جستجو برای:", query);
    };
    return (
    <header className="site-header">
      <div className="nav-inner">

        <div className="nav-actions">
          <form className="search-box" onSubmit={handleSearch} role="search">
            <SearchIcon />
            <input
              type="search"
              placeholder="جستجوی محصول..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="جستجوی محصول"
            />
          </form>
          <a href="/login" className="btn-login">ورود / ثبت‌نام</a>
        </div>

        <div className="nav-main">
          <a href="/" className="brand">
            <span className="brand-name">عطرکده حنا</span>
          </a>
          <nav>
            <ul className="nav-links">
              {menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={active === item.id ? "active" : ""}
                    onClick={() => setActive(item.id)}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}
export default Header;
