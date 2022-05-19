import {Gender} from './enums/Gender'
import {Popularity} from './enums/Popularity'
import {NameLength} from './enums/NameLength'

export interface Name {
    id: number;
    name: string;
    gender: Gender;
    popularity: Popularity;
    nameLength: NameLength;
  }
  
  export const names: Name[] = [
    {
      id: 1,
      name: "Laith",
      gender: Gender.BOY,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 2,
      name: "Jake",
      gender: Gender.BOY,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
    {
      id: 3,
      name: "Lamelo",
      gender: Gender.BOY,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 4,
      name: "Abraham",
      gender: Gender.BOY,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.LONG,
    },
    {
      id: 5,
      name: "Bartholomew",
      gender: Gender.BOY,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.LONG,
    },
    {
      id: 6,
      name: "Noah",
      gender: Gender.BOY,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
    {
      id: 7,
      name: "Benjamin",
      gender: Gender.BOY,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.LONG,
    },
    {
      id: 8,
      name: "William",
      gender: Gender.BOY,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.LONG,
    },
    {
      id: 9,
      name: "Lucus",
      gender: Gender.BOY,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
    {
      id: 10,
      name: "Harrison",
      gender: Gender.BOY,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.LONG,
    },
    {
      id: 11,
      name: "Selma",
      gender: Gender.BOY,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 12,
      name: "Asher",
      gender: Gender.BOY,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 13,
      name: "Tucker",
      gender: Gender.BOY,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
  
    {
      id: 14,
      name: "Arya",
      gender: Gender.GIRL,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 15,
      name: "Olivia",
      gender: Gender.GIRL,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
    {
      id: 16,
      name: "Fay",
      gender: Gender.GIRL,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 17,
      name: "Brooklyn",
      gender: Gender.GIRL,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.LONG,
    },
    {
      id: 18,
      name: "Genevieve",
      gender: Gender.GIRL,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.LONG,
    },
    {
      id: 19,
      name: "Zoe",
      gender: Gender.GIRL,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
    {
      id: 20,
      name: "Valentina",
      gender: Gender.GIRL,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.LONG,
    },
    {
      id: 21,
      name: "Josephine",
      gender: Gender.GIRL,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.LONG,
    },
    {
      id: 22,
      name: "Maya",
      gender: Gender.GIRL,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
    {
      id: 23,
      name: "Everleigh",
      gender: Gender.GIRL,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.LONG,
    },
    {
      id: 24,
      name: "Poppy",
      gender: Gender.GIRL,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 25,
      name: "Maia",
      gender: Gender.GIRL,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 26,
      name: "Ivy",
      gender: Gender.GIRL,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
  
    {
      id: 27,
      name: "Jude",
      gender: Gender.UNISEX,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 28,
      name: "Adrian",
      gender: Gender.UNISEX,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
    {
      id: 29,
      name: "Sunny",
      gender: Gender.UNISEX,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.SHORT,
    },
    {
      id: 30,
      name: "Channing",
      gender: Gender.UNISEX,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.LONG,
    },
    {
      id: 31,
      name: "Tennessee",
      gender: Gender.UNISEX,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.LONG,
    },
    {
      id: 32,
      name: "Dallas",
      gender: Gender.UNISEX,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
  
    {
      id: 33,
      name: "Zephyr",
      gender: Gender.UNISEX,
      popularity: Popularity.UNIQUE,
      nameLength: NameLength.LONG,
    },
  
    {
      id: 34,
      name: "Teri",
      gender: Gender.UNISEX,
      popularity: Popularity.TRENDY,
      nameLength: NameLength.SHORT,
    },
  ];