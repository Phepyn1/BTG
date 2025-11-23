using System.Xml;

namespace BTG.Backend.entites;

public class ModelPerson
{
    public ModelPerson(string name, string uniqueID)
    {
        Id = Guid.NewGuid();
        Name = name;
        UniqueID = uniqueID;
    }


    public Guid Id { get; init; }
    public string Name { get; private set; }
    public string UniqueID { get; private set; }

}