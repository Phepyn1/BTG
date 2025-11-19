namespace PersonDto
{
  public record class CreatePersonDto(
        string Name
  );

  public record class GetPersonDto
  (
        Guid Id,
        string Name 
  );
};