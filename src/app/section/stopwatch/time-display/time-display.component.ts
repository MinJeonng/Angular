import { Component, Input, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-time-display",
  templateUrl: "./time-display.component.html",
  styleUrls: ["./time-display.component.scss"],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: string; //, section 컴포넌트랑 연결되어있으니까 그 값으로 변함

  minText: number = 0;
  secText: number = 0;
  msText: number = 0;

  timeInterval;

  constructor() {
    console.log(this.inputData);

    // setInterval(() => {
    //   this.test++;
    // }, 1000);
  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.msText++;
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.msText = 0;
  }

  // 데이터를 받았다는 걸 언제아냐? 자식이 데이터를 가지고 있따는걸 언제아냐
  // 변화를 감지하는 함수 -> input 데이터를 받아들일게 없으니까 이건 사용 x
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   for (let propNames in changes) {
  //     if (propNames == "inputData") {
  //       switch (changes[propNames].currentValue) {
  //         case "start":
  //           this.timeStart();
  //           break;
  //         case "stop":
  //           this.timeStop();
  //           break;
  //         case "reset":
  //           this.timeReset();
  //           break;
  //       }
  //     }
  //   }
  // }

  ngOnInit() {}
}
