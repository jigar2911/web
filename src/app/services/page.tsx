import { Shield, Cloud, Headset, Server, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const detailedServices = [
    {
      title: "Managed IT Services",
      icon: Server,
      description: "Our comprehensive managed services provide complete oversight of your technology environment.",
      features: [
        "24/7 System Monitoring",
        "Patch Management & Updates",
        "Network Administration",
        "Hardware Life-cycle Management",
        "Regular Health Checks"
      ],
      image: "/images/3.png"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Protect your valuable business data with our multi-layered security approach.",
      features: [
        "Endpoint Protection (EDR)",
        "Email Security & Filtering",
        "Vulnerability Assessments",
        "Security Awareness Training",
        "Firewall Management"
      ],
      image: "/images/4.png"
    },
    {
      title: "Cloud Services",
      icon: Cloud,
      description: "Leverage the power of the cloud to improve collaboration and accessibility.",
      features: [
        "Microsoft 365 Migration & Support",
        "Cloud Storage Solutions",
        "Azure Infrastructure",
        "Cloud Security Configuration",
        "Hybrid Cloud Setup"
      ],
      image: "/images/5.jpg"
    },
    {
      title: "Help Desk Support",
      icon: Headset,
      description: "Get the support you need, when you need it, from our friendly local team.",
      features: [
        "Remote Technical Support",
        "On-site Assistance",
        "Troubleshooting & Repairs",
        "Software Installation",
        "User Onboarding"
      ],
      image: "/images/1.png"
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <section className="bg-brand-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/server-rack.webp" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-orange uppercase mb-6">Expertise</h2>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8">Professional <span className="text-brand-orange">IT Services</span></h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Scalable technology solutions tailored to Christchurch&apos;s dynamic business landscape.
            From startups to established enterprises, we keep you moving forward.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:items-center gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-3xl mb-10 shadow-inner">
                    <service.icon className="w-10 h-10 text-brand-blue" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-bold">
                        <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-brand-orange" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-brand-blue font-bold text-lg group"
                  >
                    Discuss this service
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform text-brand-orange" />
                  </Link>
                </div>
                <div className="lg:w-1/2 relative">
                  <div className="absolute -inset-4 bg-brand-blue/5 rounded-[3rem] -rotate-2"></div>
                  <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8">Not sure what you need?</h3>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed font-sans">
            Our experts can perform a comprehensive IT audit to identify gaps in your security,
            performance, and scalability. Let&apos;s build a roadmap together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-brand-blue text-white font-bold rounded-2xl hover:bg-brand-orange transition-all shadow-xl shadow-blue-900/10"
          >
            Request Free IT Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
