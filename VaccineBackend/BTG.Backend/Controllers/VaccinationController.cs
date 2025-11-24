using BTG.Backend.Services;
using BTG.Backend.Dtos;

namespace BTG.Backend.Controllers;

    public static class VaccinationController
    {
         public static void VaccinationRoutes(this WebApplication app) 
        {
            var route = app.MapGroup("api/vaccination");

            route.MapPost("", async (CreateVaccinationDTO dto, VaccinationService service) =>
            {
               var result = await service.Create(dto);
                if (result is null)
                    return Results.BadRequest("Person or vaccine not found");
                return Results.Created($"/person/{result.Id}", result);
            }).WithTags("Vaccination");

            route.MapDelete("{id:guid}", async (Guid id, VaccinationService service) =>
            {
                var deleted = await service.DeleteVaccination(id);
                return deleted
                ? Results.NoContent()
                : Results.NotFound("Person not found");
            }).WithTags("Vaccination");
    }
    }

