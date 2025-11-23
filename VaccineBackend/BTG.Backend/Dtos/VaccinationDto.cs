namespace VaccineBack.Dto.Vaccination;


public record class CreateVaccinationDTO
(
Guid PersonId,
Guid VaccineId,
Guid DoseId
);

public record class VaccinationResponseDTO
(
 Guid Id,
 string Dose,   
 DateOnly Date,
 string VaccineName
);