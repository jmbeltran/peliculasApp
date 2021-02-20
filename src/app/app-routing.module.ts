import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasListComponent } from './component/peliculas-list/peliculas-list.component';
import { SeriesListComponent } from './component/series-list/series-list.component';
import { PrincipalComponent } from './component/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path:'seriesList', component: SeriesListComponent },
  { path:'peliculasList', component: PeliculasListComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
