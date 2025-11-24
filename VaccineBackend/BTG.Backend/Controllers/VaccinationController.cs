using BTG.Backend.Services;
using BTG.Backend.Dtos;
using BTG.Backend.Exceptions;

namespace BTG.Backend.Controllers;

    public static class VaccinationController
    {
         public static void VaccinationRoutes(this WebApplication app) 
        {
            var route = app.MapGroup("api/vaccination").RequireAuthorization();

            route.MapPost("", async (CreateVaccinationDTO dto, VaccinationService service) =>
            {
                try
                {
                    var result = await service.Create(dto);
                    return Results.Ok(result);
                }
                catch (NotFoundException ex)
                {
                    return Results.NotFound(new { message = ex.Message });
                }
                catch (AlreadyExistsException ex)
                {
                    return Results.Conflict(new { message = ex.Message });
                }
                catch (Exception)
                {
                    return Results.Problem("An unexpected error occurred.");
                }
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

