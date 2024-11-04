import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component'; // Página pós-login
import { AuthGuard } from './guards/auth.guard'; // Guard para proteger a rota
import { ProdutorComponent } from './components/produtor/produtor.component';
import { ApiarioComponent } from './components/apiario/apiario.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { ColmeiaComponent } from './components/colmeia/colmeia.component';

// , canActivate: [AuthGuard]
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'produtor/:id', component: ProdutorComponent },
  {path: 'apiario/:id', component: ApiarioComponent},
  {path: 'relatorio/:id', component: RelatorioComponent},
  {path: 'colmeia/:id', component: ColmeiaComponent},
   // Rota protegida
  { path: '**', redirectTo: 'login' } // Redireciona qualquer rota desconhecida para login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
