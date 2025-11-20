namespace VaccineBack.entites.personEntity;

public class ModelPerson
{
    public ModelPerson(string name)
    {
        Name = name;
        Id = Guid.NewGuid();
    }


    public Guid Id { get; private set; }
    public string Name { get; private set; }


}