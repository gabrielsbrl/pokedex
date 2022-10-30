import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardListComponent } from './pokemon-card-list/pokemon-card-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonCardListComponent},
  {
    path: 'pokemon-details/:id', component: PokemonDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
