import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['./footer-admin.component.css']
})
export class FooterAdminComponent implements OnInit {

  year: any;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
