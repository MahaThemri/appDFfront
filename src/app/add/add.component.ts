import { Component, OnInit } from '@angular/core';
import { Claim } from '../Claim';
import { Photos } from '../Photos';
import { Contract } from '../Contract';
import { claimService } from '../claim.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  new: Claim = new Claim();
  claim!: Claim;
  newPhoto : Photos = new Photos();
  message:any;
  creationDate:any;
  accidentDate:any;
  status:any;
  numContract:any;
  contract : any;
  claimList!: Claim[]; 
  editClaim!: Claim;
  numClaim:any;

  constructor(private service : claimService) { }

  ngOnInit(): void {
  }
  public addingClaim(){
    this.contract = new Contract();
    this.contract.numContract = this.numContract;
    this.new= new Claim();
    console.log(this.new)
    this.new.creationDate= this.creationDate;
    this.new.accidentDate= this.accidentDate;
    this.new.contract= this.contract;
    this.new.status= this.status;
    this.service.addClaim(this.new).subscribe(res=>this.message=res)
  }


  


}
