import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {SpotifyService} from './spotify.service';
import {MusicRoutingModule} from './music-routing.module';
import { TracksComponent } from './tracks/tracks.component';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  declarations: [SearchComponent, TracksComponent],
  providers:[],
  bootstrap:[],
  exports:[]
})
export class MusicModule { 
  static forRoot() {
    return {
      ngModule: MusicModule,
      providers: [ SpotifyService ]
    }
  }
}
