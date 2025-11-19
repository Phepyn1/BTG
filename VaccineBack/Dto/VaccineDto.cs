namespace VaccineDto
{
    public record class CreateVaccineDto(
        string Name,
        int? Id
    );

    public record class GetVaccineDto(
        string Name,
        int Id
    );
};