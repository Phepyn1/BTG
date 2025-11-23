using BTG.Backend.entites;

namespace BTG.Backend.Repositories
{
  
        public interface IPersonRepository
    {
            Task<List<ModelPerson>> GetAll();
            Task<ModelPerson> SetPerson(ModelPerson person);
            Task<ModelPerson?> DeletePerson(Guid id);
     }
}
