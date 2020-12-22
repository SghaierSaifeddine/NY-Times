import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { WorldNewsHomeComponent } from './features/world-new-feature/components/world-news-home/world-news-home.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
          path: '',
          component: CoreComponent
      },
      {
          path: 'home',
          component: CoreComponent
      }
  ]
  }, {
    path: 'world',
    component: WorldNewsHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
