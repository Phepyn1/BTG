namespace VaccineBack.Dto.Vaccination
{
    
public record class CreateVaccinationDTO
(
    Guid PersonId,
    Guid VaccineId,
    int DoseNumber,
    string Name
);

public record class VaccinationResponseDTO
(
     Guid Id,
     int DoseNumber, 
     string Name,
     DateOnly Date
);
}