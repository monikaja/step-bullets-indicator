import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public formData: FormGroup;
  public selectedIndex: number;
  public bulletListSize: number;
  public showNumbers: boolean = true;
  public bulletsList: string[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.formData = this.fb.group({
      'bulletListSize': new FormControl({
        value: '3',
        disabled: false
      }),
      'selectedIndex': new FormControl({
        value: '1',
        disabled: false
      }),
      'showNumbers': new FormControl({
        value: true,
        disabled: false
      })
    });
    this.updateTool();
  }

  public updateTool() {
    this.bulletListSize = +(this.formData.get("bulletListSize").value);
    this.selectedIndex = (+(this.formData.get("selectedIndex").value));
    this.showNumbers = !!this.formData.get("showNumbers").value;

    this.bulletsList = [];
    for (let i = 0; this.bulletListSize > i; i++) {
      this.bulletsList.push("Lorem Ipsum " + (i + 1));
    }
  }

}
