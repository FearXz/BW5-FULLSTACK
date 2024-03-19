using BACK_END_CLINICA.Data;
using BACK_END_CLINICA.Models;
using BACK_END_CLINICA.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BACK_END_CLINICA.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize(Roles = UserRole.ADMIN_MEDICO)]
    public class VisitaController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public VisitaController(ApplicationDbContext db)
        {
            _db = db;
        }

        //index
        // GET: /visita/list
        [HttpGet("list")]
        public async Task<IActionResult> GetVisite()
        {
           var visite = await _db
                .Visite.Select(v => new
                {
                    Visita = new
                    {
                        IdVisita = v.IdVisita,
                        IdAnimale = v.IdAnimale,
                        DataVisita = v.DataVisita,
                        EsameObiettivo = v.EsameObiettivo,
                        DescrizioneCura = v.DescrizioneCura,
                        CostoVisita = v.CostoVisita
                    }
                })
                .ToListAsync();

            return Ok(visite);
        }

        //add
        // POST /visita/addvisite
        [HttpPost("addvisite")]
        public async Task<IActionResult> AddVisita(VisitaModel visita)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            Visita newVisita = new Visita
            {
                IdAnimale = visita.IdAnimale,
                DataVisita = visita.DataVisita,
                EsameObiettivo = visita.EsameObiettivo,
                DescrizioneCura = visita.DescrizioneCura,
                CostoVisita = visita.CostoVisita

            };

            await _db.Visite.AddAsync(newVisita);
            await _db.SaveChangesAsync();

            return Ok();
        }

        //dettaglio visita
        // GET /visita/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVisita(int id)
        {
            var visita = await _db
               .Visite.Select(v => new
               {
                   Visita = new
                   {
                       IdVisita = v.IdVisita,
                       IdAnimale = v.IdAnimale,
                       DataVisita = v.DataVisita,
                       EsameObiettivo = v.EsameObiettivo,
                       DescrizioneCura = v.DescrizioneCura,
                       CostoVisita = v.CostoVisita
                   }
               })
               .FirstOrDefaultAsync();

            return Ok(visita);
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateVisita(VisitaModel visita)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            var vis = await _db.Visite.FindAsync(visita.IdVisita);

            if (vis == null)
            {
                return NotFound();
            }

            vis.IdAnimale = visita.IdAnimale;
            vis.DataVisita = visita.DataVisita;
            vis.EsameObiettivo = visita.EsameObiettivo;
            vis.DescrizioneCura = visita.DescrizioneCura;
            vis.CostoVisita = visita.CostoVisita;


            await _db.SaveChangesAsync();

            return Ok();
        }
    }
}
