using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BACK_END_CLINICA.Models
{
    public class Animale
    {
        [Key]
        public int IdAnimale { get; set; }

        [Required]
        [ForeignKey("Proprietario")]
        public int IdProprietario { get; set; }

        [Required]
        public string NomeAnimale { get; set; }

        [Required]
        public DateTime DataNascita { get; set; }

        [Required]
        public DateTime DataRegistrazione { get; set; }

        [Required]
        public string SpecieAnimale { get; set; }

        [Required]
        public string ColoreAnimale { get; set; }
        public string? Microchip { get; set; }

        // Navigation property
        public virtual Proprietario Proprietario { get; set; }
        public virtual ICollection<Visita> Visite { get; set; }
        public virtual ICollection<Ricovero> Ricoveri { get; set; }
    }
}
