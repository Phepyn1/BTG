namespace VaccineBack.Dto.Vaccine;

    public record class CreateVaccineDto(
        string Name,
        string UniqueID
    );

    public record class VaccineResponseDto(
        Guid Id,
        string Name,
        string UniqueID
    );
