public class CreateVaccinationDTO;
{   
    public Guid PersonId {get; set;}
    public Guid VaccineId {get; set;}
    public int DoseNumber {get; set;}
    public string Name { get; set; }
}

public class GetVaccinationDTO;
{   
    public Guid Id {get; set;}
    public int DoseNumber {get; set;}
    public string Name { get; set; }
    public DateOnly Date {get; set;}
}   

