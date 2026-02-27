export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-xl font-bold text-blue-600">
          YesGoBus
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#">Bus</a>
          <a href="#">Tours & Travel</a>
          <a href="#">Offers</a>
          <a href="#">About Us</a>
          <a href="#">Need Help</a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Login / Signup
        </button>

      </div>
    </header>
  )
}