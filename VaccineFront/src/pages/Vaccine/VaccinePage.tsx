import { useEffect, useState } from "react";
import { CheckIcon, ClipboardDocumentCheckIcon,TrashIcon } from  "@heroicons/react/24/outline";
import { VaccineService} from "../../Services/VaccineService";
import type { Vaccine, VaccineCreate } from "../../Interfaces/VaccineI";

export default function VaccinePage(){
  const [Vaccines, setVaccine] = useState<Vaccine[]>([]);
    const [VaccineName, setVaccineName] = useState("");
    const [VaccineUniqueId, setVaccineUniqueId] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(true)
      
  
    useEffect(() => {
        VaccineService.list().then((data) => {
        setVaccine(data)
        })
        .finally(() => setLoading(false));
      }, [])
    if (loading) return <p>Carregando...</p>
    
    const handleDelete = async (Id:string) =>
     {
        console.log(Id)
        await VaccineService.delete(Id);
        setVaccine(prev => prev.filter(p => p.id !== Id));
     }
     const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
        const newVaccine: VaccineCreate = {
          name: VaccineName,
          uniqueID: VaccineUniqueId,
        };
  
        try {
          const data = await VaccineService.create(newVaccine);
  
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
  
        
          setVaccine((prev) => [...prev, data]);
  
          setVaccineName("");
          setVaccineUniqueId("");
          
        } catch (err) {
          console.error("Error:", err);
        }
      };
      
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h2 className="mb-4">Register Vaccine</h2>
        <p className="text-[#6C757D]">
          Add a new vaccine to the system database.
        </p>
      </div>

      {/* Decorative stripe */}
      <div className="h-1 w-24 bg-linear-to-r from-[#307AE0] to-[#549CFF] mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-[#DEE2E6] p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#307AE0] flex items-center justify-center">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3>Vaccine Information</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="vaccineName" className="block mb-3">
                  Vaccine Name
                </label>
                <input
                  id="vaccineName"
                  type="text"
                  value={VaccineName}
                  onChange={(e) => setVaccineName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#DEE2E6] focus:border-[#307AE0] focus:outline-none transition-colors"
                  placeholder="Enter vaccine name"
                  required
                />
                <p className="mt-2 text-[#6C757D]">
                  Commercial or scientific name of the vaccine
                </p>
              </div>

              <div>
                <label htmlFor="vaccineId" className="block mb-3">
                  Vaccine Unique ID
                </label>
                <input
                  id="vaccineId"
                  type="text"
                  value={VaccineUniqueId}
                  onChange={(e) => setVaccineUniqueId(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#DEE2E6] focus:border-[#307AE0] focus:outline-none transition-colors"
                  placeholder="Enter unique identifier"
                  required
                />
                <p className="mt-2 text-[#6C757D]">
                  WHO code, regulatory ID, or internal system identifier
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#001E62] hover:bg-[#195AB4] text-white px-8 py-4 transition-colors w-full md:w-auto"
                >
                  Create Vaccine
                </button>
              </div>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 bg-[#D2E5FF] border-l-4 border-[#307AE0] flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-[#001E62]" />
                <span className="text-[#001E62]">Vaccine successfully registered</span>
              </div>
            )}
          </div>
        </div>

        {/* Registered Vaccines List */}
        <div className="lg:col-span-1">
          <div className="bg-[#F8F9FA] border-2 border-[#DEE2E6] p-6">
            <h4 className="mb-6">Registered Vaccines</h4>
            
            {Vaccines.length === 0 ? (
              <p className="text-[#6C757D]">No vaccines registered yet</p>
            ) : (
              <div className="space-y-3">
                {Vaccines.slice().reverse().map((vaccine) => (
                  <div
                      key={vaccine.id}
                      className="bg-white p-4 border border-[#DEE2E6] flex items-center justify-between"
                    >
                      <div>
                        <p className="mb-1">{vaccine.name}</p>
                        <p className="text-[#6C757D]">ID: {vaccine.id}</p>
                      </div>
                      <button
                        className="p-2 rounded bg-red-500 hover:bg-red-300 transition-colors"
                        onClick={() => handleDelete(vaccine.id)}
                      >
                          <TrashIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </button>
                    </div>
            ))}
          </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );}
