using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BTG.Backend.Migrations
{
    /// <inheritdoc />
    public partial class AddVaccinationNavigationProperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Vaccination_DoseId",
                table: "Vaccination",
                column: "DoseId");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccination_PersonId",
                table: "Vaccination",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccination_VaccineId",
                table: "Vaccination",
                column: "VaccineId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vaccination_Dose_DoseId",
                table: "Vaccination",
                column: "DoseId",
                principalTable: "Dose",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vaccination_Vaccine_VaccineId",
                table: "Vaccination",
                column: "VaccineId",
                principalTable: "Vaccine",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vaccination_person_PersonId",
                table: "Vaccination",
                column: "PersonId",
                principalTable: "person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vaccination_Dose_DoseId",
                table: "Vaccination");

            migrationBuilder.DropForeignKey(
                name: "FK_Vaccination_Vaccine_VaccineId",
                table: "Vaccination");

            migrationBuilder.DropForeignKey(
                name: "FK_Vaccination_person_PersonId",
                table: "Vaccination");

            migrationBuilder.DropIndex(
                name: "IX_Vaccination_DoseId",
                table: "Vaccination");

            migrationBuilder.DropIndex(
                name: "IX_Vaccination_PersonId",
                table: "Vaccination");

            migrationBuilder.DropIndex(
                name: "IX_Vaccination_VaccineId",
                table: "Vaccination");
        }
    }
}
