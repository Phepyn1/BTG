using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;

namespace BTG.Backend.Data;

    public class PersonContext : DbContext

    {
        public DbSet<ModelPerson> person { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(connectionString: "Data Source=BTG.sqlite");
        base.OnConfiguring(optionsBuilder);
    }
    }

