namespace BTG.Backend.entites;

public class ModelVaccination
    {

    public ModelVaccination(Guid personId, Guid vaccineId, Guid doseId, DateOnly date)
    {
        Id = Guid.NewGuid();
        PersonId = personId;
        VaccineId = vaccineId;
        DoseId = doseId;
        Date = date;
    }
        
       public Guid Id { get; init;}
       public Guid PersonId { get; private set;}
       public Guid VaccineId { get; private set;}
       public Guid DoseId { get; private set;}
       public DateOnly Date {  get; private set;}

    public ModelPerson Person { get; set; }   
    public ModelVaccine Vaccine { get; set; } 
    public ModelDose Dose { get; set; }       
}

