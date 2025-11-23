namespace BTG.Backend.Controllers;


using BTG.Backend.Dtos;
using BTG.Backend.Services;
public static class VaccineRoute
{

  
    public static void VaccineRoutes(this WebApplication app)
    {
        var route = app.MapGroup("api/vaccine");

        route.MapGet("",async (VaccineService service) =>
        {
            List<VaccineResponseDto> VaccinesList = await service.GetVaccines();
            if(!VaccinesList.Any()){return Results.BadRequest("Lista vazia!");}
            return Results.Ok(VaccinesList);   
        });

        route.MapPost("",  async (CreateVaccineDto VaccineDto, VaccineService service) =>
        {
           var createVaccine = await service.CreateVaccine(VaccineDto);
            if (createVaccine == null) return Results.Conflict(new { message = "UniqueKey já cadastrada" });
            return  Results.Created($"/vaccine/{createVaccine.Id}", createVaccine) ;   
        });
        
        route.MapDelete("{id:guid}", async (Guid id, VaccineService service) =>
        {
            var deleted = await service.DeleteVaccine(id);
            return deleted
        ? Results.NoContent()
            : Results.NotFound("Vaccine not found");
        });

    }
    
}