namespace BTG.Backend.Services;

using BTG.Backend.entites;
using BTG.Backend.Repositories;
using VaccineBack.Dto.person;

public class PersonService
{

    private readonly IPersonRepository _repository;

    public PersonService(IPersonRepository repository)
    {
        _repository = repository;
    }
    public async Task<List<PersonResponseDto>> GetPersons()
    {
        var persons = await _repository.GetAll();


        return persons
        .Select(p => new PersonResponseDto(p.Id, p.Name, p.UniqueID))
        .ToList(); 
    }

    public async Task<PersonResponseDto> CreatePerson(CreatePersonDto dto)
    {
        ModelPerson newPerson = new ModelPerson(dto.Name,dto.UniqueID);
        var _save = await _repository.SetPerson(newPerson);

        return new PersonResponseDto(newPerson.Id, newPerson.Name,newPerson.UniqueID);
    }

    public async Task<Boolean> DeletePerson(Guid id)
    {
        var _deleted = await _repository.DeletePerson(id);
        return _deleted is not null;
    }

}