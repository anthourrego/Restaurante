import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'productos', component: ProductosComponent },
  { path: 'pedidos', component: PedidosComponent},
  { path: 'calculadora', component: CalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
