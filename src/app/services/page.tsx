import { Shield, Cloud, Headset, Server, Check } from "lucide-react";

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
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a full suite of IT solutions designed to empower your business
            with reliable technology and expert support.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
