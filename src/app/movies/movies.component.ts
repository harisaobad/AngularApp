import { Component, OnInit } from '@angular/core';
import { IMovies } from './movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: IMovies[] = [
    {
      filmID: 1,
      Naziv: 'Top Gun: Maverick',
      Godina: '2022',
      Zanr: 'Akacija',
      Trajanje: 2,
      Rating: 5,
      Opis: 'Kroz film se definitivno osjeća nostalgija za vremenima kada su snimani ovakvi filmovi, a sada je jedan takav naslov došao uz sve što nudi moderno kreiranje filmova.',
      Poster: 'assets/slikafilma.jpg',
      Prikaz: true,
    },
    {
<<<<<<< HEAD
      filmID: 2,
      Naziv: 'Top Gun: Maverick',
      Godina: '2022',
      Zanr: 'Akacija',
      Trajanje: 2,
      Rating: 5,
      Opis: 'Kroz film se definitivno osjeća nostalgija za vremenima kada su snimani ovakvi filmovi, a sada je jedan takav naslov došao uz sve što nudi moderno kreiranje filmova.',
      Poster: 'assets/slikafilma.jpg',
      Prikaz: true,
    },
  ];

  ngOnInit(): void {
    console.log('PRIKAZ NAKON UCITAVANJA');
    this.toggleDescriptionMovie;
  }

  showOpis: boolean = false;

  toggleDescriptionMovie(id: number) {
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].filmID == id)
        this.movies[i].Prikaz = !this.movies[i].Prikaz;
    }
=======
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
>>>>>>> 8109cfeaad9ed6ccdd8fc64626e4ff14014fd6d0
  }
}
