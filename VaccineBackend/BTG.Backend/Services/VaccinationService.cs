using BTG.Backend.Dtos;
using BTG.Backend.Dtos.CardVaccine;
using BTG.Backend.entites;
using BTG.Backend.Repositories;

namespace BTG.Backend.Services;

    public class VaccinationService
    {

    private readonly IPersonRepository _personRepository;
    private readonly IVaccineRepository _vaccineRepository;
    private readonly IDoseRepository _doseRepository;
    private readonly IVaccinationRepository _repository;
    //private readonly IVaccinationRepository _vaccinationRepository;
    public VaccinationService(IPersonRepository personRepository, IVaccineRepository vaccineRepository, IVaccinationRepository repository, IDoseRepository doseRepository)
    {
        _personRepository = personRepository;
        _vaccineRepository = vaccineRepository;
        _doseRepository = doseRepository;
        _repository = repository;
    }

    public async Task<VaccinationResponseDTO?> Create(CreateVaccinationDTO dto)
    {
        var record = new ModelVaccination(dto.PersonId, dto.VaccineId, dto.DoseId,dto.Date);

        // valida person
        if (await _personRepository.FindById(dto.PersonId) == null)
            return null;

        // valida vaccine
        var vaccine = await _vaccineRepository.FindById(dto.VaccineId);
        if (vaccine == null)
            return null;

        // valida dose
        var dose = await _doseRepository.FindById(dto.DoseId);
        if (dose == null)
            return null;

        // valida vacinação duplicada
        if (await _repository.ExistsAsync(dto.PersonId, dto.VaccineId, dto.DoseId))
            return null;

        // salva
        await _repository.SetVaccination(record);

        return new VaccinationResponseDTO(
            record.Id,
            dose.Name,
            record.Date,
            vaccine.Name
        );
    }

    public async Task<Boolean> DeleteVaccination(Guid id)
        {
            var _deleted = await _repository.DeleteVaccination(id);
            return _deleted is not null;
        }
}

