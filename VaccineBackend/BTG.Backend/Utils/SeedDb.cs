using BTG.Backend.Data;
using BTG.Backend.entites;
using Microsoft.EntityFrameworkCore;
using System;

public static class DbSeeder
{
    public static void Seed(BTGContext context)
    {
        if (!context.person.Any())
        {
            context.person.AddRange(
                new ModelPerson ( "Alfi Silva", "243.324.233-32" ),
                new ModelPerson ( "Bob Bobson", "5445.0111-21" ),
                new ModelPerson ( "João Don", "883" )
            );
            context.SaveChanges();
        }

        if (!context.Vaccine.Any())
        {
            context.Vaccine.AddRange(
                new ModelVaccine("Coronavac", " U11.9", 5),
                new ModelVaccine("Influenza", "J11.1", 5),
                new ModelVaccine("BCG", "Z23.2", 5));
            context.SaveChanges();
        }
        context.SaveChanges();
        if (!context.Dose.Any()) 
        {
            context.Dose.AddRange(
                new ModelDose("1ª Dose"),
                new ModelDose("3ª Dose"),
                new ModelDose("3ª Dose"),
                new ModelDose("Reforço"));
            context.SaveChanges();
        }
        
    }
}

