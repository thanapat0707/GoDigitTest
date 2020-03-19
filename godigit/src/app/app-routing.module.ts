import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './page/main/main.component';
import {FindComponent} from './page/find/find.component';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  // {path: 'part', component: PartComponent},
  {path: 'find', component: FindComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ MainComponent,
                                  FindComponent,
                                  PageNotFoundComponent,
];
