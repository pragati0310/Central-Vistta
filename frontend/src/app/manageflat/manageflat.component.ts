import { Component } from '@angular/core';
import { FlatService } from '../services/flat.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../models/file-handle';
import { Flat } from '../models/flat';
@Component({
  selector: 'app-manageflat',
  imports: [FormsModule,CommonModule],
  templateUrl: './manageflat.component.html',
  styleUrl: './manageflat.component.css'
})
export class ManageflatComponent {
  flat: Flat = new Flat();
  submitted = false;
  errordata="";
constructor(private flatService: FlatService,private router:Router,private sanitizer:DomSanitizer) { }

  ngOnInit()
  {

  }
  newFlat(): void {
    this.submitted = false;
  this.flat = new Flat();
  }

  save() {
    
    const formData=this.prepareFormData(this.flat);
    this.flatService.createFlat(formData).subscribe(data => {
      if(data!=null)
      {
        alert("Flat added successfully")
      console.log(data)
      this.gotoList();
      }
    }, 
    error =>{ console.log(error);
      this.errordata=error;
     
    })
  }
  prepareFormData(flat:Flat):FormData{
    const formData=new FormData()
    formData.append(
      'flat',
      new Blob([JSON.stringify(flat)],{type:"application/json"})
    );
    for(var i=0;i<flat.flatmngImages.length;i++)
    {
      formData.append(
        'imageFile',
        flat.flatmngImages[i].file,
        flat.flatmngImages[i].file.name
      );
    }
    return formData;
  }
  removeImage(i:number)
  {
    this.flat.flatmngImages.splice(i,1)
  }
  onFileSelected(event:any){
    if(event.target.files)
    {
const file=event.target.files[0];
const fileHandle:FileHandle={
  file:file,
  url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)),
  name:file.name


}
this.flat.flatmngImages.push(fileHandle)
    }
  }
  onSubmit() {
    this.save();    
    this.submitted = true;
    console.log("inside on submit")
  }

  gotoList() {
    this.router.navigate(['/']);
  }

}




