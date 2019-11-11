import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const newLocal = 'soccer-events';
const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
