namespace VaccineBack.Controller.Person;

using System.Reflection.Metadata.Ecma335;
using Microsoft.VisualBasic;
using VaccineBack.Dto.person;
using VaccineBack.Services.PersonService;
public static class PersonRoute
{
    public static void PersonRoutes(this WebApplication app)
    {
        var route = app.MapGroup("api/person");

        route.MapGet("",() =>
        {
            PersonService service =  new PersonService();
            List<PersonResponseDto> personsList = service.GetPersons();
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
            return await service.DeletePerson(id);
        });


    }
    
}