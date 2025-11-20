namespace VaccineBack.Dto.person;

  public record class CreatePersonDto(
     string Name
  );

  public record class PersonResponseDto
  (
        Guid Id,
        string Name 
  );
