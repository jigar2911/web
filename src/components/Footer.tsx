import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-8 p-3 bg-white rounded-xl">
              <img src="/images/logo.jpg" alt="Oncall IT Support" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed font-sans mb-8">
              Reliable IT Support and Managed Services for businesses in Christchurch.
              We focus on your technology so you can focus on your business growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-8 text-white">Our Expertise</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-brand-orange transition-colors font-sans">Managed IT</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-orange transition-colors font-sans">Cybersecurity</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-orange transition-colors font-sans">Cloud Solutions</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-orange transition-colors font-sans">Help Desk</Link></li>
              <li><a href="https://oncallwebsites.com" className="text-gray-400 hover:text-brand-orange transition-colors font-sans font-bold">Web Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-8 text-white">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-brand-orange transition-colors font-sans">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-orange transition-colors font-sans">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-brand-orange transition-colors font-sans">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-brand-orange transition-colors font-sans">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-8 text-white">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start text-gray-400 group">
                <div className="p-2 bg-brand-orange/10 rounded-lg mr-4 group-hover:bg-brand-orange transition-colors">
                  <Phone className="w-5 h-5 text-brand-orange group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase mb-1">Call Us</div>
                  <a href="tel:0277777728" className="text-white hover:text-brand-orange transition-colors font-bold">027 777 7728</a>
                </div>
              </li>
              <li className="flex items-start text-gray-400 group">
                <div className="p-2 bg-brand-orange/10 rounded-lg mr-4 group-hover:bg-brand-orange transition-colors">
                  <Mail className="w-5 h-5 text-brand-orange group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase mb-1">Email Us</div>
                  <a href="mailto:sales@oncallsupport.co.nz" className="text-white hover:text-brand-orange transition-colors font-bold">sales@oncallsupport.co.nz</a>
                </div>
              </li>
              <li className="flex items-start text-gray-400 group">
                <div className="p-2 bg-brand-orange/10 rounded-lg mr-4 group-hover:bg-brand-orange transition-colors">
                  <MapPin className="w-5 h-5 text-brand-orange group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase mb-1">Office</div>
                  <span className="text-white font-bold">Christchurch, NZ</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-sans">
            © {new Date().getFullYear()} Oncall IT Support. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-sans flex items-center">
            Partnered with <a href="https://oncallwebsites.com" className="ml-2 text-gray-400 hover:text-brand-orange font-bold">Oncall Websites</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
