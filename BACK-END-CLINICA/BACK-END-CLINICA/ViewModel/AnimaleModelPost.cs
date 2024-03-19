namespace BACK_END_CLINICA.ViewModel
{
    public class AnimaleModelPost
    {

        public string NomeAnimale { get; set; }
        public int IdProprietario { get; set; }

        public DateTime DataNascita { get; set; }

        // public DateTime DataRegistrazione { get; set; }

        public string SpecieAnimale { get; set; }

        public string ColoreAnimale { get; set; }
        public string? Microchip { get; set; }
    }
}
