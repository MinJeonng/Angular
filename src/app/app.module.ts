import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LayoutModule } from "./layout/layout.module";
import { SectionModule } from "./section/section.module";

// 컴포넌트는 두개이상의 모듈에 선언될 수 없다.

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SectionModule], // layout, section 모듈이 들어와야만 사용할 수 있는 의존성 생김
  providers: [],

  exports: [
    AppComponent, //js의 export와 동일한 의미, 다른 폴더나 파일에서 사용될 수 있음
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
