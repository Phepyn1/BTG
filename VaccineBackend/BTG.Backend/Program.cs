using BTG.Backend.Controllers;
using BTG.Backend.Data;
using BTG.Backend.Repositories;
using BTG.Backend.Services;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi;
using System;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

var key = builder.Configuration["Jwt:Key"];
var issuer = builder.Configuration["Jwt:Issuer"];

builder.Services
    .AddAuthentication("Bearer")
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new()
        {
            ValidateIssuer = true,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = issuer,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(key)
            )
        };
    });

builder.Services.AddAuthorization();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddScoped<VaccineService>();
builder.Services.AddScoped<PersonService>();
builder.Services.AddScoped<DoseService>();
builder.Services.AddScoped<VaccinationService>();
builder.Services.AddScoped<BTGContext>();
builder.Services.AddScoped<IPersonRepository, PersonRepository>();
builder.Services.AddScoped<IVaccineRepository, VaccineRepository>();
builder.Services.AddScoped<IDoseRepository, DoseRepository>();
builder.Services.AddScoped<IVaccinationRepository, VaccinationRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "BTG Vaccination API",
        Version = "v1",
        Description = "API for vaccination management.",
        Contact = new OpenApiContact
        {
            Name = "Renan Rodrigues",
            Email = "renan.rodrigues2026@gmail.com"
        }
    });

    // Permite mostrar comentários XML
    var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    if (File.Exists(xmlPath))
        c.IncludeXmlComments(xmlPath);
});
var app = builder.Build();
app.UseCors("AllowFrontend");

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<BTGContext>();
    DbSeeder.Seed(context);
}
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.DocumentTitle = "BTG Vaccination API";
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "BTG Vaccination API v1");
    });
}

app.UseAuthentication();
app.UseAuthorization();
app.UseHttpsRedirection();
app.PersonRoutes();
app.VaccineRoutes();
app.VaccinationRoutes();
app.DoseRoutes();
app.AuthRoutes();
app.Run();


