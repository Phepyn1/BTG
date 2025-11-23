using BTG.Backend.entites;

namespace BTG.Backend.Repositories
{
  
        public interface IVaccineRepository
    {
            Task<List<ModelVaccine>> GetAll();
            Task<ModelVaccine> SetVaccine(ModelVaccine Vaccine);
            Task<ModelVaccine?> DeleteVaccine(Guid id);
     }
}
