import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDx9B5PH0827xvuQbCAkMVzCFxlIhBgfXmF92pREgmTaJ02zkwNOphsydQPUfgQ5M_nl5y5ZA47HRq9_yQ';
  urlSpotify:string = 'https://api.spotify.com/v1/';
  artists:any[] = [];

  constructor(public http: HttpClient) {
    console.log("Servicio de Spotify Activo");
   }

   private getToken() : HttpHeaders{
     return  new HttpHeaders({'Authorization': 'Bearer ' + this.token });
   }

   getArtista(id:string){
     let url = `${this.urlSpotify}artists/${id}`;
     let headers = this.getToken();

     return this.http.get(url,{headers});
   }

   getArtist(termino: string){
     let url = `${this.urlSpotify}search?q=${termino}&type=artist&market=US&limit=20`;
     let headers = this.getToken();

    return this.http.get(url,{headers}).pipe(
                    map((res:any) => {
                      this.artists = res.artists.items;
                      return this.artists;
                    }));
   }

   getTop(id:string){
     let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
     let headers = this.getToken();

    return this.http.get(url,{headers}).pipe(
                    map((res:any) => {
                      return  res.tracks;
                    }));

   }
}
