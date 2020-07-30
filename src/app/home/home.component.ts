import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(120)
    ]),
    audio :new FormControl('',[
      Validators.required,
      Validators.max(10)
    ])

   });

   /*get age(){
    return this.age.form.get('age')
  } */

  get age(){
    return this.form.get('age')
  }

  get audio(){
    return this.form.get('audio')
  }
  

    constructor() { }
    
 min=18;
 max=120;

    ngOnInit() {
      
   }
  
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }
  

}
