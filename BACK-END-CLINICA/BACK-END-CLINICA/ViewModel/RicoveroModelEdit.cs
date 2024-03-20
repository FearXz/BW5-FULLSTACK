namespace BACK_END_CLINICA.ViewModel
{
    public class RicoveroModelEdit
    {
        public int IdRicovero { get; set; }

        public string FotoAnimale { get; set; } = "default.jpg";

        public int IdAnimale { get; set; }

        public DateTime DataInizioRicovero { get; set; }

        public double PrezzoRicovero { get; set; }
    }
}
