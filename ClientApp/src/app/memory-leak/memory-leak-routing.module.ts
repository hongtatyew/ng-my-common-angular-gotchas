import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Solution1Component } from './solution1/solution1.component';
import { Solution2Component } from './solution2/solution2.component';
import { Solution3Component } from './solution3/solution3.component';

const routes: Routes = [
  {
    path: 'solution1',
    component: Solution1Component
  }, {
    path: 'solution2',
    component: Solution2Component
  }, {
    path: 'solution3',
    component: Solution3Component
  }, {
    path: '',
    redirectTo: '/memoryleak/solution1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoryLeakRoutingModule { }
