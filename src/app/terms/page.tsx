export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-brand-blue mb-8">Terms of Service</h1>
      <p className="text-lg text-gray-700 mb-6">
        By accessing or using the Oncall IT Support website or services, you agree to be bound by these terms.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Service Provision</h2>
      <p className="text-gray-700 mb-4">
        We provide IT support, managed services, and consulting. The specific details of these services are outlined in your service agreement.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">User Responsibilities</h2>
      <p className="text-gray-700 mb-4">
        You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        Oncall IT Support shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
      </p>
      <p className="mt-12 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
