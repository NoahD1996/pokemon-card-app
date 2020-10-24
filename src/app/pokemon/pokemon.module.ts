import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHomeComponent } from './pokemon-home.component';
import { PokemonCardComponent } from './pokemon-card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [PokemonHomeComponent, PokemonCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class PokemonModule { }
