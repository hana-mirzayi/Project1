export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1"></div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="my.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
