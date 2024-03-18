using System.ComponentModel.DataAnnotations;

namespace BACK_END_CLINICA.Models
{
    public class Proprietario
    {
        [Key]
        public int IdProprietario { get; set; }

        [Required]
        public string NomeProprietario { get; set; }

        [Required]
        public string CognomeProprietario { get; set; }

        [Required]
        public string CodiceFiscale { get; set; }

        [Required]
        public string NumeroTelefono { get; set; }

        // Navigation property
        public virtual ICollection<Animale> Animali { get; set; }
        public virtual ICollection<Vendita> Vendite { get; set; }
    }

}
