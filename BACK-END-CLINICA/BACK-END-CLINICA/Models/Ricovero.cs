using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BACK_END_CLINICA.Models
{
    public class Ricovero
    {
        [Key]
        public int IdRicovero { get; set; }

        [Required]
        [ForeignKey("Animale")]
        public int IdAnimale { get; set; }

        [Required]
        public DateTime DataInizioRicovero { get; set; }

        [Required]
        public string FotoAnimale { get; set; } = "default.jpg";

        [Required]
        public double PrezzoRicovero { get; set; }

        // Navigation property
        public virtual Animale Animale { get; set; }
    }
}
