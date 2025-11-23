import {UserIcon , CheckIcon,TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import type { Person, PersonCreate } from "../../Interfaces/PersonsI";
import { PersonService } from "../../Services/PersonService";

export default function PersonPage()
{

  const [persons, setPerson] = useState<Person[]>([]);
  const [personName, setPersonName] = useState("");
  const [personUniqueId, setPersonUniqueId] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true)
    

    useEffect(() => {
      PersonService.list().then((data) => {
      setPerson(data)
      })
      .finally(() => setLoading(false));
    }, [])
  if (loading) return <p>Carregando...</p>
  
   const handleDelete = async (Id:string) =>
   {
      await PersonService.delete(Id);
      setPerson(prev => prev.filter(p => p.id !== Id));
   }
   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      const newPerson: PersonCreate = {
        name: personName,
        uniqueID: personUniqueId,
      };

      try {
        const data = await PersonService.create(newPerson);

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);

        setPerson((prev) => [...prev, data]);

        setPersonName("");
        setPersonUniqueId("");

      } catch (err) {
        console.error("Error:", err);
      }
    };


    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h2 className="mb-4">Register Person</h2>
        <p className="text-[#6C757D]">
          Add a new individual to the vaccination management system.
        </p>
      </div>

      <div className="h-1 w-24 bg-linear-to-r from-[#307AE0] to-[#549CFF] mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-[#DEE2E6] p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#307AE0] flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3>Personal Information</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="personName" className="block mb-3">
                  Person Name
                </label>
                <input
                  id="personName"
                  type="text"
                  value={personName}
                  onChange={(e) => (setPersonName((e.target.value)))}
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
                  value={personUniqueId}
                  onChange={(e) => (setPersonUniqueId((e.target.value)))}
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
         <div className="lg:col-span-1">
        <div className="bg-[#f8f9fad0] border-2 border-[#DEE2E6] p-6">
          <h4 className="mb-6">Registered Persons</h4>

            {persons.length === 0 ? (
              <p className="text-[#6C757D]">No persons registered yet</p>
            ) : (
              <div className="space-y-3 h-90 overflow-y-auto pr-2">
                {persons
                  .slice()
                  .reverse()
                  .map((person) => (
                    <div
                      key={person.id}
                      className="bg-white p-4 border border-[#DEE2E6] flex items-center justify-between"
                    >
                      <div>
                        <p className="mb-1">{person.name}</p>
                        <p className="text-[#6C757D]">ID: {person.id}</p>
                      </div>
                      <button
                        className="p-2 rounded bg-red-500 hover:bg-red-300 transition-colors"
                        onClick={() => handleDelete(person.id)}
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
  

