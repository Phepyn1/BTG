namespace BTG.Backend.Dtos;

public record class LoginDto(
    string Username,
    string Password
);

public record class LoginResponseDto(
    string Token,
    DateTime Expiration
);

