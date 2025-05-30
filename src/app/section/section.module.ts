import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionComponent } from "./section.component";
import { StopwatchModule } from "./stopwatch/stopwatch.module";

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, StopwatchModule],
  exports: [SectionComponent], // export를 section만 해주는 이유는 app 모듈에선 section만 필요하니까
})
export class SectionModule {}
