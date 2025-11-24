import { useState, useEffect } from 'react';
import { TrashIcon, MagnifyingGlassIcon, DocumentTextIcon, UserIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { Person } from '../../Interfaces/PersonsI';
import type { Vaccination } from '../../Interfaces/VaccinationI';

import { VaccinationService } from '../../Services/VaccinationService';
import { PersonService } from '../../Services/PersonService';

export default function VaccinationCard() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [selectedPersonId, setSelectedPersonId] = useState("");
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PersonService.list()
      .then((data) => setPersons(data))
      .finally(() => setLoading(false));
  }, []);

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!deleteId || !selectedPerson) return;

    try {
      await VaccinationService.delete(deleteId);

      const updated = selectedPerson.vaccinations.filter(v => v.id !== deleteId);

      setSelectedPerson({
        ...selectedPerson,
        vaccinations: updated
      });

      toast.success("Record successfully deleted!");
    } catch {
      toast.error("Error deleting record!");
    } finally {
      setShowModal(false);
      setDeleteId(null);
    }
  };

  const GetPersonById = async (id: string) => {
    setSelectedPersonId(id);

    if (!id) {
      setSelectedPerson(null);
      return;
    }

    try {
      const data = await PersonService.getByid(id);
      setSelectedPerson(data);
    } catch {
      toast.error("Error loading person data!");
      setSelectedPerson(null);
    }
  };

  if (loading) return <p>Carregando...</p>;

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
        <h2 className="mb-4 text-blue-600 text-2xl font-bold">View Vaccination Cards</h2>
        <p className="text-gray-800 text-lg">
          Access complete vaccination history for registered individuals.
        </p>
      </div>

      <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg">
            <h4 className="mb-6 text-blue-600 text-lg font-semibold">Select Person</h4>
            
            <div className="mb-6">
              <label htmlFor="personSelect" className="block mb-3 text-blue-600 font-medium">
                Choose a person
              </label>
              <select
                id="personSelect"
                value={selectedPersonId}
                onChange={(e) => GetPersonById(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 transition-all duration-200 cursor-pointer"
              >
                <option value="">Select a person</option>
                {persons.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.uniqueID})
                  </option>
                ))}
              </select>
            </div>

            {selectedPerson && (
              <div className="bg-white p-4 border border-gray-300 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-blue-600 font-semibold">{selectedPerson.name}</h5>
                    <p className="text-gray-600 text-sm">ID: {selectedPerson.uniqueID}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium text-blue-600">
                      {selectedPerson.vaccinations.length}
                    </span>{" "}
                    vaccination records
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-3">
              <div className="p-3 bg-white border border-gray-300 rounded">
                <p className="text-gray-600 text-xs mb-1">Total Persons</p>
                <p className="text-blue-600 font-medium">{persons.length}</p>
              </div>
              <div className="p-3 bg-white border border-gray-300 rounded">
                <p className="text-gray-600 text-xs mb-1">Total Vaccines</p>
                <p className="text-blue-600 font-medium">{1}</p>
              </div>
              <div className="p-3 bg-white border border-gray-300 rounded">
                <p className="text-gray-600 text-xs mb-1">Total Records</p>
                <p className="text-blue-600 font-medium">{selectedPerson?.vaccinations.length || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="lg:col-span-3">
          {!selectedPerson ? (
            <div className="bg-white border-2 border-gray-300 rounded-lg p-12 text-center">
              <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-blue-600 text-xl font-semibold mb-2">Select a Person</h3>
              <p className="text-gray-600">
                Choose a person from the sidebar to view their vaccination card
              </p>
            </div>
          ) : (
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-6">
                <div className="flex items-center gap-4 mb-2">
                  <DocumentTextIcon className="w-8 h-8 text-white" />
                  <h3 className="text-white text-2xl font-bold">Vaccination Card</h3>
                </div>
                <p className="text-blue-100 text-lg">
                  {selectedPerson.name} • ID: {selectedPerson.uniqueID}
                </p>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-lg">
                    <MagnifyingGlassIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-blue-600 text-xl font-semibold">Vaccination History</h4>
                </div>

                {selectedPerson.vaccinations.length === 0 ? (
                  <div className="text-center py-12">
                    <DocumentTextIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No vaccination records found</p>
                    <p className="text-gray-400">This person hasn't received any vaccines yet.</p>
                  </div>
                ) : (
                  <>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50 border-b-2 border-gray-200">
                            <th className="px-6 py-4 text-left text-blue-600 font-semibold">Vaccine Name</th>
                            <th className="px-6 py-4 text-left text-blue-600 font-semibold">Dose</th>
                            <th className="px-6 py-4 text-left text-blue-600 font-semibold">Application Date</th>
                            <th className="px-6 py-4 text-left text-blue-600 font-semibold">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedPerson.vaccinations.map((r) => (
                            <tr key={r.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 text-gray-800 font-medium">{r.vaccineName}</td>
                              <td className="px-6 py-4">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                  {r.dose}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-gray-600">
                                {new Date(r.date + "T00:00:00").toLocaleDateString('pt-BR', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </td>
                              <td className="px-6 py-4">
                                <button
                                  onClick={() => handleDeleteClick(r.id)}
                                  className="p-2 rounded bg-red-500 hover:bg-red-600 transition-colors"
                                  title="Delete record"
                                >
                                  <TrashIcon className="w-4 h-4 text-white" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-800 font-medium">
                          Total Vaccinations: {selectedPerson.vaccinations.length}
                        </span>
                        <div className="flex gap-2 text-sm text-blue-600">
                          <span>Unique vaccines: {new Set(selectedPerson.vaccinations.map(r => r.vaccineName)).size}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this vaccination record? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
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