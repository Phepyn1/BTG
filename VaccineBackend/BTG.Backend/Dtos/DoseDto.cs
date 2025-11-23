namespace BTG.Backend.Dtos
{
   public record class CreateDoseDto(
       string name
       );

   public record class DoseDto(
       Guid id,
       string name
       );
}
