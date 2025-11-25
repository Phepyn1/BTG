using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BTG.Backend.Migrations
{
    /// <inheritdoc />
    public partial class ModelUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vaccination_Dose_DoseId",
                table: "Vaccination");

            migrationBuilder.DropIndex(
                name: "IX_Vaccination_PersonId",
                table: "Vaccination");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccination_PersonId_VaccineId_DoseId",
                table: "Vaccination",
                columns: new[] { "PersonId", "VaccineId", "DoseId" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Vaccination_Dose_DoseId",
                table: "Vaccination",
                column: "DoseId",
                principalTable: "Dose",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vaccination_Dose_DoseId",
                table: "Vaccination");

            migrationBuilder.DropIndex(
                name: "IX_Vaccination_PersonId_VaccineId_DoseId",
                table: "Vaccination");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccination_PersonId",
                table: "Vaccination",
                column: "PersonId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vaccination_Dose_DoseId",
                table: "Vaccination",
                column: "DoseId",
                principalTable: "Dose",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
