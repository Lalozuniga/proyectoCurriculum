import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'infinitescroll',
    loadChildren: () => import('./infinitescroll/infinitescroll.module').then( m => m.InfinitescrollPageModule)
  },
  {
    path: 'admin-formulario',
    loadChildren: () => import('./admin-formulario/admin-formulario.module').then( m => m.AdminFormularioPageModule)
  },
  {
    path: 'admin-respuestas',
    loadChildren: () => import('./admin-respuestas/admin-respuestas.module').then( m => m.AdminRespuestasPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'conway',
    loadChildren: () => import('./conway/conway.module').then( m => m.ConwayPageModule)
  },
  {
    path: 'algoritmos-simples',
    loadChildren: () => import('./algoritmos-simples/algoritmos-simples.module').then( m => m.AlgoritmosSimplesPageModule)
  },
  {
    path: 'api-weather',
    loadChildren: () => import('./api-weather/api-weather.module').then( m => m.ApiWeatherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
