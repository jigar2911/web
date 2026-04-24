import Link from "next/link";
import { Shield, Cloud, Headset, BarChart, Server, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Managed IT Services",
      description: "Proactive monitoring and management of your entire IT infrastructure.",
      icon: Server,
    },
    {
      title: "Cybersecurity",
      description: "Advanced protection against evolving digital threats and vulnerabilities.",
      icon: Shield,
    },
    {
      title: "Cloud Services",
      description: "Secure and scalable cloud solutions tailored to your business needs.",
      icon: Cloud,
    },
    {
      title: "Help Desk Support",
      description: "Responsive technical support to keep your team productive.",
      icon: Headset,
    },
    {
      title: "Strategic Consulting",
      description: "Expert guidance to align your technology with business goals.",
      icon: BarChart,
    },
    {
      title: "Business Continuity",
      description: "Robust backup and disaster recovery planning for peace of mind.",
      icon: Lock,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/images/server-rack.webp" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Expert IT Support for Christchurch Businesses
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Oncall IT Support provides reliable, proactive, and secure technology solutions
              designed to help your business grow and thrive in a digital world.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-md text-white hover:bg-white hover:text-brand-blue transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive IT Solutions</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of IT services to ensure your technology is an asset, not a burden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow bg-gray-50 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                  <service.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href="/services" className="text-brand-blue font-bold flex items-center hover:text-brand-orange transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <img
                src="/images/2.png"
                alt="Oncall IT Support Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-brand-blue">Why Choose Oncall IT Support?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Based in Christchurch, we understand the local business landscape. We don&apos;t just fix computers;
                we partner with you to provide strategic IT outcomes.
              </p>
              <ul className="space-y-4">
                {[
                  "Fast response times for critical issues",
                  "Proactive maintenance to prevent downtime",
                  "Fixed-fee managed services for predictable budgeting",
                  "Security-first approach in everything we do",
                  "Expert team with deep industry knowledge",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact us today for a free IT assessment and discover how we can help you optimize your technology.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full text-white bg-brand-orange hover:bg-orange-600 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
