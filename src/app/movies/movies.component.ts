import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies = [
    {
      Naziv: 'Top Gun: Maverick',
      Godina: '2022',
      Zanr: 'Akacija',
      Trajanje: '2h',
      Rating: '5',
      Opis: 'Kroz film se definitivno osjeća nostalgija za vremenima kada su snimani ovakvi filmovi, a sada je jedan takav naslov došao uz sve što nudi moderno kreiranje filmova.',
      Poster: 'assets/slikafilma.jpg',
      Prikaz: true,
    },
    {
      Naziv: 'Top Gun: Maverick',
      Godina: '2022',
      Zanr: 'Akacija',
      Trajanje: '2h',
      Rating: '5',
      Opis: 'Kroz film se definitivno osjeća nostalgija za vremenima kada su snimani ovakvi filmovi, a sada je jedan takav naslov došao uz sve što nudi moderno kreiranje filmova.',
      Poster: 'assets/slikafilma.jpg',
    },
  ];
  showOpis: boolean = false;

  toggleOpis() {
    this.showOpis = !this.showOpis;
  }
}
