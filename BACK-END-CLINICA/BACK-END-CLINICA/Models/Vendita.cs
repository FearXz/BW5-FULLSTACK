using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BACK_END_CLINICA.Models
{
    public class Vendita
    {
        [Key]
        public int IdVendita { get; set; }

        [Required]
        [ForeignKey("Proprietario")]
        public int IdProprietario { get; set; }

        [Required]
        public DateTime DataVendita { get; set; }
        public string? NumeroRicetta { get; set; }

        // Navigation property

        public virtual Proprietario Proprietario { get; set; }
        public virtual ICollection<ProdottiVenduti> ProdottiVenduti { get; set; }
    }
}
