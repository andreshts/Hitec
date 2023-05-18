import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  Menusub?: boolean;
  target?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search: boolean = false;

  // Language
  public language: boolean = false;

  // Mega Menu
  public megaMenu: boolean = false;
  public levelMenu: boolean = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      headTitle: 'PRINCIPAL',
    },
    {
      title: 'Dashboard',
      icon: 'home',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [{ path: '/dashboard/inicio', title: 'Inicio', type: 'link' }],
    },

    {
      title: 'Clientes',
      icon: 'credit-card',
      active: false,
      type: 'sub',
      Menusub: true,
      children: [
        {
          path: '/cliente/lista-clientes',
          title: 'Lista de Clientes',
          type: 'link',
        },
        {
          path: '/cliente/lista-equipos',
          title: 'Lista de Equipos',
          type: 'link',
        },
      ],
    },
    {
      title: 'Reportes',
      icon: 'file-text',
      active: false,
      type: 'sub',
      Menusub: true,
      children: [
        {
          path: '/reportes/reporte-mantenimiento',
          title: 'Reporte de Mantenimiento',
          type: 'link',
        },
        {
          path: '/reportes/reporte-averia',
          title: 'Reporte de avería',
          type: 'link',
        },
        {
          path: '/reportes/comprobante-ejecucion',
          title: 'Comprobante ejecución',
          type: 'link',
        },
      ],
    },
    {
      title: 'Usuarios',
      icon: 'user-plus',
      active: false,
      type: 'sub',
      Menusub: true,
      children: [
        {
          path: '/usuarios/lista-usuarios',
          title: 'Lista de Usuarios',
          type: 'link',
        },

      ],
    },
    {
      title: 'Control Vehiculos',
      icon: 'book-open',
      active: false,
      type: 'sub',
      Menusub: true,
      children: [
        {
          path: '/control/control-kilometraje',
          title: 'Control Kilometraje',
          type: 'link',
        },
      ],
    },
  ];

  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
