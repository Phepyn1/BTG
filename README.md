# BTG Vaccination Card System

A RESTful system for managing vaccination records.  
It allows registering people, vaccines, and vaccination entries, as well as viewing and deleting vaccination cards.

This project was developed for a technical interview at **BTG Empresas** using **.NET 8**, **SQLite**, **EF Core**, **TypeScript**, **Vite**, and **TailwindCSS**.

The UI design was created using **Figma AI + Figma**, following the **BTG visual language** for layout, spacing, typography, and color structure.

---

## 🚀 Tech Stack

### Backend
- C# (.NET 8)
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
- [ ] Remove a person (cascade deletion: card + vaccinations) 
- [ ] Register a vaccination  
- [ ] Validate dose data  
- [ ] List full vaccination card of a person  
- [ ] Delete a vaccination record  

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
- [ ] Vaccination management page  
- [x] UI matching BTG-inspired visual identity  

### **Bonus**
- [ ] Authentication support (bonus requirement)  
- [ ] Additional validations and edge-case handling  
- [ ] Extended test coverage
