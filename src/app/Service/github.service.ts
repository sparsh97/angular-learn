import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private  url="https://api.github.com/users/";
  constructor(private http:HttpClient) { }

  getUserDetails = (userName: string)=>{
    return this.http.get(this.url+userName);
  }

  getUserRepos = (repoUrl:string)=>{
    return this.http.get(repoUrl);
  }
}
