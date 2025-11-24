using BTG.Backend.Dtos.CardVaccine;
using BTG.Backend.entites;

namespace BTG.Backend.Repositories
{
  
        public interface IPersonRepository
    {
            Task<List<ModelPerson>> GetAll();
            Task<CardVaccineDto?> FindAllByPersonId(Guid id);
            Task<ModelPerson?> FindByUniqueId(string UniqueId); 
            Task<ModelPerson?> FindById(Guid id);
            Task<ModelPerson> SetPerson(ModelPerson person);
            Task<ModelPerson?> DeletePerson(Guid id);
     }
}
