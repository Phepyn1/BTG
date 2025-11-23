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
            });
            
        }
    }

