namespace BTG.Backend.entites;

public class ModelVaccine
{
    public ModelVaccine(string name, string uniqueID, int doses)
    {
        Id = Guid.NewGuid();
        Name = name;
        UniqueID = uniqueID;
        Doses = doses;
    }


    public Guid Id { get; init; }
    public string Name { get; private set; }
    public string UniqueID { get; private set; }
    public int Doses { get; private set; }

}