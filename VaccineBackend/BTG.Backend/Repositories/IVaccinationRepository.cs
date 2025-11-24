using BTG.Backend.entites;

namespace BTG.Backend.Repositories
{

    public interface IVaccinationRepository
    {
        Task<List<ModelVaccination>> GetAll();
        Task<ModelVaccination?> FindById(Guid id);
        Task<ModelVaccination> SetVaccination(ModelVaccination Vaccination);
        Task<ModelVaccination?> DeleteVaccination(Guid id);
        Task<bool> ExistsAsync(Guid personId, Guid vaccineId, Guid doseId);

    }
}