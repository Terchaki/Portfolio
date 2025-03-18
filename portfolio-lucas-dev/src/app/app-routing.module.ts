import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: LayoutComponent,
    // children: [
    //   {
    //     path: 'boas-vindas',
    //     loadChildren: () =>
    //       import('./featu').then(
    //         (m) => m.BoasVindasModule
    //       ),
    //   },
    // ],
  },
  /** Rota Coringa */
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
