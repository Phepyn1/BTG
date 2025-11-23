namespace BTG.Backend.entites;

public class ModelDose
{
    public ModelDose(string name)
    {
        Id = Guid.NewGuid();
        Name = name;
    }

    public Guid Id { get; init; }
    public string Name { get; private set; }
    public ICollection<ModelVaccination> Vaccinations { get; set; } = new List<ModelVaccination>();


}