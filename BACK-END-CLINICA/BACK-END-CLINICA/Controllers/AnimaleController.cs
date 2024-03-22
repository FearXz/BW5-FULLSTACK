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
                        IdAnimale = p.IdAnimale,
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAnimale(int id)
        {
            var animale = await _db
                .Animali.Where(a => a.IdAnimale == id)
                .Select(p => new
                {
                    Animale = new
                    {
                        IdAnimale = p.IdAnimale,
                        Nome = p.NomeAnimale,
                        Specie = p.SpecieAnimale,
                        DataNascita = p.DataNascita,
                        ColoreAnimale = p.ColoreAnimale,
                        Microchip = p.Microchip,

                        Proprietario = new
                        {
                            IdProprietario = p.Proprietario.IdProprietario,
                            Nome = p.Proprietario.NomeProprietario,
                            Cognome = p.Proprietario.CognomeProprietario
                        },

                        Visite = p.Visite.Select(v => new
                        {
                            IdVisita = v.IdVisita,
                            DataVisita = v.DataVisita,
                            EsameObiettivo = v.EsameObiettivo,
                            DescrizioneCura = v.DescrizioneCura,
                            CostoVisita = v.CostoVisita
                        })


                    }
                })
                .FirstOrDefaultAsync();

            return Ok(animale);
        }

        [HttpPost("edit/{id}")]
        public async Task<IActionResult> EditAnimale(int id, AnimaleModelPost animale)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            var animaleToEdit = await _db.Animali.FirstOrDefaultAsync(a => a.IdAnimale == id);

            if (animaleToEdit == null)
            {
                return NotFound();
            }

            animaleToEdit.NomeAnimale = animale.NomeAnimale;
            animaleToEdit.IdProprietario = animale.IdProprietario;
            animaleToEdit.DataNascita = animale.DataNascita;
            animaleToEdit.SpecieAnimale = animale.SpecieAnimale;
            animaleToEdit.ColoreAnimale = animale.ColoreAnimale;
            animaleToEdit.Microchip = animale.Microchip;

            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("list/{idProprietario}")]
        public async Task<IActionResult> GetAnimaliByProprietario(int idProprietario)
        {
            var animali = await _db
                .Animali.Where(a => a.IdProprietario == idProprietario)
                .Select(p => new
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

        [HttpPost("addAnimale")]
        public async Task<IActionResult> AddAnimale(AnimaleModelPost animale)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            Animale newAnimal = new Animale
            {
                NomeAnimale = animale.NomeAnimale,
                IdProprietario = animale.IdProprietario,
                DataNascita = animale.DataNascita,
                DataRegistrazione = DateTime.Now,
                SpecieAnimale = animale.SpecieAnimale,
                ColoreAnimale = animale.ColoreAnimale,
                Microchip = animale.Microchip
            };

            await _db.Animali.AddAsync(newAnimal);
            await _db.SaveChangesAsync();

            return Ok();
        }

        // PUT /animale/update
        [HttpPut("editanimal")]
        public async Task<IActionResult> UpdateAnimale(AnimaleModelEdit animale)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            var myAnimal = await _db.Animali.FindAsync(animale.IdAnimale);

            if (myAnimal == null)
            {
                return NotFound();
            }

            //DateTime dataNascita = DateTime.ParseExact(
            //    animale.DataNascita,
            //    "yyyy-MM-dd",
            //    CultureInfo.InvariantCulture
            //);

            myAnimal.NomeAnimale = animale.NomeAnimale;
            myAnimal.IdProprietario = animale.IdProprietario;
            myAnimal.DataNascita = animale.DataNascita;
            myAnimal.SpecieAnimale = animale.SpecieAnimale;
            myAnimal.ColoreAnimale = animale.ColoreAnimale;
            myAnimal.Microchip = animale.Microchip;

            await _db.SaveChangesAsync();

            return Ok();
        }
    }
}
