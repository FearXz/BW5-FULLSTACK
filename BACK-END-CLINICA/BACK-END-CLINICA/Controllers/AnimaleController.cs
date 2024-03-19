using BACK_END_CLINICA.Data;
using BACK_END_CLINICA.Models;
using BACK_END_CLINICA.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BACK_END_CLINICA.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize(Roles = UserRole.ADMIN_MEDICO)]
    public class AnimaleController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public AnimaleController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET /animale/list
        [HttpGet("list")]
        public async Task<IActionResult> GetAnimali()
        {
            var animali = await _db
                .Animali.Select(p => new
                {
                    Animale = new
                    {
                        Nome = p.NomeAnimale,
                        Specie = p.SpecieAnimale,
                        Proprietario = new
                        {
                            Nome = p.Proprietario.NomeProprietario,
                            Cognome = p.Proprietario.CognomeProprietario
                        }
                    }
                })
                .ToListAsync();

            return Ok(animali);
        }

        [HttpPost("addproprietario")]
        public async Task<IActionResult> AddProprietario(ProprietarioModel proprietario)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            Proprietario newProp = new Proprietario
            {
                NomeProprietario = proprietario.NomeProprietario,
                CognomeProprietario = proprietario.CognomeProprietario,
                CodiceFiscale = proprietario.CodiceFiscale,
                NumeroTelefono = proprietario.NumeroTelefono
            };

            await _db.Proprietari.AddAsync(newProp);
            await _db.SaveChangesAsync();

            return Ok();
        }
    }
}
