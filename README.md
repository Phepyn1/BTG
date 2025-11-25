# BTG Vaccination Card System

A RESTful system for managing vaccination records.  
It allows registering people, vaccines, and vaccination entries, as well as viewing and deleting vaccination cards.

This project was developed for a [technical interview](docs/CartãodeVacinação.md) at **BTG Empresas** using **.NET 8**, **SQLite**, **EF Core**, **TypeScript**, **Vite**, and **TailwindCSS**.

The UI design was created using **Figma AI + Figma**, following the **BTG visual language** for layout, spacing, typography, and color structure.

---
⚠️ ACCESS CREDENTIALS
To access the system, use the following credentials:

Username: administrator

Password: 123

---
## 🚀 Installation

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager
- .Net 10

### Clone the Repository

```bash
git clone https://github.com/Phepyn1/BTG
cd BTG
```

# Run backend (dev)
```bash

cd BTG
cd VaccineBackend/BTG.backend
dotnet restore
dotnet ef database update
dotnet run
```

# Run frontend (dev)
```bash
cd BTG
cd ../VaccineFront
npm install
npm run dev
```
### Backend
- C# (.NET 10)
- Entity Framework Core
- SQLite
- xUnit

### Frontend
- TypeScript
- Vite
- TailwindCSS

### Design
- Figma AI + Figma  
- Interface aligned with BTG's visual identity

---

## ✅ Features Checklist

### **Core Features**
- [x] Register a person   
- [x] Register a vaccine 
- [x] Remove a person (cascade deletion: card + vaccinations) 
- [x] Register a vaccination  
- [x] Validate dose data  
- [x] List full vaccination card of a person  
- [x] Delete a vaccination record  

### **API & Architecture**
- [x] RESTful API using JSON  
- [x] Clean structure: Controller → Service → Repository → Database  
- [x] DTOs for input/output  
- [x] Entity relationships mapped with EF Core  
- [x] Database migrations  
- [x] Consistent route structure under `/api/*`  

### **Frontend**
- [x] API communication with Axios  
- [x] Person management page  
- [x] Vaccine management page  
- [x] Vaccination management page  
- [x] UI matching BTG-inspired visual identity  

### **Bonus**
- [x] Authentication support (bonus requirement)  
- [x] Additional validations and edge-case handling  
- [x] Extended test coverage
