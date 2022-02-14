import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/Data/blogs';
import { calendar } from 'src/app/SVGs/calendar';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog!: any;
  calendar!: string;
  constructor() { }

  ngOnInit(): void {
    this.getIdFromLocation();
    this.calendar = calendar;
  }

  getIdFromLocation() {
    const urlArray = location.pathname.split('/');
    const id = +urlArray[urlArray.length - 1];
    this.blog = Blogs[id - 1];
    console.log(this.blog);
  }

}
