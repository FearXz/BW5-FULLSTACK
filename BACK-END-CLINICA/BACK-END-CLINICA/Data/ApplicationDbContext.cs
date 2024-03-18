using Microsoft.EntityFrameworkCore;

namespace BACK_END_CLINICA.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        // Aggiungi le tabelle con DbSet




    }
}
