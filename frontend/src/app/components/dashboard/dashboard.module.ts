import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../material.module';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { UserAuthModule } from '../user/user-auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ToolsComponent } from './tools/tools.component';
// import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductEditorFormComponent } from './product-editor-form/product-editor-form.component';
import { McEditorComponent } from './mc-editor/mc-editor.component';
import { McEditorFormComponent } from './mc-editor-form/mc-editor-form.component';
import { McsModule } from '../mcs/mcs.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    DashboardRoutingModule,
    UserAuthModule,
    SharedModule,
    McsModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardSidenavComponent,
    ToolsComponent,
    // ProductCreateComponent,
    ProductEditorComponent,
    ProductEditorFormComponent,
    McEditorComponent,
    McEditorFormComponent
  ]
})
export class DashboardModule { }
