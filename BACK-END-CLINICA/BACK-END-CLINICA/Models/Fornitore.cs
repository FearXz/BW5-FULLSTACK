using System.ComponentModel.DataAnnotations;

namespace BACK_END_CLINICA.Models
{
    public class Fornitore
    {
        [Key]
        public int IdFornitore { get; set; }

        [Required]
        public string NomeFornitore { get; set; }

        [Required]
        public string IndirizzoFornitore { get; set; }

        [Required]
        public string TelefonoFornitore { get; set; }

        [Required]
        public string EmailFornitore { get; set; }

        // navigation property
        public virtual ICollection<Prodotto> Prodotti { get; set; }
    }
}
