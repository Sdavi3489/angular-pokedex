import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData


  constructor(
    private service: PokemonService
  ) {

    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types: []
    }
  }

  ngOnInit(): void {
    this.getPokemon('bulbasaur')
  }

  getPokemon(searchName: string) {
    // Consumindo um serviço com getPokemon
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name.toUpperCase(),
            sprites: res.sprites,
            types: res.types
          }

        },
        error: (err) => console.log('not found 404')
      }
    )

  }

}
