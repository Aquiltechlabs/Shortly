import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute,NavigationEnd} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UrlcheckService } from '../common/services/urlcheck.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchform: FormGroup;
  fullurl:any=[];
  shorturl :any=[];
  constructor(private urlcheck : UrlcheckService,private formBuilder: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    const   urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    this.searchform = this.formBuilder.group({
      "url": ['', [Validators.required, Validators.pattern(urlRegex)]]
    });
  }
  get f(){
    return this.searchform.controls;
  }

  copyMessage(val: string,event){
    event.srcElement.classList.add("btnCopied");
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  check(){
    let logindata =  this.searchform.value;
    this.fullurl.push(logindata.url);
    console.log('logindata',logindata.url);
    this.urlcheck.Urlshort(logindata.url).subscribe((data: {}) => {
      console.log('data',data['ok']);
      if(data['ok'] === true){
        this.shorturl.push(data['result'].short_link);
        console.log('this.urlcheck0',this.fullurl,'this.shorturl', this.shorturl);
      }else{
      }
    })

    }
}
