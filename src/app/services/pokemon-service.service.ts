import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// é um biblioteca que o angular consome o tipo de um valor
import { environment } from 'src/environments/environment'
import { PokemonData } from 'src/app/models/pokemonData'


@Injectable({
  providedIn: 'root'
})
export class PokemonService{
  /*
    eu posso injetar um service em um componente
  */
 private baseURL:string = ""
 private pokeData: PokemonData | any

  constructor(
    private http:HttpClient
  ) {
    // pegando uma variavel como link da PokeAPI no arquivo enviroment
    this.baseURL = environment.pokeApi
  }

  /*
    pode conversar com os services ou até mesmo com o enviroments
  */

  getPokemon(pokemonName: string):Observable<PokemonData>{
    // posso utilizar a opção options para poder utilizar
    // outras opções como por exemplo mandar um token para o headers
    // no nosso caso deixamos sem dessa vez
    // o Observable está observanto o tipo PokemonData
    this.pokeData = this
                      .http
                      .get<PokemonData>
                      (`${this.baseURL}/${pokemonName}`)
    return this.pokeData;
    
  }
}
