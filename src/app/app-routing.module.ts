import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecentComponent } from './recent/recent.component';
import { WatchingComponent } from './watching/watching.component';

const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"recent", component: RecentComponent},
  { path:"watching", component:WatchingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
