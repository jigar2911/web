import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col mb-4">
              <span className="text-2xl font-bold text-white leading-none">ONCALL</span>
              <span className="text-sm font-semibold tracking-widest text-blue-400">IT SUPPORT</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Reliable IT Support and Managed Services for businesses in Christchurch.
              We focus on your technology so you can focus on your business.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <a href="tel:0277777728" className="hover:text-white transition-colors">027 777 7728</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href="mailto:sales@oncallsupport.co.nz" className="hover:text-white transition-colors">sales@oncallsupport.co.nz</a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                Christchurch, New Zealand
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Oncall IT Support. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
