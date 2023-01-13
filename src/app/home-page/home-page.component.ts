import { Component, OnInit } from "@angular/core";
import { PredictionEvent } from "../prediction-event";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  logs: Array<any>;
  selectedLog: number;
  debounceNext: any;
  debouncePrev: any;
  debounceDelete: any;

  constructor(private route: Router) {
    this.debounceNext = this.debounce(this.selectedLogNext, 800);
    this.debouncePrev = this.debounce(this.selectedLogPrev, 800);
    this.debounceDelete = this.debounce(this.deleteSelectedLog, 800);
    this.logs = JSON.parse(localStorage.getItem("moods") || "[]");
    if (this.logs.length) {
      this.selectedLog = 0;
    }
  }

  debounce(func: any, timeout = 5000) {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  selectedLogNext() {
    if (this.selectedLog < this.logs.length - 1) {
      this.selectedLog += 1;
    }
  }

  selectedLogPrev() {
    if (this.selectedLog) {
      this.selectedLog -= 1;
    }
  }

  deleteSelectedLog() {
    const data = JSON.parse(localStorage.getItem("moods") || "[]");
    this.logs = data.filter((_: any, idx: number) => this.selectedLog !== idx);
    localStorage.setItem("moods", JSON.stringify(this.logs));
    if (this.selectedLog > this.logs.length - 1) {
      this.selectedLogPrev();
    }
  }

  ngOnInit() {}
  prediction(event: PredictionEvent) {
    this.gesture = event.getPrediction();
    if (this.gesture == "Two Open Hands") {
      this.route.navigate(["/mood"]);
    }

    if (this.gesture === "One Open, One Closed Hand") {
      this.debounceNext();
    }

    if (this.gesture === "One Pointing, One Closed Hand") {
      this.debouncePrev();
    }

    if (this.gesture === "Two Hands Pointing") {
      this.debounceDelete();
    }
  }
}
