﻿// <auto-generated />
using System;
using BACK_END_CLINICA.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BACK_END_CLINICA.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("BACK_END_CLINICA.Models.Animale", b =>
                {
                    b.Property<int>("IdAnimale")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdAnimale"));

                    b.Property<string>("ColoreAnimale")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DataNascita")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DataRegistrazione")
                        .HasColumnType("datetime2");

                    b.Property<int>("IdProprietario")
                        .HasColumnType("int");

                    b.Property<string>("Microchip")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomeAnimale")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SpecieAnimale")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdAnimale");

                    b.HasIndex("IdProprietario");

                    b.ToTable("Animali");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.ProdottiVenduti", b =>
                {
                    b.Property<int>("IdProdottoVenduto")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdProdottoVenduto"));

                    b.Property<int>("IdProdotto")
                        .HasColumnType("int");

                    b.Property<int>("IdVendita")
                        .HasColumnType("int");

                    b.Property<int>("QuantitaVenduta")
                        .HasColumnType("int");

                    b.HasKey("IdProdottoVenduto");

                    b.HasIndex("IdProdotto");

                    b.HasIndex("IdVendita");

                    b.ToTable("ProdottiVenduti");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Prodotto", b =>
                {
                    b.Property<int>("IdProdotto")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdProdotto"));

                    b.Property<string>("DescrizioneProdotto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NArmadio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NCassetto")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomeProdotto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("PrezzoProdotto")
                        .HasColumnType("float");

                    b.Property<int?>("QuantitaProdotto")
                        .HasColumnType("int");

                    b.Property<string>("TipoProdotto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdProdotto");

                    b.ToTable("Prodotti");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Proprietario", b =>
                {
                    b.Property<int>("IdProprietario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdProprietario"));

                    b.Property<string>("CodiceFiscale")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CognomeProprietario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomeProprietario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NumeroTelefono")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdProprietario");

                    b.ToTable("Proprietari");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Ricovero", b =>
                {
                    b.Property<int>("IdRicovero")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdRicovero"));

                    b.Property<DateTime>("DataInizioRicovero")
                        .HasColumnType("datetime2");

                    b.Property<string>("FotoAnimale")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdAnimale")
                        .HasColumnType("int");

                    b.Property<double>("PrezzoRicovero")
                        .HasColumnType("float");

                    b.HasKey("IdRicovero");

                    b.HasIndex("IdAnimale");

                    b.ToTable("Ricoveri");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.User", b =>
                {
                    b.Property<int>("IdUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdUser"));

                    b.Property<string>("Cognome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdUser");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Vendita", b =>
                {
                    b.Property<int>("IdVendita")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdVendita"));

                    b.Property<DateTime>("DataVendita")
                        .HasColumnType("datetime2");

                    b.Property<int>("IdProprietario")
                        .HasColumnType("int");

                    b.Property<string>("NumeroRicetta")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdVendita");

                    b.HasIndex("IdProprietario");

                    b.ToTable("Vendite");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Visita", b =>
                {
                    b.Property<int>("IdVisita")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdVisita"));

                    b.Property<double>("CostoVisita")
                        .HasColumnType("float");

                    b.Property<DateTime>("DataVisita")
                        .HasColumnType("datetime2");

                    b.Property<string>("DescrizioneCura")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EsameObiettivo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdAnimale")
                        .HasColumnType("int");

                    b.HasKey("IdVisita");

                    b.HasIndex("IdAnimale");

                    b.ToTable("Visite");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Animale", b =>
                {
                    b.HasOne("BACK_END_CLINICA.Models.Proprietario", "Proprietario")
                        .WithMany("Animali")
                        .HasForeignKey("IdProprietario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Proprietario");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.ProdottiVenduti", b =>
                {
                    b.HasOne("BACK_END_CLINICA.Models.Prodotto", "Prodotto")
                        .WithMany("ProdottiVenduti")
                        .HasForeignKey("IdProdotto")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BACK_END_CLINICA.Models.Vendita", "Vendita")
                        .WithMany("ProdottiVenduti")
                        .HasForeignKey("IdVendita")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Prodotto");

                    b.Navigation("Vendita");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Ricovero", b =>
                {
                    b.HasOne("BACK_END_CLINICA.Models.Animale", "Animale")
                        .WithMany("Ricoveri")
                        .HasForeignKey("IdAnimale")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Animale");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Vendita", b =>
                {
                    b.HasOne("BACK_END_CLINICA.Models.Proprietario", "Proprietario")
                        .WithMany("Vendite")
                        .HasForeignKey("IdProprietario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Proprietario");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Visita", b =>
                {
                    b.HasOne("BACK_END_CLINICA.Models.Animale", "Animale")
                        .WithMany("Visite")
                        .HasForeignKey("IdAnimale")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Animale");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Animale", b =>
                {
                    b.Navigation("Ricoveri");

                    b.Navigation("Visite");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Prodotto", b =>
                {
                    b.Navigation("ProdottiVenduti");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Proprietario", b =>
                {
                    b.Navigation("Animali");

                    b.Navigation("Vendite");
                });

            modelBuilder.Entity("BACK_END_CLINICA.Models.Vendita", b =>
                {
                    b.Navigation("ProdottiVenduti");
                });
#pragma warning restore 612, 618
        }
    }
}
