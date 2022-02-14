import { Component, OnInit } from '@angular/core';
import { claimService } from '../claim.service';
import { Photos } from '../Photos';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.css']
})
export class Details2Component implements OnInit {

  photoList : any;
  cardImageBase64: string="";
  id : any ;
  base64Data : any;
  retrievedImage :any;
  photo : Photos = new Photos();
  closeResult: string = '';
  new! :Photos;
  message : any;
  idPhotos! : number;
  editPhoto! : Photos;

  title = 'File-Upload-Save';
  selectedFile!:File;
  currentFileUpload: File=new File([],"");
  progress: { percentage: number } = { percentage: 0 };
  changeImage = false;
  theID! : number ;

 

  constructor(private service : claimService,private modalService: NgbModal) { }

  ngOnInit(): void {
  this.theID = this.service.num;
  console.log(this.theID)
   this.service.getPhotos(this.theID).subscribe(res=>{this.photoList=res;})
  }
  public deletePhoto(idPhotos : number){
    let resp = this.service.deletePhoto(idPhotos);
      resp.subscribe((data)=>this.photo=data);
    
  }

  /*public updatePhoto(photo: Photos){
    this.new = new Photos();
    this.new.idPhotos= photo.idPhotos;
    this.new.name=photo.name;
    this.new.data=photo.data;
    this.service.addPhotos(this.new).subscribe((data)=>{this.message=data
      console.log(this.new)});

  }*/


  open(content:any,photo:Photos) {
    this.editPhoto=photo;
      this.editPhoto.idPhotos=photo.idPhotos;
      console.log(this.editPhoto);
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
    this.selectedFile = fileInput.target.files[0];}

    upload(id:number) {
      console.log(this.editPhoto.idPhotos);
    this.service.updatePhoto(this.selectedFile,this.editPhoto.idPhotos).subscribe(event => {
     console.log("this.selectedFile")
       }
      );
    }

}
function input() {
  throw new Error('Function not implemented.');
}

