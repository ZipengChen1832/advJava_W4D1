import { Component, OnInit } from '@angular/core';
import {CLASSES, Classes} from './classList';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classes = CLASSES;

  classToDisplay?: Classes;

  constructor() { }

  ngOnInit(): void {
  }

  display(aClass: Classes):void {
    this.classToDisplay = aClass;
  }

}
