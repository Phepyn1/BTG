namespace BTG.Backend.Services;

using BTG.Backend.entites;
using BTG.Backend.Repositories;
using BTG.Backend.Dtos;

public class DoseService
{

    private readonly IDoseRepository _repository;

    public DoseService(IDoseRepository repository)
    {
        _repository = repository;
    }
    public async Task<List<DoseDto>> GetDoses()
    {
        var Doses = await _repository.GetAll();


        return Doses
        .Select(p => new DoseDto(p.Id, p.Name))
        .ToList();
    }

    public async Task<DoseDto?> CreateDose(CreateDoseDto dto)
    {
        ModelDose newDose = new ModelDose(dto.name);
      
        var _save = await _repository.SetDose(newDose);

        return new DoseDto(newDose.Id, newDose.Name);
    }

    public async Task<Boolean> DeleteDose(Guid id)
    {
        var _deleted = await _repository.DeleteDose(id);
        return _deleted is not null;
    }

}