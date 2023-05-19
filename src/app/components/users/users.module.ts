import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from "../../shared/shared.module";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TimeControlComponent } from './time-control/time-control.component';
import { UbicationDetailComponent } from './ubication-detail/ubication-detail.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
    declarations: [
        UsersListComponent,
        RegisterUserComponent,
        TimeControlComponent,
        UbicationDetailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        NgxDatatableModule,
        UsersRoutingModule
    ]
})
export class UsersModule { }
