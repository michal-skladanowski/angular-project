import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieViewComponent } from './movie-view/movie-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { TvShowViewComponent } from './tv-show-view/tv-show-view.component';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { TvShowsViewComponent } from './tv-shows-view/tv-shows-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesViewComponent },
  { path: 'tv-shows', component: TvShowsViewComponent },
  { path: 'movie/:id', component: MovieViewComponent },
  { path: 'tv/:id', component: TvShowViewComponent },
  { path: 'person/:id', component: PersonViewComponent },
  { path: 'search', component: SearchViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
