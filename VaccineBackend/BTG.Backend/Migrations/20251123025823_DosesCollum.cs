using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BTG.Backend.Migrations
{
    /// <inheritdoc />
    public partial class DosesCollum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Doses",
                table: "Vaccine",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Doses",
                table: "Vaccine");
        }
    }
}
