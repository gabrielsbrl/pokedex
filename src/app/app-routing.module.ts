import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardListComponent } from './pokemon-card-list/pokemon-card-list.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonCardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
