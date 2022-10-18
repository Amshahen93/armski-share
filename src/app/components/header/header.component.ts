import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from 'src/app/constants/menu-items';
import { MenuButton, Submenu } from 'src/app/models/menuButton';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuBur = MenuItems;
  public domain = environment.domain;
  date!: Date;
  @Output() contact = new EventEmitter<Date>()


  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  onClickBur(button: MenuButton) {
    if (button.rout) {
      this.router.navigate(button.rout.rout).then(_ => {
        this.date = new Date();
      });
    }
  }


  onSubmenus(index1: number, index2: number) {
    if (this.menuBur[index1].submenu) {
      this.router.navigate((this.menuBur[index1].submenu as Submenu [])[index2].rout.rout).then(_ => {
        this.date = new Date();
      });
    }
  }
  
  onContact() {
    this.contact.emit(new Date())
  }
}
