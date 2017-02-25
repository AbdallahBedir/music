import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TracksComponent} from './tracks/tracks.component';
import {SearchComponent} from './search/search.component'; 

const routes: Routes = [

    {path:'' , redirectTo:'music/search',pathMatch:'full'},
    {path:'music/search' , component:SearchComponent},
    {path:'music/tracks/:id' , component:TracksComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MusicRoutingModule { }
