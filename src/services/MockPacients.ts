import type { Patient } from "../types/Patient";

export const MockPacients: Patient[] = [
  {
    id: "1",
    firstName: "Juan",
    lastName: "Pérez",
    dni: "30123456",
    birthDate: new Date("1990-05-14"),
    phone: 3514567890,
    email: "juan.perez@email.com"
  },
  {
    id: "2",
    firstName: "María",
    lastName: "González",
    dni: "28987654",
    birthDate: new Date("1985-11-02"),
    phone: 3516543210,
    email: "maria.gonzalez@email.com"
  },
  {
    id: "3",
    firstName: "Lucas",
    lastName: "Fernández",
    dni: "33456789",
    birthDate: new Date("1998-03-21"),
    phone: 3511122334,
    email: "lucas.fernandez@email.com"
  },
  {
    id: "4",
    firstName: "Sofía",
    lastName: "Martínez",
    dni: "31222333",
    birthDate: new Date("1993-07-09"),
    phone: 3519988776,
    email: "sofia.martinez@email.com"
  },
  {
    id: "5",
    firstName: "Tomás",
    lastName: "Rodríguez",
    dni: "35666777",
    birthDate: new Date("2001-01-30"),
    phone: 3514433221,
    email: "tomas.rodriguez@email.com"
  }
];