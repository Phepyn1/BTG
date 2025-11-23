namespace VaccineBack.Dto.Vaccine;

    public record class CreateVaccineDto(
        string Name,
        string UniqueID,
        int Doses
    );

    public record class VaccineResponseDto(
        Guid Id,
        string Name,
        string UniqueID,
        int Doses
    );
