using BTG.Backend.Data;
using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;


namespace BTG.Backend.Repositories;

    public class VaccineRepository : IVaccineRepository
    {
        private readonly BTGContext _context;

    public VaccineRepository(BTGContext context)
    {
        _context = context;
    }
    public async Task<List<ModelVaccine>> GetAll() => await _context.Vaccine.ToListAsync();

    public async Task<ModelVaccine> SetVaccine(ModelVaccine Vaccine)
    {
         _context.Add(Vaccine);
        await _context.SaveChangesAsync();
        return Vaccine;
    }

    public async Task<ModelVaccine?> DeleteVaccine(Guid id)
    {

        var Vaccine = await _context.Vaccine.FirstOrDefaultAsync(p => p.Id == id);

        if (Vaccine is null)
            return null;

        _context.Vaccine.Remove(Vaccine);
        await _context.SaveChangesAsync();
        return Vaccine;
    }
    }

