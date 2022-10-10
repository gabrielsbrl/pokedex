import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export default class PokemonService {

    constructor(private _httpClient: HttpClient) {}

    public getPokemonList(): Observable<any> {
        return this._httpClient.get(environment.pokemonApi + '/pokemon');
    }

    public getPokemonById(pokemonId: number): Observable<any> {
        return this._httpClient.get(environment.pokemonApi + '/pokemon/' + pokemonId);
    }
}