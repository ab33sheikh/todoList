import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
view=[];
  constructor(private data:DataService) { 
    this.view=this.data.dones;
  }
onRemoveDone(i){
  this.data.remmovedone(i);
}
  ngOnInit() {
  }

}
