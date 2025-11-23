using BTG.Backend.Dtos;

namespace BTG.Backend.Dtos.CardVaccine;

public record class CardVaccineDto
(
    string Name,
    string UniqueId,
    List<VaccinationResponseDTO> Vaccinations
);
