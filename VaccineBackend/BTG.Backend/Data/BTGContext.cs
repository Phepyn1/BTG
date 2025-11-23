using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;

namespace BTG.Backend.Data;

    public class BTGContext : DbContext

    {
       public DbSet<ModelPerson> person { get; set; }
       public DbSet<ModelVaccine> Vaccine { get; set; }
       public DbSet<ModelVaccination> Vaccination { get; set; } 

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(connectionString: "Data Source=BTG.sqlite");
        base.OnConfiguring(optionsBuilder);
    }
    }

