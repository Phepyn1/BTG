using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BTG.Backend.Migrations
{
    /// <inheritdoc />
    public partial class RenameUnicKeyToUnicID : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UnicKey",
                table: "person",
                newName: "UniqueID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UniqueID",
                table: "person",
                newName: "UnicKey");
        }
    }
}
