
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Claim } from '../Claim';

import { claimService } from '../claim.service';
import { Contract } from '../Contract';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  constructor(private service : claimService) { }
  claim : Claim = new Claim() ;
  contract : Contract = new Contract();
  claimList!: Claim[]; 
  editClaim!: Claim;
  new! : Claim;
  message : any ;
  idClaim!: number;


  ngOnInit(): void {

    this.service.getClaims().subscribe(res=>{this.claimList=res;console.log(res);
    console.log('works')})
  }

  public updateClaim(claim : Claim){
    this.contract.numContract= this.editClaim.contract.numContract
    this.new = new Claim();
    this.new.numClaim = this.editClaim.numClaim
    this.new.accidentDate = this.editClaim.accidentDate
    this.new.creationDate= this.editClaim.creationDate
    this.new.status = this.editClaim.status
    this.new.contract= this.editClaim.contract 
    this.service.addClaim(this.new).subscribe((data)=>this.message=data);



  }

  public deleteClaim(idClaim : number){
    
      let resp = this.service.deleteClaim(idClaim);
        resp.subscribe((data)=>this.claim=data);
      
    }
  }



