import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuButton, Submenu } from 'src/app/models/menuButton';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isBrowser!: boolean;
  menuBur: MenuButton [] = [{
    name: 'Home',
    rout: {rout: ['home']},
    active: false
  }, {
    name: 'Gallery',
    rout: {rout: ['gallery']},
    active: false
  }, {
    name: 'Adventure',
    rout: {rout: ['tours', 'adventure']},
    active: false,
    submenuIndex: null,
    submenu: [{
      name: 'Mountain biking tours',
      rout: {rout: ['mountain-biking']}
    }, {
      name: 'Trekking tours',
      rout: {
        rout: ['trekking']
      }
    }, {
      name: 'Climbing tours',
      rout: {rout: ['climbing']}
    }, {
      name: 'Hiking tours',
      rout: {rout: ['tours', 'adventure', 'hiking']},
      disabled: true
    }, {
      name: 'Ski mountaineering tours',
      rout: {rout: ['ski-mountaineering']}
    }, {
      name: 'Cycling tours',
      rout: {rout: ['tours', 'adventure', 'cycling']},
      disabled: true
    }]
  }, {
    name: 'Cultural tours',
    rout: {rout: ['cultural-tours']},
    submenuIndex: null,
    submenu: [{
      name: 'Discovery tours Armenia',
      rout: {rout: ['cultural-tours', 'discovery-Armenia']},
      disabled: true
    }, {
      name: 'Discovery tours Georgia',
      rout: {rout: ['cultural-tours', 'discovery-Georgia']},
      disabled: true
    }, {
      name: 'Discovery tours Arcakh ',
      rout: {rout: ['cultural-tours', 'discovery-Arcakh']},
      disabled: true
    }]
  },  {
    name: 'Armenia',
    rout: {rout: ['armenia']},
    active: false
  }
  // {
  //   name: 'ASMA',
  //   rout: {rout: ['asma']},
  //   active: false
  // }
];

  activeSubmenu = false;

  @Output() contact = new EventEmitter<Date>()


  constructor(
    private router: Router, 
    // @Inject(PLATFORM_ID) platformId
  ) {
    // this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.subscribeOnRout();
  }

  onClickBur(button: MenuButton) {
    if (button.rout) {
      this.router.navigate(button.rout.rout);
    }
  }

  subscribeOnRout() {
    if (this.isBrowser) {
      this.decideRouter(location.pathname);
    }
    this.router.events.subscribe((router) => {
      if (router instanceof NavigationEnd) {
        this.decideRouter(router.url);

      }
    });
  }

  openSubmenu(index: number) {
    console.log(index);
  }

  decideRouter(url: string) {
    const routArray = url.split('/');
    routArray.shift();
    const convertUrl = url.slice(1, url.length);
    for (const button of this.menuBur) {
      const currentUrl = button.rout?.rout.join('/');
      if (convertUrl ===  currentUrl || currentUrl && convertUrl.includes(currentUrl)) {
        button.active = true;
        if (button.submenu) {
          let isSubmenue = false;
          for (let j = 0; j < button.submenu.length; j++) {
            const submenuUrl = button.submenu[j].rout.rout.join('/');
            if (submenuUrl === convertUrl || convertUrl.includes(submenuUrl)) {
              button.submenuIndex = j;
              isSubmenue = true;
              break;
            }
          }
          if (!isSubmenue) {
            button.submenuIndex = null;
          }
          break;
        }
      } else {
        button.active = false;
        if (button.submenuIndex) {
          button.submenuIndex = null;
        }
      }
    }
  }

  onSubmenus(index1: number, index2: number) {
    if (this.menuBur[index1].submenu) {
      this.router.navigate((this.menuBur[index1].submenu as Submenu [])[index2].rout.rout);
    }
  }
  
  onContact() {
    this.contact.emit(new Date())
  }
}
