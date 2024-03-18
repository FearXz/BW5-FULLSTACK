using BACK_END_CLINICA.Models;
using Microsoft.EntityFrameworkCore;

namespace BACK_END_CLINICA.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        // Aggiungi le tabelle con DbSet

        //clinica
        public DbSet<User> Users { get; set; }
        public DbSet<Proprietario> Proprietari { get; set; }
        public DbSet<Animale> Animali { get; set; }
        public DbSet<Visita> Visite { get; set; }
        public DbSet<Ricovero> Ricoveri { get; set; }

        //farmacia
        public DbSet<Prodotto> Prodotti { get; set; }
        public DbSet<Fornitore> Fornitori { get; set; }
        public DbSet<Vendita> Vendite { get; set; }
        public DbSet<ProdottiVenduti> ProdottiVenduti { get; set; }
    }
}
