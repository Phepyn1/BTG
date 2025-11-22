using Microsoft.AspNetCore.Mvc;


namespace BTG_BACKEND.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaccineController : ControllerBase
    {
        // GET: api/<VaccineController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<VaccineController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<VaccineController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<VaccineController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<VaccineController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
