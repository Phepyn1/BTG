using BTG.Backend.Data;
using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;


namespace BTG.Backend.Repositories;

public class VaccinationRepository : IVaccinationRepository
{
    private readonly BTGContext _context;

    public VaccinationRepository(BTGContext context)
    {
        _context = context;
    }
    public async Task<List<ModelVaccination>> GetAll() => await _context.Vaccination.ToListAsync();

    public async Task<List<ModelVaccination>> FindAllByPersonId(Guid id) => await _context.Vaccination.Where(p => p.Id == id).ToListAsync(); 
            
    
    public async Task<ModelVaccination?> FindById(Guid id)
    {
        var Vaccination = await _context.Vaccination.FirstOrDefaultAsync(p => p.Id == id);
        if (Vaccination is null)
            return null;
        return Vaccination;
    }

    public async Task<ModelVaccination> SetVaccination(ModelVaccination Vaccination)
    {
        _context.Add(Vaccination);
        await _context.SaveChangesAsync();
        return Vaccination;
    }

    public async Task<ModelVaccination?> DeleteVaccination(Guid id)
    {

        var Vaccination = await _context.Vaccination.FirstOrDefaultAsync(p => p.Id == id);

        if (Vaccination is null)
            return null;

        _context.Vaccination.Remove(Vaccination);
        await _context.SaveChangesAsync();
        return Vaccination;
    }
}

