namespace BTG.Backend.Services;

using BTG.Backend.entites;
using BTG.Backend.Repositories;
using VaccineBack.Dto.Vaccine;

public class VaccineService
{

    private readonly IVaccineRepository _repository;

    public VaccineService(IVaccineRepository repository)
    {
        _repository = repository;
    }
    public async Task<List<VaccineResponseDto>> GetVaccines()
    {
        var Vaccines = await _repository.GetAll();


        return Vaccines
        .Select(p => new VaccineResponseDto(p.Id, p.Name, p.UniqueID))
        .ToList(); 
    }

    public async Task<VaccineResponseDto> CreateVaccine(CreateVaccineDto dto)
    {
        ModelVaccine newVaccine = new ModelVaccine(dto.Name,dto.UniqueID);
        var _save = await _repository.SetVaccine(newVaccine);

        return new VaccineResponseDto(newVaccine.Id, newVaccine.Name,newVaccine.UniqueID);
    }

    public async Task<Boolean> DeleteVaccine(Guid id)
    {
        var _deleted = await _repository.DeleteVaccine(id);
        return _deleted is not null;
    }

}