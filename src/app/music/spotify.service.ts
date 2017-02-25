import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class SpotifyService {
  apiUrl="https://api.spotify.com/v1";
  params:string;
  constructor(private _http:Http) { 

  }
  query(url:string,parameter:string){
    
    return this._http.get(`${this.apiUrl}${url}${parameter}`).delay(1000)
        .map(res=>res.json());
  }
  search(query:string,type:string){
    return this.query("/search?",[`q=${query}`,`type=${type}`,`limit=50`].join(`&`));
  }

}
