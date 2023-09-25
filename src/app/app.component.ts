import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DropwondService } from './dropwond.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { FileHandle } from './drag.directive';

interface Country {
  shortName: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form20';

  table:any;

  countries!:Country[]
  states!: string[];
  cities!: string[];

  form!: FormGroup;

  country = new FormControl(null, [Validators.required]);
  state = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  city = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);

  
  // country = new FormControl(null, [Validators.required]);


  constructor(private service : DropwondService, private fb: FormBuilder){
    this.countries = this.service.getCountries();
       console.log("Countries",this.countries);
       console.log(this.country);
       
    this.form = new FormGroup({
      country: this.country,
      state: this.state,
      city: this.city,
    });
  }

  // allState=this.fb.group({
  //   countrys:this.fb.control('', [Validators.required])
  // })
  ngOnInit(): void {
    this.country.valueChanges.subscribe((country) => {
      console.log(this.country);
      let a:any = this.country.value;
      // console.log(a.split(/\s+/));
      // let b:any=a.split(" ");
      // console.log(b.split(" "));
      
      this.state.reset();
      this.state.disable();
      if (country) {
        this.states = this.service.getStatesByCountry(country);
        this.state.enable();
      }
    });

    this.state.valueChanges.subscribe((state) => {
      this.city.reset();
      this.city.disable();
      if (state) {
        this.cities = this.service.getCitiesByState(this.country.value, state);
        this.city.enable();
      }
    });
    
    // this.service.get().subscribe(res=>{
    //   // console.log(...res);
    //   // this.service.postServic(res).subscribe(r=>{
    //   //   console.log(r);
        
    //   // })
      
    // })

  //   this.service.getservice().subscribe(res=>{
  //     console.log(res.length);
  //     // console.log();
  //     for(let a =0;a<=res.length;a++){
  //       let b:any = new Set(res)
  //         console.log(b[a].country);
        
  //     }
  //   })


  
  
  }

  allfun(){
    // console.log(this.allState.value.countrys);
    console.log(this.form.value);
    
    this.service.postServic(this.form.value).subscribe(res=>{
      console.log(res);
      
    })
  }


  setvalu(){
    this.service.get().subscribe(res=>{
        this.table=res
    })
    this.service.getID(1).subscribe(res=>{
      // console.log(res);
      // this.form.setValue({
      //   country: res.country,
      // state: res.state,
      // city: res.city,
      // })
      

      console.log(res.country);
      // let a = this.service.getCountries();
      // let b = a.filter((country:any) => country.shortName === res.country);
      // console.log(b);
      
    })


  }


  // files: FileHandle[] = [];
  files:any

  filesDropped(files:any): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }
  
}
