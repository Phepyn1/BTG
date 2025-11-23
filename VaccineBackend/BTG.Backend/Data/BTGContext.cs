using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;

namespace BTG.Backend.Data;

public class BTGContext : DbContext

{
    public DbSet<ModelPerson> person { get; set; }
    public DbSet<ModelVaccine> Vaccine { get; set; }
    public DbSet<ModelVaccination> Vaccination { get; set; }
    public DbSet<ModelDose> Dose { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(connectionString: "Data Source=BTG.sqlite");
        base.OnConfiguring(optionsBuilder);
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ModelVaccination>()
    .HasOne(v => v.Person)
    .WithMany(p => p.Vaccinations)
    .HasForeignKey(v => v.PersonId)
    .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<ModelVaccination>()
            .HasOne(v => v.Vaccine)
            .WithMany(vac => vac.Vaccinations)
            .HasForeignKey(v => v.VaccineId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<ModelVaccination>()
            .HasOne(v => v.Dose)
            .WithMany(d => d.Vaccinations)
            .HasForeignKey(v => v.DoseId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<ModelVaccination>()
            .HasIndex(v => new { v.PersonId, v.VaccineId, v.DoseId })
            .IsUnique();
    }
}