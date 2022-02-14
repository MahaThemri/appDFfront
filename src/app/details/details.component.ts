
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Claim } from '../Claim';

import { claimService } from '../claim.service';
import { Contract } from '../Contract';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Output() requested = new EventEmitter<Number>();

  
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
  idC! : number;
  imageFile : any;
  numClaim : number =0;
  file!: File;
  image_URL:any;
  event:any;
  name:string="";
  reactiveForm : any= FormGroup;
  form : any;
  id! : number ;
  addedClaim! : Claim;
  num! : number ;

 


  title = 'File-Upload-Save';
  selectedFile!:File;
  currentFileUpload: File=new File([],"");
  progress: { percentage: number } = { percentage: 0 };
  changeImage = false;

  cardImageBase64: string="";

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

    open2(content:any,id : number) {
      console.log(id)
      this.num=id;
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
    

    changedImage(fileInput: any) {
      this.selectedFile = fileInput.target.files[0];
      console.log("nowwwwww")
      const reader = new FileReader();
        
      reader.onload=(e:any)=>{
        const image = new Image();
        image.src= e.target.result;
        image.onload= rs=>{
          const imgBase64Path = e.target.result;
                            this.cardImageBase64 = imgBase64Path;
        }
      };
      reader.readAsDataURL(fileInput.target.files[0]);
     
    }


    upload() {
  
      console.log("1111111")
      console.log()
      console.log(this.selectedFile)
      
      //this.currentFileUpload = this.image_URL
    
    this.service.addPhotos(this.selectedFile,this.num).subscribe(event => {
     console.log("2222222")
       }
      );
    }


    public gettingId(id : number ){
      this.service.num = id ;

    }
    
  }



