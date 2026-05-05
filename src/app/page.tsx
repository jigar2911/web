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
      <section className="relative min-h-[85vh] flex items-center bg-brand-blue text-white overflow-hidden">
        {/* Modern Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/server-rack.webp"
            alt="Oncall IT Support Logo"
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-brand-blue/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-brand-orange/20 border border-brand-orange/30 px-3 py-1 rounded-full text-brand-orange text-sm font-bold mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span>Available 24/7 in Christchurch</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight">
              <span className="bg-brand-blue px-4 py-1 inline-block mb-2">Next-Gen IT Support</span><br />
              <span className="bg-brand-blue px-4 py-1 inline-block">for Local Business</span>
            </h1>

            <div className="space-y-2 mb-12">
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-sans">
                <span className="bg-brand-blue px-2 py-1 inline-block">Proactive, secure, and infinitely scalable technology</span>
              </p>
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-sans">
                <span className="bg-brand-blue px-2 py-1 inline-block">solutions crafted to empower your growth in a digital-first</span>
              </p>
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-sans">
                <span className="bg-brand-blue px-2 py-1 inline-block">world.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-brand-orange/20 hover:-translate-y-1"
              >
                Book Free Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 bg-white/5 backdrop-blur-md text-white text-lg font-bold rounded-xl hover:bg-white hover:text-brand-blue transition-all"
              >
                Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-3">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Built for Reliability</h3>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-blue transition-colors">
                  <service.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-8 leading-relaxed font-sans">{service.description}</p>
                <Link href="/services" className="text-brand-blue font-bold flex items-center group-hover:text-brand-orange transition-colors">
                  Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-20">
            <div className="lg:w-1/2 mb-16 lg:mb-0 relative">
              <div className="absolute -inset-4 bg-brand-orange/10 rounded-[2rem] blur-2xl"></div>
              <img
                src="/images/2.png"
                alt="Oncall IT Support Team"
                className="relative rounded-3xl shadow-2xl z-10"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-brand-blue">15+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase leading-tight">Years<br/>Experience</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-3">Why Partner With Us</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">Christchurch&apos;s Most Trusted Tech Team</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-sans">
                We don&apos;t just manage systems; we optimize your business engine. Based locally,
                we provide the rapid response and strategic insight you need to stay ahead.
              </p>
              <div className="space-y-6">
                {[
                  "Guaranteed 1-hour response for criticals",
                  "Proactive security & threat hunting",
                  "Transparent, fixed-rate pricing models",
                  "Dedicated local account management",
                ].map((item, i) => (
                  <div key={i} className="flex items-center group">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange group-hover:text-white" />
                    </div>
                    <span className="text-gray-700 font-bold font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange skew-x-12 translate-x-1/2 opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8">Ready for a Tech Upgrade?</h2>
            <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
              Schedule your free infrastructure assessment today and discover
              how we can streamline your business operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold rounded-2xl text-brand-blue bg-white hover:bg-brand-orange hover:text-white transition-all shadow-2xl hover:scale-105"
            >
              Start Your Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
