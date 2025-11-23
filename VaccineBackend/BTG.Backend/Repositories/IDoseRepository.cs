using BTG.Backend.entites;

namespace BTG.Backend.Repositories
{

    public interface IDoseRepository
    {
        Task<List<ModelDose>> GetAll();
        Task<ModelDose?> FindById(Guid id);
        Task<ModelDose> SetDose(ModelDose Dose);
        Task<ModelDose?> DeleteDose(Guid id);
    }
}
