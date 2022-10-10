import { Component, OnInit } from '@angular/core';
import PokemonService from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.scss']
})
export class PokemonCardListComponent implements OnInit {

  public pokemonList: Array<any> = [];

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this._getPokemonList();
  }

  private _getPokemonList() {
    this._pokemonService.getPokemonList()
      .subscribe({
        next: (response: any) => this.pokemonList = response.results,
        error: console.log
      });
  }

}
