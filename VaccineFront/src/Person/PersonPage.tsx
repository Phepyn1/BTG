import {UserIcon , CheckIcon} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function PersonPage()
{

    const [showSuccess] = useState(false);
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h2 className="mb-4">Register Person</h2>
        <p className="text-[#6C757D]">
          Add a new individual to the vaccination management system.
        </p>
      </div>

      {/* Decorative stripe */}
      <div className="h-1 w-24 bg-gradient-to-r from-[#307AE0] to-[#549CFF] mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-[#DEE2E6] p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#307AE0] flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3>Personal Information</h3>
            </div>

            <form  className="space-y-8">
              <div>
                <label htmlFor="personName" className="block mb-3">
                  Person Name
                </label>
                <input
                  id="personName"
                  type="text"
                  value={'nome'}
                  className="w-full px-4 py-3 border-2 border-[#DEE2E6] focus:border-[#307AE0] focus:outline-none transition-colors"
                  placeholder="Enter full name"
                  required
                />
                <p className="mt-2 text-[#6C757D]">
                  Enter the complete legal name of the individual
                </p>
              </div>

              <div>
                <label htmlFor="personId" className="block mb-3">
                  Person Unique ID
                </label>
                <input
                  id="personId"
                  type="text"
                  className="w-full px-4 py-3 border-2 border-[#DEE2E6] focus:border-[#307AE0] focus:outline-none transition-colors"
                  placeholder="Enter unique identifier"
                  required
                />
                <p className="mt-2 text-[#6C757D]">
                  National ID, passport number, or internal system ID
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#001E62] hover:bg-[#195AB4] text-white px-8 py-4 transition-colors w-full md:w-auto"
                >
                  Create Person
                </button>
              </div>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 bg-[#D2E5FF] border-l-4 border-[#307AE0] flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-[#001E62]" />
                <span className="text-[#001E62]">Person successfully registered</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
