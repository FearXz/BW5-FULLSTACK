using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BACK_END_CLINICA.Migrations
{
    /// <inheritdoc />
    public partial class firstTry : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fornitori",
                columns: table => new
                {
                    IdFornitore = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeFornitore = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IndirizzoFornitore = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TelefonoFornitore = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmailFornitore = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fornitori", x => x.IdFornitore);
                });

            migrationBuilder.CreateTable(
                name: "Proprietari",
                columns: table => new
                {
                    IdProprietario = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeProprietario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CognomeProprietario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CodiceFiscale = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumeroTelefono = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proprietari", x => x.IdProprietario);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    IdUser = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cognome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.IdUser);
                });

            migrationBuilder.CreateTable(
                name: "Prodotti",
                columns: table => new
                {
                    IdProdotto = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdFornitore = table.Column<int>(type: "int", nullable: false),
                    NomeProdotto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DescrizioneProdotto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TipoProdotto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrezzoProdotto = table.Column<double>(type: "float", nullable: false),
                    NArmadio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NCassetto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuantitaProdotto = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prodotti", x => x.IdProdotto);
                    table.ForeignKey(
                        name: "FK_Prodotti_Fornitori_IdFornitore",
                        column: x => x.IdFornitore,
                        principalTable: "Fornitori",
                        principalColumn: "IdFornitore",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Animali",
                columns: table => new
                {
                    IdAnimale = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdProprietario = table.Column<int>(type: "int", nullable: false),
                    NomeAnimale = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataNascita = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DataRegistrazione = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SpecieAnimale = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ColoreAnimale = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Microchip = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Animali", x => x.IdAnimale);
                    table.ForeignKey(
                        name: "FK_Animali_Proprietari_IdProprietario",
                        column: x => x.IdProprietario,
                        principalTable: "Proprietari",
                        principalColumn: "IdProprietario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vendite",
                columns: table => new
                {
                    IdVendita = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdProprietario = table.Column<int>(type: "int", nullable: false),
                    DataVendita = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NumeroRicetta = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vendite", x => x.IdVendita);
                    table.ForeignKey(
                        name: "FK_Vendite_Proprietari_IdProprietario",
                        column: x => x.IdProprietario,
                        principalTable: "Proprietari",
                        principalColumn: "IdProprietario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Ricoveri",
                columns: table => new
                {
                    IdRicovero = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdAnimale = table.Column<int>(type: "int", nullable: false),
                    DataInizioRicovero = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FotoAnimale = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrezzoRicovero = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ricoveri", x => x.IdRicovero);
                    table.ForeignKey(
                        name: "FK_Ricoveri_Animali_IdAnimale",
                        column: x => x.IdAnimale,
                        principalTable: "Animali",
                        principalColumn: "IdAnimale",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Visite",
                columns: table => new
                {
                    IdVisita = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdAnimale = table.Column<int>(type: "int", nullable: false),
                    DataVisita = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EsameObiettivo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DescrizioneCura = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CostoVisita = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Visite", x => x.IdVisita);
                    table.ForeignKey(
                        name: "FK_Visite_Animali_IdAnimale",
                        column: x => x.IdAnimale,
                        principalTable: "Animali",
                        principalColumn: "IdAnimale",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProdottiVenduti",
                columns: table => new
                {
                    IdProdottoVenduto = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdVendita = table.Column<int>(type: "int", nullable: false),
                    IdProdotto = table.Column<int>(type: "int", nullable: false),
                    QuantitaVenduta = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProdottiVenduti", x => x.IdProdottoVenduto);
                    table.ForeignKey(
                        name: "FK_ProdottiVenduti_Prodotti_IdProdotto",
                        column: x => x.IdProdotto,
                        principalTable: "Prodotti",
                        principalColumn: "IdProdotto",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProdottiVenduti_Vendite_IdVendita",
                        column: x => x.IdVendita,
                        principalTable: "Vendite",
                        principalColumn: "IdVendita",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Animali_IdProprietario",
                table: "Animali",
                column: "IdProprietario");

            migrationBuilder.CreateIndex(
                name: "IX_Prodotti_IdFornitore",
                table: "Prodotti",
                column: "IdFornitore");

            migrationBuilder.CreateIndex(
                name: "IX_ProdottiVenduti_IdProdotto",
                table: "ProdottiVenduti",
                column: "IdProdotto");

            migrationBuilder.CreateIndex(
                name: "IX_ProdottiVenduti_IdVendita",
                table: "ProdottiVenduti",
                column: "IdVendita");

            migrationBuilder.CreateIndex(
                name: "IX_Ricoveri_IdAnimale",
                table: "Ricoveri",
                column: "IdAnimale");

            migrationBuilder.CreateIndex(
                name: "IX_Vendite_IdProprietario",
                table: "Vendite",
                column: "IdProprietario");

            migrationBuilder.CreateIndex(
                name: "IX_Visite_IdAnimale",
                table: "Visite",
                column: "IdAnimale");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProdottiVenduti");

            migrationBuilder.DropTable(
                name: "Ricoveri");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Visite");

            migrationBuilder.DropTable(
                name: "Prodotti");

            migrationBuilder.DropTable(
                name: "Vendite");

            migrationBuilder.DropTable(
                name: "Animali");

            migrationBuilder.DropTable(
                name: "Fornitori");

            migrationBuilder.DropTable(
                name: "Proprietari");
        }
    }
}
