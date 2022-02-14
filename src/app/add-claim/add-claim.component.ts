import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Claim } from '../Claim';
import { claimService } from '../claim.service';
import { Photos } from '../Photos';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {
  message:any;
  imageFile : any;
  numClaim : number =0;
  file!: File;
  image_URL:any;
  event:any;
  name:string="";
  reactiveForm : any= FormGroup;
  form : any;

 


  title = 'File-Upload-Save';
  selectedFile!:File;
  currentFileUpload: File=new File([],"");
  progress: { percentage: number } = { percentage: 0 };
  changeImage = false;

  cardImageBase64: string="";
  constructor(private service : claimService) { }

  ngOnInit(): void {
  }

    
    /*public addingPhoto(){
      

      this.service.addPhotos(this.file).subscribe((data)=>{this.message=data
      console.log(this.message)});
      console.log("nope")
}*/




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
/*upload() {
  
  console.log("1111111")
  console.log()
  console.log(this.selectedFile)
  
  //this.currentFileUpload = this.image_URL

this.service.addPhotos(this.selectedFile).subscribe(event => {
 console.log("2222222")
   }
  );
}*/

}

