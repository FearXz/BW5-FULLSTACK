using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BACK_END_CLINICA.Models
{
    public class ProdottiVenduti
    {
        [Key]
        public int IdProdottoVenduto { get; set; }

        [Required]
        [ForeignKey("Vendita")]
        public int IdVendita { get; set; }

        [Required]
        [ForeignKey("Prodotto")]
        public int IdProdotto { get; set; }

        [Required]
        public int QuantitaVenduta { get; set; } = 1;

        // Navigation property

        public virtual Vendita Vendita { get; set; }
        public virtual Prodotto Prodotto { get; set; }
    }
}
