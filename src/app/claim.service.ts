import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from './Claim';
import { Contract } from './Contract';
import { Photos } from './Photos';


@Injectable({
    providedIn: 'root'
  })
export class claimService {
    public num! : number ;
    constructor(private http: HttpClient) {}
    

    public addClaim(claim : Claim)
    {let username ="user"
    let password ="Pass"
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) })
      return this.http.post("http://localhost:8888/addClaim",claim);
    }

    public addContract(contract : Contract)
    {
      return this.http.post("http://localhost:8888/addContract",contract);
    }

    public addPhotos(photos : File, id : number) :Observable<any>
    { const file : FormData= new FormData();
    
      file.append('file', photos);
      let username ="user"
    let password ="Pass"
      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
      return this.http.post("http://localhost:8888/upload/"+id,file,{headers});
    }

    public getClaims() : Observable<any>
    { let username ="user"
    let password ="Pass"
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get("http://localhost:8888/getClaims",{headers});
    }

    public getContracts():Observable<any>
    { 
      return this.http.get("http://localhost:8888/getContracts");
    }


    login(username:string,password:string){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get("http://localhost:8888/",{headers,responseType: 'text' as 'json'})
    }



    public getPhotos(id : number):Observable<any>
    {let username ="user"
    let password ="Pass"
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get("http://localhost:8888/getPhotos/"+id,{headers});
    }
  

    public updateClaim(claim:Claim) :Observable<any>{
      let username ="user"
    let password ="Pass"
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.put("http://localhost:8888/modifyClaim",claim,{headers});
    }

    public deleteClaim(id : number): Observable<any>{
      let username ="user"
      let password ="Pass"
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.delete("http://localhost:8888/deleteClaim/"+id,{headers});
    }
    public deletePhoto(id : number): Observable<any>{
      let username ="user"
      let password ="Pass"
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.delete("http://localhost:8888/deletePhotos/"+id,{headers});
    }

    public updatePhoto(photos : File,id : number): Observable<any>{
      const file : FormData= new FormData();
    
      file.append('file', photos);
      let username ="user"
      let password ="Pass"
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.put("http://localhost:8888/modifyPhotos/"+id,file,{headers});

    }

   
  }