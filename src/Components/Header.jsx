const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">

      {/* Logo */}
      <div className="text-5xl font-bold text-yellow-400">
        blinkit
      </div>

      {/* Location */}
      <div className="ml-6">
        <h3 className="text-2xl font-bold">
          Delivery in 8 minutes
        </h3>
        <p className="text-sm text-gray-600">
          V3RF+CQJ, Uttardhona, Uttar Pradesh
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-8">
        <input
          type="text"
          placeholder='Search "chocolate"'
          className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Login */}
      <button className="text-xl font-medium mr-6 hover:text-green-600">
        Login
      </button>

      {/* Cart */}
      <button className="bg-gray-200 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
        My Cart
      </button>

    </header>
  );
};

export default Header;
