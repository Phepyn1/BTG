using BTG.Backend.Repositories;
using BTG.Backend.entites;
using BTG.Backend.Services;
using Moq;
using Xunit;

namespace BTG.Backend.Tests
{

    public class PersonServiceTests
    {
        [Fact]
        public async Task GetAllPersons_ShouldReturnAllPersons()
        {
            // Arrange
            var mockRepo = new Mock<IPersonRepository>();

            var sampleList = new List<ModelPerson>()
    {
        new ModelPerson ("Mario","322"),
        new ModelPerson ("Jones","rofn"),
        new ModelPerson ("Silva","3222f")
    };

            mockRepo
                .Setup(r => r.GetAll())
                .ReturnsAsync(sampleList);

            var service = new PersonService(mockRepo.Object);

            // Act
            var result = await service.GetPersons();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(3, result.Count);

            Assert.Equal("Mario", result[0].Name);
            Assert.Equal("Jones", result[1].Name);
            Assert.Equal("Silva", result[2].Name);

            Assert.Equal("322", result[0].UniqueID);
            Assert.Equal("rofn", result[1].UniqueID);
            Assert.Equal("3222f", result[2].UniqueID);
        }

    }
}

