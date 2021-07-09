/***  Generated file, do not change.  */
import { MenuComponent } from './menu/menu';
import { mainscreen_PhonePortrait } from '../pages/mainscreen/PhonePortrait/mainscreen';
import { mainscreen_Desktop } from '../pages/mainscreen/Desktop/mainscreen';
export class Screens {
  static declarations = [
    MenuComponent,
    mainscreen_PhonePortrait,
    mainscreen_Desktop
  ];
  static mapping = {
    'mainscreen': {
      PhonePortrait: mainscreen_PhonePortrait,
      Desktop: mainscreen_Desktop
    }
  }
}