import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"],
})
export class ButtonsComponent implements OnInit {
  @Output() clickEvent = new EventEmitter(); // clickvent로 리스너를 만들 수 잇음
  constructor() {}
  start() {
    // clickEvent 라는 객체에 emit이라는 함수 호출 -> 부모컴포넌트한테 데이터 전달
    this.clickEvent.emit(); //자식 컴포넌트가 부모에게 전달해줄 수 있는 상황
  }
  ngOnInit() {}
}
