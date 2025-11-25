# BTG Vaccination Card System

---

## 📘 Overview
A RESTful system for managing vaccination records.  
It allows registering people, vaccines, and vaccination entries, as well as viewing and deleting vaccination cards.

This project was developed for a [technical interview](docs/CartãodeVacinação.md) at **BTG Empresas** using **.NET 8**, **SQLite**, **EF Core**, **TypeScript**, **Vite**, and **TailwindCSS**.

The UI design was created using **Figma AI + Figma**, following the **BTG visual language** for layout, spacing, typography, and color structure.

---
##⚠️ ACCESS CREDENTIALS
To access the system, use the following credentials:

Username: administrator

Password: 123

---

##🧰 tech-stack

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


## 🚀 Quick-Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager
- .Net 10

### Clone the Repository

```bash
git clone https://github.com/Phepyn1/BTG
```
```bash
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
cd VaccineFront
npm install
npm run dev
```
---

## ✅ Features

### **Core**
- Create a person  
- Create a vaccine  
- Create a vaccination record  
- Delete a person (cascade deletion: card + vaccinations)  
- Validate vaccination/dose data  
- Retrieve full vaccination card  
- Delete a vaccination entry  

### **Architecture & API**
- RESTful JSON API  
- Clean structure: Controller → Service → Repository → Database  
- Input/output DTOs  
- EF Core entity configuration  
- Database migrations  
- Route namespace under `/api/*`  


### **Frontend**
- Axios API communication  
- Person management page  
- Vaccine management page  
- Vaccination management page  
- BTG-styled UI design  

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
 
---

##📂 Folder Structure

```
BTG/
 ├── VaccineBackend/
 │   └── BTG.Backend/
 │       ├── Controllers/
 │       ├── Services/
 │       ├── Repositories/
 │       ├── Entities/
 │       ├── Dtos/
 │       ├── Exception/
 │       ├── Utils/
 │       ├── Migrations/
 │       └── Program.cs
 └── VaccineFront/
     ├── src/
     │   ├── pages/
     │   ├── components/
     │   ├── routes/
     │   ├── services/
     │   ├── Utils/
     │   └── styles/
     └── index.html
```

---

## 📋 Implementation Plan:

- Add a page to create, edit, and remove doses.

- Implement a business rule in the backend to control the maximum number of doses per vaccine.

- Create a user registration page.

- Create a `User` table in the backend.

- Implement authentication: password hashing, login, validation, and JWT issuance.
