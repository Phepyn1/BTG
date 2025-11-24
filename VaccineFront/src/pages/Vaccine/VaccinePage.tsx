import { useEffect, useState } from "react";
import { CheckIcon, ClipboardDocumentCheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { VaccineService } from "../../Services/VaccineService";
import type { Vaccine, VaccineCreate } from "../../Interfaces/VaccineI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VaccinePage() {
  const [vaccines, setVaccine] = useState<Vaccine[]>([]);
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineUniqueId, setVaccineUniqueId] = useState("");
  const [vaccineDose, setVaccineDose] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    VaccineService.list().then((data) => {
      setVaccine(data);
    })
    .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      await VaccineService.delete(deleteId);
      setVaccine(prev => prev.filter(v => v.id !== deleteId));
      toast.success("Vacina excluída com sucesso!");
    } catch (error) {
      toast.error("Erro ao excluir vacina");
    } finally {
      setShowModal(false);
      setDeleteId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newVaccine: VaccineCreate = {
      name: vaccineName,
      uniqueID: vaccineUniqueId,
      doses: parseInt(vaccineDose),
    };

    try {
      const data = await VaccineService.create(newVaccine);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      setVaccine((prev) => [...prev, data]);
      setVaccineName("");
      setVaccineUniqueId("");
      setVaccineDose("");

      toast.success("Vaccine successfully registered!");

    } catch (err: any) {
      toast.error("Error: Unique ID already registered");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
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
        <h2 className="mb-4 text-[#001e62] text-3xl">Register Vaccine</h2>
        <p className="text-[#6C757D]">
          Add a new vaccine to the system database.
        </p>
      </div>

      <div className="h-1 w-24 bg-linear-to-r from-[#307AE0] to-[#549CFF] mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                  value={vaccineName}
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
                  value={vaccineUniqueId}
                  onChange={(e) => setVaccineUniqueId(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#DEE2E6] focus:border-[#307AE0] focus:outline-none transition-colors"
                  placeholder="Enter unique identifier"
                  required
                />
                <p className="mt-2 text-[#6C757D]">
                  WHO code, regulatory ID, or internal system identifier
                </p>
              </div>

              <div>
                <label htmlFor="vaccineDose" className="block mb-3">
                  Number of doses
                </label>
                <input
                  id="vaccineDose"
                  type="number"
                  min="1"
                  value={vaccineDose}
                  onChange={(e) => setVaccineDose(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#DEE2E6] focus:border-[#307AE0] focus:outline-none transition-colors"
                  placeholder="Enter number of doses"
                  required
                />
                <p className="mt-2 text-[#6C757D]">
                  The number of doses required is greater than 0
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

        <div className="lg:col-span-1">
          <div className="bg-[#F8F9FA] border-2 border-[#DEE2E6] p-6">
            <h4 className="mb-6">Registered Vaccines</h4>
            
            {vaccines.length === 0 ? (
              <p className="text-[#6C757D]">No vaccines registered yet</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {vaccines.slice().reverse().map((vaccine) => (
                  <div
                    key={vaccine.id}
                    className="bg-white p-4 border border-[#DEE2E6] flex items-center justify-between"
                  >
                    <div>
                      <p className="mb-1 font-medium">{vaccine.name}</p>
                      <p className="text-[#6C757D] text-sm">ID: {vaccine.uniqueID}</p>
                      <p className="text-[#6C757D] text-sm">Doses: {vaccine.doses}</p>
                    </div>
                    <button
                      className="p-2 rounded bg-red-500 hover:bg-red-600 transition-colors"
                      onClick={() => handleDeleteClick(vaccine.id)}
                    >
                      <TrashIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 shadow-lg border-2 border-[#DEE2E6] w-80 rounded-lg">
            <h3 className="mb-4 font-semibold text-lg">Confirm deletion</h3>
            <p className="mb-6 text-[#6C757D]">
              Are you sure you want to delete this vaccine?
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border-2 border-[#DEE2E6] rounded hover:bg-[#f1f1f1] transition-colors"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}