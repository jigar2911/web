export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-brand-blue mb-8">Privacy Policy</h1>
      <p className="text-lg text-gray-700 mb-6">
        At Oncall IT Support, we are committed to protecting your privacy and ensuring the security of your personal information.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Information Collection</h2>
      <p className="text-gray-700 mb-4">
        We collect information that you provide directly to us when you request a quote, contact us for support, or subscribe to our newsletter.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use the information we collect to provide, maintain, and improve our services, and to communicate with you about your account or our services.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
      </p>
      <p className="mt-12 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
