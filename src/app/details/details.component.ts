
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Claim } from '../Claim';

import { claimService } from '../claim.service';
import { Contract } from '../Contract';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  constructor(private service : claimService,private modalService: NgbModal) { }
  claim : Claim = new Claim() ;
  contract : Contract = new Contract();
  claimList!: Claim[]; 
  editClaim:any;
  new! : Claim;
  message : any ;
  idClaim!: number;
  closeResult: string = '';
  numContract :number=0;

  ngOnInit(): void {

    this.service.getClaims().subscribe(res=>{this.claimList=res;
    console.log('works')})
  }

  public updateClaim(claim : Claim){
    
    console.log("calling the update func")
    this.new = new Claim();
    this.new.numClaim =claim.numClaim
    this.new.accidentDate =claim.accidentDate
    this.new.creationDate=claim.creationDate
    this.new.status =claim.status;
    this.contract = new Contract();
    this.new.contract=this.editClaim.contract
    this.contract.numContract=this.editClaim.contract.numContract
     
    console.log(this.new)
    this.service.addClaim(this.new).subscribe((data)=>{this.message=data
    console.log(this.new)});
    this.service.getClaims().subscribe(res=>{this.claimList=res});


  }

  public deleteClaim(idClaim : number){
      let resp = this.service.deleteClaim(idClaim);
        resp.subscribe((data)=>this.claim=data);
      
    }



    open(content:any,claim:Claim) {
      console.log(claim)
      this.editClaim=claim;
      this.editClaim.contract=claim.contract;
      console.log(this.editClaim.contract)
      this.editClaim.contract.numContract=claim.contract.numContract;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } 
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    
  }



