import { useEffect, useState } from "react";
import { DocumentTextIcon, CheckIcon} from "@heroicons/react/24/outline";
import { VaccinationService } from '../../Services/VaccinationService';
import type { VaccinationCreate, VaccinetionDashboard  } from '../../Interfaces/VaccinationI'
import type { Person } from "../../Interfaces/PersonsI";
import type { Vaccine } from "../../Interfaces/VaccineI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersonService } from "../../Services/PersonService";
import { VaccineService } from "../../Services/VaccineService";
import { DoseService } from "../../Services/DoseService";
import type { Dose } from "../../Interfaces/DoseI";

  

export default function VaccinationRecordPage() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [vaccines, setVaccines] = useState<Vaccine[]>([])
  const [doses, setDoses] = useState<Dose[]>([]) 
  const [personId, setPersonId] = useState('');
  const [vaccineId, setVaccineId] = useState('');
  const [doseId, setDoseId] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
   PersonService.list().then((data) => {
      setPersons(data);
    })
    VaccineService.list().then((data) => {
      setVaccines(data);
    })
    DoseService.list().then((data)=>
    {
      setDoses(data);
    })
    .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newRecord: VaccinationCreate = {
      personId,
      vaccineId,
      doseId,
      date  
    };

    try {
      await VaccinationService.create(newRecord);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      setPersonId('');
      setVaccineId('');
      setDoseId('');
      setDate(new Date().toISOString().split('T')[0]);

      toast.success("Vaccination record created successfully!");

    } catch (err: any) {
      console.log(err)
      toast.error(err.response.data.message);
    }
  };


  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="mb-12">
        <h2 className="mb-4 text-[#001e62] text-3xl">Vaccination Record</h2>
        <p className="text-[#6C757D]">
          Record a vaccine application for an individual.
        </p>
      </div>

      <div className="h-1 w-24 bg-linear-to-r from-[#307AE0] to-[#549CFF] mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-[#DEE2E6] p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#307AE0] flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3>Application Details</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="personId" className="block mb-3">
                    Person ID
                  </label>
                  <select
                       id="personId"
                    value={personId}
                    onChange={(e) => setPersonId(e.target.value)}
                      className="
                        w-full px-4 py-3 
                        border-2 border-[#DEE2E6] 
                        bg-white
                        text-[#323232]
                        focus:outline-none 
                        focus:border-[#307AE0] 
                        focus:ring-2 
                        focus:ring-[#307AE0] 
                        focus:ring-opacity-20
                        transition-all 
                        duration-200
                        cursor-pointer
                        appearance-none
                        bg-no-repeat
                        bg-[length:16px_16px]
                        bg-[center_right_1rem]
                        pr-12
                        hover:border-[#307AE0]
                      "
                    >
                      <option value="" className="text-[#323232]">Select a person</option>
                      {persons.map((person) => (
                        <option key={person.id} value={person.id} className="text-[#323232]">
                          {person.name} ({person.uniqueID})
                        </option>
                      ))}
                    </select>
                  <p className="mt-2 text-[#6C757D]">
                    {persons.length} person(s) available
                  </p>
                </div>

                <div>
                  <label htmlFor="vaccineId" className="block mb-3">
                    Vaccine ID
                  </label>
                  <select
                    id="vaccineId"
                    value={vaccineId}
                    onChange={(e) => setVaccineId(e.target.value)}
                    className="
                        w-full px-4 py-3 
                        border-2 border-[#DEE2E6] 
                        bg-white
                        text-[#323232]
                        focus:outline-none 
                        focus:border-[#307AE0] 
                        focus:ring-2 
                        focus:ring-[#307AE0] 
                        focus:ring-opacity-20
                        transition-all 
                        duration-200
                        cursor-pointer
                        appearance-none
                        bg-no-repeat
                        bg-[length:16px_16px]
                        bg-[center_right_1rem]
                        pr-12
                        hover:border-[#307AE0]"
                    required
                  >
                    <option value="">Select a vaccine</option>
                    {vaccines.map((vaccine) => (
                      <option key={vaccine.id} value={vaccine.id}>
                        {vaccine.name} ({vaccine.uniqueID})
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-[#6C757D]">
                    {vaccines.length} vaccine(s) available
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dose" className="block mb-3">
                    Dose Number
                  </label>
                  <select
                    id="dose"
                    value={doseId}
                    onChange={(e) => setDoseId(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#DEE2E6] focus:border-[#307AE0] focus:outline-none transition-colors bg-white"
                    required
                  >
                    <option value={""}>Select a Dose</option>
                    {doses.map((dose) => (
                      <option key={dose.id} value={dose.id}>
                        {dose.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block mb-3">
                    Application Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#DEE2E6] focus:border-[#307AE0] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#001E62] hover:bg-[#195AB4] text-white px-8 py-4 transition-colors w-full md:w-auto"
                >
                  Record Vaccination
                </button>
              </div>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 bg-[#D2E5FF] border-l-4 border-[#307AE0] flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-[#001E62]" />
                <span className="text-[#001E62]">Vaccination record successfully created</span>
              </div>
            )}
          </div>
        </div>
            {/* Information Panel */}
                    <div className="lg:col-span-1">
          <div className="bg-[#F8F9FA] border-2 border-[#DEE2E6] p-6">
            <h4 className="mb-6">Registered Vaccinations</h4>

            <div className="mt-6 p-4 bg-white border border-[#DEE2E6]">
              <h5 className="mb-3 text-sm">System Overview</h5>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#F8F9FA] border border-[#DEE2E6]">
                  <p className="text-[#6C757D] text-xs mb-1">Persons</p>
                  <p className="text-[#001E62] font-medium">0</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#DEE2E6]">
                  <p className="text-[#6C757D] text-xs mb-1">Vaccines</p>
                  <p className="text-[#001E62] font-medium">0</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#DEE2E6] col-span-2">
                  <p className="text-[#6C757D] text-xs mb-1">Total Vaccinations</p>
                  <p className="text-[#001E62] font-medium">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
  );
}