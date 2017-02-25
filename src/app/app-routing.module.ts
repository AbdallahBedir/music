import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {TracksComponent} from './music/tracks/tracks.component';
import {SearchComponent} from './music/search/search.component';


const routes: Routes = [
    {path:'' , redirectTo:'music',pathMatch:'full'},
    {path:'music',loadChildren:'app/music/music.module#MusicModule'}
    
];
export const appRoutingProviders: any[] = [

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers: [appRoutingProviders]
})
export class AppRoutingModule { }
