import { MenuButton } from "../models/menuButton";

export const MenuItems: MenuButton [] = [{
  name: 'Home',
  rout: {rout: ['home']},
}, {
  name: 'Gallery',
  rout: {rout: ['gallery']},
}, {
  name: 'Summer Tours',
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
    name: 'Cycling tours',
    rout: {rout: ['tours', 'adventure', 'cycling']},
    disabled: true
  }]
}, {
  name: 'Winter Tours',
  submenu: [{
    name: 'Ski mountaineering tours',
    rout: {rout: ['ski-mountaineering']}
  }]
},  {
  name: 'Armenia',
  rout: {rout: ['armenia-blog']},
}
// {
//   name: 'ASMA',
//   rout: {rout: ['asma']},
//   active: false
// }
];