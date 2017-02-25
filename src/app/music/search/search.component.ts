import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results:any[];
  q:string;
  loading:boolean=false;
  constructor(private _spotifyService:SpotifyService,
      private activatedRoute:ActivatedRoute,
      private _router:Router) {
        
      this.activatedRoute.queryParams.subscribe(
        QueryString => this.q=QueryString['q'] || '',
        error => console.log(`something went wrong`)
    );
   }
   searchInUrl(){
   
    if(!this.q)return;
    this.loading=true;
    //console.log(`loading now is ${this.loading}`);
    this._spotifyService.search(this.q,'track')
      .subscribe(
          data => {
              this.renderResults(data);
            },
          error => console.log(`something went wrong`),
          () => {
              console.log(`completed successfuly`);
              this.loading=false;
              //console.log(`loading now is ${this.loading}`);
            }
      );
    
    }
  ngOnInit() {
    this.searchInUrl();
  }
  searchByTrack(q:string){
    this.q=q;
    this._router.navigate(['music/search'],{queryParams:{q:q}})
    .then(v => this.searchInUrl());
        return false;
  }
  renderResults(res:any){
    this.results = null; 
    if(res && res.tracks && res.tracks.items){
        this.results = res.tracks.items;
    }
  }

}
