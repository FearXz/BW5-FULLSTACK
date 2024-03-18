using BACK_END_CLINICA.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BACK_END_CLINICA.Controllers
{


    [Route("[controller]")]
    [ApiController]
    public class ProprietarioController : ControllerBase
    {

        private readonly ApplicationDbContext _db;

        public ProprietarioController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET /proprietario
        [HttpGet("/list")]
        public async Task<IActionResult> GetProprietari()
        {
            var proprietari = await _db.Proprietari.ToListAsync();
            return Ok(proprietari);

        }


    }



}
