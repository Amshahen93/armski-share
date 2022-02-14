import { Component, OnInit } from '@angular/core';
import { calendar } from 'src/app/SVGs/calendar';
import { Router } from '@angular/router';
import { ArmeniaService } from './armenia.service';

@Component({
  selector: 'app-armenia',
  templateUrl: './armenia.component.html',
  styleUrls: ['./armenia.component.scss']
})
export class ArmeniaComponent implements OnInit {
  blogs: any;
  calendar!: string;
  constructor(private router: Router, private armeniaService: ArmeniaService) { }

  ngOnInit(): void {
    this.calendar = calendar;
    this.blogs = this.armeniaService.blodsList;
  }

  onReadMore(id: string) {
    this.router.navigate(['armenia', 'blog', id]);
  }
}
