namespace VaccineBack.Dto.person;

  public record class CreatePersonDto(
     string Name,
     string UniqueID
  );

  public record class PersonResponseDto
  (
        Guid Id,
        string Name,
        string UniqueID

  );
