using BTG.Backend.Dtos;
using BTG.Backend.Utils;

namespace BTG.Backend.Controllers;

public static class AuthController
{
    public static void AuthRoutes(this WebApplication app)
    {
        app.MapPost("api/auth/login", (LoginDto dto, IConfiguration config) =>
        {
            // TODO: Substituir por validação real no banco
            if (dto.Username != "admin" || dto.Password != "123")
                return Results.Unauthorized();

            var token = JwtHelper.GenerateToken(dto.Username, config);

            return Results.Ok(new LoginResponseDto(token, DateTime.UtcNow.AddHours(3)));
        })
            .WithName("Login")
            .WithTags("Auth");
    }
}