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
    public class ProdottoController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public ProdottoController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET /animale/list
        [HttpGet("list")]
        public async Task<IActionResult> GetProdotti()
        {
            var prodotti = await _db
                .Prodotti.Select(p => new
                {
                    Prodotto = new
                    {
                        IdProdotto = p.IdProdotto,
                        IdFornitore = p.IdFornitore,
                        NomeProdotto = p.NomeProdotto,
                        DescrizioneProdotto = p.DescrizioneProdotto,
                        TipoProdotto = p.TipoProdotto,
                        PrezzoProdotto = p.PrezzoProdotto,
                        NArmadio = p.NArmadio,
                        NCassetto = p.NCassetto,
                        QuantitaProdotto = p.QuantitaProdotto,
                        Fornitore = new
                        {
                            IdFornitore = p.Fornitore.IdFornitore,
                            NomeFornitore = p.Fornitore.NomeFornitore,
                            IndirizzoFornitore = p.Fornitore.IndirizzoFornitore,
                            TelefonoFornitore = p.Fornitore.TelefonoFornitore,
                            EmailFornitore = p.Fornitore.EmailFornitore
                        }

                    }
                })
                .ToListAsync();

            return Ok(prodotti);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProdotto(int id)
        {
            var prodotto = await _db
                .Prodotti.Where(a => a.IdProdotto == id)
                .Select(p => new
                {
                    Prodotto = new
                    {
                        IdProdotto = p.IdProdotto,
                        IdFornitore = p.IdFornitore,
                        NomeProdotto = p.NomeProdotto,
                        DescrizioneProdotto = p.DescrizioneProdotto,
                        TipoProdotto = p.TipoProdotto,
                        PrezzoProdotto = p.PrezzoProdotto,
                        NArmadio = p.NArmadio,
                        NCassetto = p.NCassetto,
                        QuantitaProdotto = p.QuantitaProdotto,
                        Fornitore = new
                        {
                            IdFornitore = p.Fornitore.IdFornitore,
                            NomeFornitore = p.Fornitore.NomeFornitore,
                            IndirizzoFornitore = p.Fornitore.IndirizzoFornitore,
                            TelefonoFornitore = p.Fornitore.TelefonoFornitore,
                            EmailFornitore = p.Fornitore.EmailFornitore
                        }

                    }
                })
                .FirstOrDefaultAsync();

            return Ok(prodotto);
        }

        [HttpPost("edit/{id}")]
        public async Task<IActionResult> EditProdotto(int id, AnimaleModelPost animale)
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

        //[HttpGet("list/{idProprietario}")]
        //public async Task<IActionResult> GetAnimaliByProprietario(int idProprietario)
        //{
        //    var animali = await _db
        //        .Animali.Where(a => a.IdProprietario == idProprietario)
        //        .Select(p => new
        //        {
        //            Animale = new
        //            {
        //                Nome = p.NomeAnimale,
        //                Specie = p.SpecieAnimale,
        //                Proprietario = new
        //                {
        //                    Nome = p.Proprietario.NomeProprietario,
        //                    Cognome = p.Proprietario.CognomeProprietario
        //                }
        //            }
        //        })
        //        .ToListAsync();

        //    return Ok(animali);
        //}

        [HttpPost("addProdotto")]
        public async Task<IActionResult> AddProdotto(ProdottoModelPost prodotto)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            Prodotto newProdotto = new Prodotto
            {
                IdFornitore = prodotto.IdFornitore,
                NomeProdotto = prodotto.NomeProdotto,
                DescrizioneProdotto = prodotto.DescrizioneProdotto,
                TipoProdotto = prodotto.TipoProdotto,
                PrezzoProdotto = prodotto.PrezzoProdotto,
                NArmadio = prodotto.NArmadio,
                NCassetto = prodotto.NCassetto,
                QuantitaProdotto = prodotto.QuantitaProdotto

            };

            await _db.Prodotti.AddAsync(newProdotto);
            await _db.SaveChangesAsync();

            return Ok();
        }

        // PUT /prodotto/editprodotto
        [HttpPut("editProdotto")]
        public async Task<IActionResult> UpdateProdotto(ProdottoModelPost prodotto)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest();
            }

            var myProdotto = await _db.Prodotti.FindAsync(prodotto.IdProdotto);

            if (myProdotto == null)
            {
                return NotFound();
            }

            myProdotto.IdFornitore = prodotto.IdFornitore;
            myProdotto.NomeProdotto = prodotto.NomeProdotto;
            myProdotto.DescrizioneProdotto = prodotto.DescrizioneProdotto;
            myProdotto.TipoProdotto = prodotto.TipoProdotto;
            myProdotto.PrezzoProdotto = prodotto.PrezzoProdotto;
            myProdotto.NArmadio = prodotto.NArmadio;
            myProdotto.NCassetto = prodotto.NCassetto;
            myProdotto.QuantitaProdotto = prodotto.QuantitaProdotto;

            await _db.SaveChangesAsync();

            return Ok();
        }
    }
}
