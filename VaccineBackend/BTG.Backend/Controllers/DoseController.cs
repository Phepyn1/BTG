using BTG.Backend.Dtos;
using BTG.Backend.Services;

namespace BTG.Backend.Controllers;

public static class DoseController
{
    public static void DoseRoutes(this WebApplication app)
    {
        var route = app.MapGroup("api/Dose");

        route.MapGet("", async (DoseService service) =>
        {
            List<DoseResponseDto> DosesList = await service.GetDoses();
            if (!DosesList.Any()) { return Results.BadRequest("Lista vazia!"); }
            return Results.Ok(DosesList);
        });

        route.MapPost("", async (CreateDoseDto DoseDto, DoseService service) =>
        {
            var createDose = await service.CreateDose(DoseDto);
            if (createDose == null)
                return Results.Conflict(new { message = "UniqueKey já cadastrada" });
            return Results.Created($"/Dose/{createDose.Id}", createDose);
        });

        route.MapDelete("{id:guid}", async (Guid id, DoseService service) =>
        {
            var deleted = await service.DeleteDose(id);
            return deleted
        ? Results.NoContent()
            : Results.NotFound("Dose not found");
        });
    }
}

