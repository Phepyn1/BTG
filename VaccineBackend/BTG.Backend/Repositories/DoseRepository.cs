using BTG.Backend.Data;
using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;


namespace BTG.Backend.Repositories;

    public class DoseRepository : IDoseRepository
    {
        private readonly BTGContext _context;

    public DoseRepository(BTGContext context)
    {
        _context = context;
    }
    public async Task<List<ModelDose>> GetAll() => await _context.Dose.ToListAsync();

    public async Task<ModelDose?> FindById(Guid id)
    {
        var Dose = await _context.Dose.FirstOrDefaultAsync(p => p.Id == id);
        if (Dose is null)
            return null;
        return Dose;
    }

    public async Task<ModelDose> SetDose(ModelDose Dose)
    {
         _context.Add(Dose);
        await _context.SaveChangesAsync();
        return Dose;
    }

    public async Task<ModelDose?> DeleteDose(Guid id)
    {

        var Dose = await _context.Dose.FirstOrDefaultAsync(p => p.Id == id);

        if (Dose is null)
            return null;

        _context.Dose.Remove(Dose);
        await _context.SaveChangesAsync();
        return Dose;
    }
    }

