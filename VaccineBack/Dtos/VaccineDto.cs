namespace VaccineBack.Dto.Vaccine;

    public record class CreateVaccineDto(
        string Name,
        int? Id
    );

    public record class VaccineResponseDto(
        string Name,
        int Id
    );
