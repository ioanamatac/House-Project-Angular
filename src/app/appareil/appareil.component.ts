  import { Component, Input, OnInit } from '@angular/core';
  import {AppareilService} from '../services/appareil.service';


  @Component({
    selector: 'app-appareil',
    templateUrl: './appareil.component.html',
    styleUrls: ['./appareil.component.css']
  })
  export class AppareilComponent implements OnInit {

    @Input() appareilName: string;
    @Input() appareilStatus: string;
    @Input() index: number;
    @Input() id: number;

    constructor(private appareilService: AppareilService) {}
    lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });
      ngOnInit(): void {
      }
      getStatus() {
        return this.appareilStatus;
      }
      getColor() {
        if (this.appareilStatus === 'allumé'){
          return 'green'; }
        else if (this.appareilStatus === 'eteint'){
          return  'salmon'; }
      }

      onSwitchOne(){
      this.appareilService.switchOnOne(this.index);
      }
      onSwitchOff(){
      this.appareilService.switchOffOne(this.index);
      }

  }
