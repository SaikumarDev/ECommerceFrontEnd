import { Component, OnInit } from '@angular/core';
import {Utils} from '../Utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLoggedIn=Utils.currentStatus();
  constructor() { }

  ngOnInit(): void {
    
  }

}
