using BACK_END_CLINICA.Data;
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
    }
}
