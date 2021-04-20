import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'storefront-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y route',
      redirecTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirecTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirecTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirecTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid - Rows',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll',
      redirecTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input - Forms',
      redirecTo: '/input'
    },
    {
      icon: 'list',
      name: 'listas - Slidind',
      redirecTo: '/list'
    },
    {
      icon: 'reorder-four-outline',
      name: 'listas -Reorder',
      redirecTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirecTo: '/loading'
    },

  ];

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}
