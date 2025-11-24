using BTG.Backend.Data;
using BTG.Backend.Dtos;
using BTG.Backend.Dtos.CardVaccine;
using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;


namespace BTG.Backend.Repositories;

    public class PersonRepository : IPersonRepository
    {
        private readonly BTGContext _context;

    public PersonRepository(BTGContext context)
    {
        _context = context;
    }
    public async Task<List<ModelPerson>> GetAll() => await _context.person.ToListAsync();

    public async Task<CardVaccineDto?> FindAllByPersonId(Guid id)
    {
        await _context.Vaccination.Where(p => p.Id == id).ToListAsync();
        var personWithVaccinations = await _context.person
       .Where(p => p.Id == id)
       .Select(p => new CardVaccineDto
       (
           p.Name,
           p.UniqueID,
           p.Vaccinations.Select(v => new VaccinationResponseDTO
           (
               v.Id,
               v.Dose.Name,
               v.Date,
               v.Vaccine.Name)).ToList()
       ))
       .FirstOrDefaultAsync();
        return personWithVaccinations;
    }
    public async Task<ModelPerson?> FindByUniqueId(string UniqueId)
    {
        var person = await _context.person.FirstOrDefaultAsync(p => p.UniqueID == UniqueId);
        if (person is null)
            return null;
        return person;
    }

    public async Task<ModelPerson?> FindById(Guid id)
    {
        var person = await _context.person.FirstOrDefaultAsync(p => p.Id == id);
        if (person is null)
            return null;
        return person;
    }

    public async Task<ModelPerson> SetPerson(ModelPerson person)
    {
         _context.Add(person);
        await _context.SaveChangesAsync();
        return person;
    }

    public async Task<ModelPerson?> DeletePerson(Guid id)
    {

        var person = await _context.person.FirstOrDefaultAsync(p => p.Id == id);

        if (person is null)
            return null;

        _context.person.Remove(person);
        await _context.SaveChangesAsync();
        return person;
    }
    }

