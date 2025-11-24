namespace BTG.Backend.Dtos;


public record class CreateVaccinationDTO
(
Guid PersonId,
Guid VaccineId,
Guid DoseId,
DateOnly Date
);

public record class VaccinationResponseDTO
(
 Guid Id,
 string Dose,   
 DateOnly Date,
 string VaccineName
);