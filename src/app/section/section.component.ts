import { Component, OnInit } from "@angular/core";

@Component({
  // 하나의 컴포넌트에 적용되는 css 파일
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"],
})
export class SectionComponent implements OnInit {
  present = "welcome";
  commandText;

  constructor() {}
  startTime($event) {
    this.present = $event;
  }

  ngOnInit() {}
}
