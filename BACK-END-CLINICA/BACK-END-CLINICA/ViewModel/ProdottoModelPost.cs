namespace BACK_END_CLINICA.ViewModel
{
    public class ProdottoModelPost
    {
        public int IdProdotto { get; set; }

        public int IdFornitore { get; set; }

        public string NomeProdotto { get; set; }

        public string DescrizioneProdotto { get; set; }

        public string TipoProdotto { get; set; }

        public double PrezzoProdotto { get; set; }
        public string? NArmadio { get; set; }
        public string? NCassetto { get; set; }
        public int? QuantitaProdotto { get; set; }
    }
}
