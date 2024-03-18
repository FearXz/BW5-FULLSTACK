using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BACK_END_CLINICA.Models
{
    public class Prodotto
    {
        [Key]
        public int IdProdotto { get; set; }

        [Required]
        [ForeignKey("Fornitore")]
        public int IdFornitore { get; set; }

        [Required]
        public string NomeProdotto { get; set; }

        [Required]
        public string DescrizioneProdotto { get; set; }

        [Required]
        public string TipoProdotto { get; set; }

        [Required]
        public double PrezzoProdotto { get; set; }
        public string? NArmadio { get; set; }
        public string? NCassetto { get; set; }
        public int? QuantitaProdotto { get; set; }

        // navigation property
        public virtual Fornitore Fornitore { get; set; }
        public virtual ICollection<ProdottiVenduti> ProdottiVenduti { get; set; }
        //MEGA KEBAB
    }
}
