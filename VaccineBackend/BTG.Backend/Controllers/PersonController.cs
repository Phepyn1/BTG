namespace BTG.Backend.Controller;


using VaccineBack.Dto.person;
using BTG.Backend.Services;
public static class PersonRoute
{

  
    public static void PersonRoutes(this WebApplication app)
    {
        var route = app.MapGroup("api/person");

        route.MapGet("",async (PersonService service) =>
        {
            List<PersonResponseDto> personsList = await service.GetPersons();
            if(!personsList.Any()){return Results.BadRequest("Lista vazia!");}
            return Results.Ok(personsList);   
        });

        route.MapPost("",  async (CreatePersonDto personDto, PersonService service) =>
        {
           var createPerson = await service.CreatePerson(personDto);
            return  Results.Created($"/person/{createPerson.Id}", createPerson) ;   
        });
        
        route.MapDelete("{id:guid}", async (Guid id, PersonService service) =>
        {
            var deleted = await service.DeletePerson(id);
            return deleted
        ? Results.NoContent()
            : Results.NotFound("Person not found");
        });


    }
    
}