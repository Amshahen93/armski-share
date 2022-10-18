import { Pipe, PipeTransform } from '@angular/core';
import { MenuButton, Submenu } from '../models/menuButton';

@Pipe({
  name: 'activeMenu',
  pure: false
})
export class ActiveMenuPipe implements PipeTransform {
  private _rout = location.pathname;
  transform(value: MenuButton, date: Date, submenu?: Submenu): string {
    this._rout = location.pathname;
    if (submenu) {
      const status = this._checkSubmenu(submenu);
      if (status) {
        return status
      }
    } else if (value.rout) {
      const rout = value.rout?.rout.join('/') || '';
      if (rout && this._rout.includes(rout)) {
        return 'active'
      }
    } else if (value.submenu?.length) {
      for (let submenu of value.submenu) {
        const status = this._checkSubmenu(submenu);
        if (status) {
          return status
        }
      } 
    }
    return '';
  }

  private _checkSubmenu(submenu: Submenu): string {
    const rout = submenu?.rout?.rout.join('/') || '';
    if (rout && this._rout.includes(rout)) {
      return 'active'
    }
    return ''
  }

}
