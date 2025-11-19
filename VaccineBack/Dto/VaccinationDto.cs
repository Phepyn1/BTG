namespace VaccinationDto 
{
    
public record class CreateVaccinationDTO
(
    Guid PersonId,
    Guid VaccineId,
    int DoseNumber,
    string Name
);

public record class GetVaccinationDTO
(
     Guid Id,
     int DoseNumber, 
     string Name,
     DateOnly Date
);
}