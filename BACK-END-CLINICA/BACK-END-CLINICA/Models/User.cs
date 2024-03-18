using System.ComponentModel.DataAnnotations;

namespace BACK_END_CLINICA.Models
{
    public class User
    {
        [Key]
        public int IdUser { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Cognome { get; set; }

        [Required]
        public string Role { get; set; }
    }
}
