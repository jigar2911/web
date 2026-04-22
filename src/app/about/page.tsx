import { Users, Target, Award, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Oncall IT Support</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner for business technology in Christchurch since we first opened our doors.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Oncall IT Support, we believe that technology should be an enabler for business growth, not a source of frustration.
                Our mission is to provide Christchurch businesses with the same level of IT expertise and security that large corporations enjoy.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We pride ourselves on our proactive approach, ensuring that potential issues are identified and resolved
                before they can impact your operations. With a focus on security and reliability, we build long-term
                partnerships with our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold text-3xl text-blue-600 mb-1">100+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">Clients Supported</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold text-3xl text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reliability",
                icon: Award,
                description: "We show up when we say we will and deliver on our promises every time."
              },
              {
                title: "Security-First",
                icon: Shield,
                description: "We integrate security into every solution we provide to protect your business."
              },
              {
                title: "Local Expertise",
                icon: MapPin,
                description: "We are Christchurch locals who understand the needs of New Zealand businesses."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6 text-blue-600">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Shield } from "lucide-react";
