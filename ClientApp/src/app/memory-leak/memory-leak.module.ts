import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryLeakRoutingModule } from './memory-leak-routing.module';
import { Solution1Component } from './solution1/solution1.component';
import { Solution2Component } from './solution2/solution2.component';
import { Solution3Component } from './solution3/solution3.component';
import { Solution4Component } from './solution4/solution4.component';

@NgModule({
  declarations: [
    Solution1Component,
    Solution2Component,
    Solution3Component,
    Solution4Component
  ],
  imports: [
    CommonModule,
    MemoryLeakRoutingModule
  ]
})
export class MemoryLeakModule { }
