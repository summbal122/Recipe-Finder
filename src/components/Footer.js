const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 w-full px-6 py-12 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-dark-primary mb-3">Recipe Finder</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Find delicious recipes that match your mood. Simple, fast, and flavorful!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-dark-primary mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-dark-primary hover:cursor-pointer">Home</li>
            <li className="hover:text-dark-primary hover:cursor-pointer">About</li>
            <li className="hover:text-dark-primary hover:cursor-pointer">Contact</li>
            <li className="hover:text-dark-primary hover:cursor-pointer">Reviews</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-dark-primary mb-4">Connect with Us</h3>
          <div className="flex gap-5 text-xl text-gray-500">
            <i className="fab fa-facebook-f hover:text-dark-primary hover:cursor-pointer "></i>
            <i className="fab fa-instagram hover:text-dark-primary hover:cursor-pointer "></i>
            <i className="fab fa-twitter hover:text-dark-primary hover:cursor-pointer "></i>
            <i className="fab fa-youtube hover:text-dark-primary hover:cursor-pointer  "></i>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Recipe Finder. Practice Project – All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
