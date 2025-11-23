using BTG.Backend.Controller;
using BTG.Backend.Data;
using BTG.Backend.Repositories;
using BTG.Backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<PersonService>();
builder.Services.AddScoped<PersonContext>();
builder.Services.AddScoped<IPersonRepository, PersonRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});
var app = builder.Build();
app.UseCors("AllowFrontend");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.PersonRoutes();
app.Run();


