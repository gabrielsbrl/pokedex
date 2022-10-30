import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PokemonService from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input()
  public pokemon: any = {
    name: '',
    url: ''
  };

  constructor(
    private _pokemonService: PokemonService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const pokemonId: number = this._getPokemonIdFromURL(this.pokemon.url);
    this._getPokemonInformation(pokemonId);
    console.log(this.pokemon);
  }

  private _getPokemonIdFromURL(url: string) {
    const splittedURL = url.split('/');
    const pokemonId = splittedURL[splittedURL.length - 2];
    return parseInt(pokemonId);
  }

  private _getPokemonInformation(pokemonId: number) {
    this._pokemonService.getPokemonById(pokemonId)
      .subscribe({
        next: (response: any) => this.pokemon = Object.assign(this.pokemon, {}, response),
        error: console.log,
      });
  }

  public navigatePokemonDetails() {
    this._router.navigate(['/pokemon-details', this.pokemon.id]);
  }

}
