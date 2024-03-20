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
    public class RicoveroController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public RicoveroController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET /ricovero/list
        [HttpGet("list")]
        public async Task<IActionResult> GetRicoveri()
        {
            var ricoveri = await _db
                .Ricoveri.Select(r => new
                {
                    Ricovero = new
                    {
                        IdRicovero = r.IdRicovero,
                        IdAnimale = r.IdAnimale,
                        DataInizioRicovero = r.DataInizioRicovero,
                        FotoAnimale = r.FotoAnimale,
                        PrezzoRicovero = r.PrezzoRicovero,
                        Animale = new
                        {
                            NomeAnimale = r.Animale.NomeAnimale,
                            SpecieAnimale = r.Animale.SpecieAnimale,
                            DataNascita = r.Animale.DataNascita,
                            DataRegistrazione = r.Animale.DataRegistrazione,
                            ColoreAnimale = r.Animale.ColoreAnimale,
                            Microchip = r.Animale.Microchip,

                            Proprietario = new
                            {
                                NomeProprietario = r.Animale.Proprietario.NomeProprietario,
                                CognomeProprietario = r.Animale.Proprietario.CognomeProprietario,
                                CodiceFiscale = r.Animale.Proprietario.CodiceFiscale,
                                NumeroTelefono = r.Animale.Proprietario.NumeroTelefono
                            }
                        }
                    }
                })
                .ToListAsync();

            return Ok(ricoveri);
        }

        [HttpPost("addricovero")]
        public async Task<IActionResult> AddRicovero(RicoveroModelPost ricovero)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            Ricovero newRic = new Ricovero
            {
                IdAnimale = ricovero.IdAnimale,
                DataInizioRicovero = ricovero.DataInizioRicovero,
                FotoAnimale = ricovero.FotoAnimale,
                PrezzoRicovero = ricovero.PrezzoRicovero
            };

            await _db.Ricoveri.AddAsync(newRic);
            await _db.SaveChangesAsync();

            return Ok();
        }


        //dettaglio ricovero
        // GET /ricovero/1
        [HttpGet("{id}")]

        public async Task<IActionResult> GetRicovero(int id)
        {
            var ricovero = await _db
                .Ricoveri.Where(r => r.IdRicovero == id)
                .Select(r => new
                {
                    Ricovero = new
                    {
                        IdRicovero = r.IdRicovero,
                        IdAnimale = r.IdAnimale,
                        DataInizioRicovero = r.DataInizioRicovero,
                        FotoAnimale = r.FotoAnimale,
                        PrezzoRicovero = r.PrezzoRicovero,
                    }
                })
                .FirstOrDefaultAsync();
            if (ricovero == null)
            {
                return NotFound();
            }
            return Ok(ricovero);

        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateRicovero(RicoveroModelEdit ricovero)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            var ric = await _db.Ricoveri.FindAsync(ricovero.IdRicovero);
            if (ric == null)
            {
                return NotFound();
            }

            ric.IdAnimale = ricovero.IdAnimale;
            ric.DataInizioRicovero = ricovero.DataInizioRicovero;
            ric.FotoAnimale = ricovero.FotoAnimale;
            ric.PrezzoRicovero = ricovero.PrezzoRicovero;

            await _db.SaveChangesAsync();

            return Ok();
        }
    }
}
