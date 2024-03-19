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
    public class ProprietarioController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public ProprietarioController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET /proprietario/list
        [HttpGet("list")]
        public async Task<IActionResult> GetProprietari()
        {
            var proprietari = await _db
                .Proprietari.Select(p => new
                {
                    Proprietario = new
                    {
                        IdProprietario = p.IdProprietario,
                        Nome = p.NomeProprietario,
                        Cognome = p.CognomeProprietario,
                        CodiceFiscale = p.CodiceFiscale,
                        NumeroTelefono = p.NumeroTelefono,
                    },

                    Animali = p
                        .Animali.Select(a => new { Nome = a.NomeAnimale, Specie = a.SpecieAnimale })
                        .ToList()
                })
                .ToListAsync();

            return Ok(proprietari);
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProprietario(int id)
        {
            var proprietario = await _db.Proprietari
                .Where(p => p.IdProprietario == id)
                .Select(p => new
                {
                    Proprietario = new
                    {
                        IdProprietario = p.IdProprietario,
                        Nome = p.NomeProprietario,
                        Cognome = p.CognomeProprietario,
                        CodiceFiscale = p.CodiceFiscale,
                        NumeroTelefono = p.NumeroTelefono,
                    },

                    Animali = p
                        .Animali.Select(a => new { Nome = a.NomeAnimale, Specie = a.SpecieAnimale, DataNascita = a.DataNascita, ColoreAnimale = a.ColoreAnimale, Microchip= a.Microchip })
                        .ToList()
                })
                .FirstOrDefaultAsync();

            if (proprietario == null)
            {
                return NotFound();
            }

            return Ok(proprietario);
        }   
    }
}
