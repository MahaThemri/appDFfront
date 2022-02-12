import { Component, OnInit } from '@angular/core';
import { claimService } from '../claim.service';
import { Photos } from '../Photos';

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

  constructor(private service : claimService) { }

  ngOnInit(): void {
   this.service.getPhotos().subscribe(res=>{this.photoList=res;//console.log(res);

                
              /*  for (let i of this.photoList ){
                  this.base64Data = i.data;
                  console.log(this.base64Data)
                  this.retrievedImage  = 'data:image/png;base64,' + this.base64Data
                  console.log(this.retrievedImage)
                }*/
                /*this.base64Data = this.photoList.data;
                this.retrievedImage  = 'data:image/png;base64,/' + this.base64Data;*/
              

            
    
    //console.log(this.id);
   
   // reader.readAsDataURL(this.photoList.target.files[0]);
    
  })
  }

}
