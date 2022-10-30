import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PokemonService from '../pokemon.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon: any = {};

  constructor(
    private _pokemonService: PokemonService,
    private _activatedRoute: ActivatedRoute,
    private _navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (response: any) => {
        this._pokemonService.getPokemonById(response.id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.pokemon = response;
          },
          error: console.log
        });
      },
      error: console.log
    })
  }

  back() {
    this._navigationService.back();
  }

}
