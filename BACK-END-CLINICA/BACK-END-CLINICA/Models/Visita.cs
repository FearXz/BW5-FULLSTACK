using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BACK_END_CLINICA.Models
{
    public class Visita
    {
        [Key]
        public int IdVisita { get; set; }

        [Required]
        [ForeignKey("Animale")]
        public int IdAnimale { get; set; }

        [Required]
        public DateTime DataVisita { get; set; }

        [Required]
        public string EsameObiettivo { get; set; }

        [Required]
        public string DescrizioneCura { get; set; }

        [Required]
        public double CostoVisita { get; set; }

        // Navigation property
        public virtual Animale Animale { get; set; }
    }
}
