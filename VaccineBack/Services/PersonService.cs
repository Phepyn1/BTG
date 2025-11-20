namespace VaccineBack.Services.PersonService;

using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using System.Xml.Linq;
using VaccineBack.Dto.person;
using VaccineBack.entites.personEntity;

public class PersonService
{
   public List<PersonResponseDto> GetPersons()
    {
         return new List<PersonResponseDto>
         {             
            new PersonResponseDto(Guid.NewGuid(), "Genri"),
            new PersonResponseDto(Guid.NewGuid(), "Maria")
         };
    }

    public async Task<PersonResponseDto> CreatePerson(CreatePersonDto dto)
    {
        ModelPerson newPerson = new ModelPerson(dto.Name);
        var _save = newPerson;

        return new PersonResponseDto(newPerson.Id, newPerson.Name);
    }

    public async Task<Boolean> DeletePerson(Guid id)
    {
        var _remove = true; 
        return _remove;
    }

}