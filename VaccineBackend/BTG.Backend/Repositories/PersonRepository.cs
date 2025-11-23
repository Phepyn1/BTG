using BTG.Backend.Data;
using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Runtime.InteropServices;

namespace BTG.Backend.Repositories;

    public class PersonRepository : IPersonRepository
    {
        private readonly PersonContext _context;

    public PersonRepository(PersonContext context)
    {
        _context = context;
    }
    public async Task<List<ModelPerson>> GetAll() => await _context.person.ToListAsync();

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

