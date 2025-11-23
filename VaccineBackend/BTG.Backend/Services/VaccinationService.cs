using BTG.Backend.entites;
using BTG.Backend.Repositories;
using BTG.Backend.Dtos;

namespace BTG.Backend.Services;

    public class VaccinationService
    {

    private readonly IPersonRepository _personRepository;
    private readonly IVaccineRepository _vaccineRepository;
    private readonly IVaccinationRepository _repository;
    //private readonly IVaccinationRepository _vaccinationRepository;
    public VaccinationService(IPersonRepository personRepository, IVaccineRepository vaccineRepository, IVaccinationRepository repository)
    {
        _personRepository = personRepository;
        _vaccineRepository = vaccineRepository;
        _repository = repository;
    }

    public async Task<VaccinationResponseDTO?> Create(CreateVaccinationDTO dto)
        {
            ModelVaccination recordVaccine = new ModelVaccination(dto.PersonId, dto.VaccineId, dto.DoseId);
   
        if (await _personRepository.FindById(recordVaccine.PersonId) == null)
            return null;

        var vaccine = await _vaccineRepository.FindById(recordVaccine.VaccineId);
        if (vaccine == null)
            return null;
       var _save = await _repository.SetVaccination(recordVaccine);

        return new VaccinationResponseDTO(recordVaccine.Id, "recordVaccine", recordVaccine.Date,vaccine.Name);


    } 
    }

