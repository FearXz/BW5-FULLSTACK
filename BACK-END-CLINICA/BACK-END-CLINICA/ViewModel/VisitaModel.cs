using System.ComponentModel.DataAnnotations.Schema;

namespace BACK_END_CLINICA.ViewModel
{
    public class VisitaModel
    {
       
        
        public int IdVisita { get; set; }
        
        public int IdAnimale { get; set; }

     
        public DateTime DataVisita { get; set; }

   
        public string EsameObiettivo { get; set; }

      
        public string DescrizioneCura { get; set; }

        
        public double CostoVisita { get; set; }

    }
}
