import { NgModule } from '@angular/core';
import { NumberFormatPipe } from './pipes/number-format.pipe';

@NgModule({
    declarations: [NumberFormatPipe],
    exports: [NumberFormatPipe]
})
export class SharedModule { }