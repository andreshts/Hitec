import { NgModule } from '@angular/core';
import { FooterComponent } from './layout-components/footer/footer.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { LoaderComponent } from './layout-components/loader/loader.component';
import { PageHeaderComponent } from './layout-components/page-header/page-header.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { TabToTopComponent } from './layout-components/tab-to-top/tab-to-top.component';
import { ContentLayoutComponent } from './layout-components/layout/content-layout/content-layout.component';
import { ErrorLayoutComponent } from './layout-components/layout/error-layout/error-layout.component';


import { SwitcherLayoutComponent } from './layout-components/layout/switcher-layout/switcher-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ColorPickerModule } from 'ngx-color-picker';
import { RightSidebarComponent } from './layout-components/right-sidebar/right-sidebar.component';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { CommonModule } from '@angular/common';
import { FullscreenDirective } from './directives/fullscreen-toggle.directive';
import { ToggleThemeDirective } from './directives/toggle-theme.directive';
import { SidemenuToggleDirective } from './directives/sidemenuToggle';
import { SwitcherComponent } from './layout-components/switcher/switcher.component';
import { HeaderSwitcherComponent } from './layout-components/header-switcher/header-switcher.component';

import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    PageHeaderComponent,
    SidebarComponent,
    SwitcherLayoutComponent,
    TabToTopComponent,
    ContentLayoutComponent,
    ErrorLayoutComponent,


    SwitcherComponent,
    RightSidebarComponent,
    FullscreenDirective,
    ToggleThemeDirective,
    HoverEffectSidebarDirective,
    SidemenuToggleDirective,
    HeaderSwitcherComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ColorPickerModule,
    NgScrollbarModule

  ],
  exports: [
    PageHeaderComponent,
    TabToTopComponent,

    ContentLayoutComponent,
    ErrorLayoutComponent,
    LoaderComponent,
    SidebarComponent,

    ToggleThemeDirective,
    SidemenuToggleDirective,
    SwitcherComponent
  ],
  providers:[

    AuthService
  ]


})
export class SharedModule { }
