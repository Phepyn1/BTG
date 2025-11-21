import { Link } from "react-router-dom";

export default function Footer() {
  return (
        <footer className="bg-[#001E62] text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-white mb-4">BTG Pactual</h5>
                <p className="text-[#B1D2FF]">
                  Vaccination Card Management System
                </p>
              </div>
              <div>
                <h6 className="text-white mb-4">System Information</h6>
                <ul className="space-y-2 text-[#B1D2FF]">
                  <li>Version 1.0.0</li>
                  <li>© 2025 BTG Pactual</li>
                  <li>Enterprise Grade Solution</li>
                </ul>
              </div>
              <div>
                <h6 className="text-white mb-4">Support</h6>
                <ul className="space-y-2 text-[#B1D2FF]">
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>Contact Support</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#195AB4] text-center text-[#B1D2FF]">
              <p>Secure, Reliable, Professional</p>
            </div>
          </div>
        </footer>
  );
}
