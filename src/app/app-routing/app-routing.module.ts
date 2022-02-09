import { LeftSidebarComponent } from './../components/dashboard/left-sidebar/left-sidebar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from '../components/user/create-user/create-user.component';

const routes: Routes = [
    {path:'dashboard',component:LeftSidebarComponent},
    // {
    //     path: 'user', 
       
    //     loadChildren: () => import('../components/user/user.module').then(m => m.UserModule)
    //   },
// {
// path: '',
// component: CreateUserComponent,
// },

];

@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }