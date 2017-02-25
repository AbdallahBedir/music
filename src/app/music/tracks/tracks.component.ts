import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  id:string;
  trackUrl:string = "https://api.spotify.com/v1/tracks/";
  track:any;
  constructor(private _spotifyService:SpotifyService,private Ar:ActivatedRoute) { 
      this.Ar.params.subscribe(params => this.id=params['id']);
      this._spotifyService.query("/tracks/",this.id).subscribe(
          result => {
              this.renderTrack(result);
            },
          error => console.log(`somethig went wrong`),
          () => console.log(`completed succssefuly`)
      );
  }

  ngOnInit() {

  }
  renderTrack(res:any){
    this.track = null;
    if(res){
      this.track=res;
    }
  }

}
