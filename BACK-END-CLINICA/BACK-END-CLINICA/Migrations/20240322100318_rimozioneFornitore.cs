using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BACK_END_CLINICA.Migrations
{
    /// <inheritdoc />
    public partial class rimozioneFornitore : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prodotti_Fornitori_IdFornitore",
                table: "Prodotti");

            migrationBuilder.DropTable(
                name: "Fornitori");

            migrationBuilder.DropIndex(
                name: "IX_Prodotti_IdFornitore",
                table: "Prodotti");

            migrationBuilder.DropColumn(
                name: "IdFornitore",
                table: "Prodotti");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdFornitore",
                table: "Prodotti",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Fornitori",
                columns: table => new
                {
                    IdFornitore = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmailFornitore = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IndirizzoFornitore = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NomeFornitore = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TelefonoFornitore = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fornitori", x => x.IdFornitore);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Prodotti_IdFornitore",
                table: "Prodotti",
                column: "IdFornitore");

            migrationBuilder.AddForeignKey(
                name: "FK_Prodotti_Fornitori_IdFornitore",
                table: "Prodotti",
                column: "IdFornitore",
                principalTable: "Fornitori",
                principalColumn: "IdFornitore",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
