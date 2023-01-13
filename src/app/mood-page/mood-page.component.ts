import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PredictionEvent } from "../prediction-event";

@Component({
  selector: "app-mood-page",
  templateUrl: "./mood-page.component.html",
  styleUrls: ["./mood-page.component.css"],
})
export class MoodPageComponent implements OnInit {
  gesture: String = "";
  moods: Array<{ label: string; img: any }>;
  currentMood: number;
  debouncedIncr: any;
  debouncedDecr: any;

  constructor(private route: Router) {
    this.debouncedIncr = this.debounce(this.increment, 800);
    this.debouncedDecr = this.debounce(this.decrement, 800);
    this.currentMood = 5;
    this.moods = [
      { label: "Miserable", img: "assets/icons/emocards/miserable.svg" },
      { label: "Very Sad", img: "assets/icons/emocards/verysad.svg" },
      { label: "Sad", img: "assets/icons/emocards/sad.svg" },
      { label: "Bored", img: "assets/icons/emocards/bored.svg" },
      { label: "So-so", img: "assets/icons/emocards/soso.svg" },
      { label: "Okay", img: "assets/icons/emocards/ok.svg" },
      { label: "Good", img: "assets/icons/emocards/good.svg" },
      { label: "Very Good", img: "assets/icons/emocards/verygood.svg" },
      { label: "Great", img: "assets/icons/emocards/great.svg" },
      { label: "Euphoric!", img: "assets/icons/emocards/euphoric.svg" },
    ];
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

  increment() {
    if (this.currentMood < 10) {
      this.currentMood += 1;
    }
  }

  decrement() {
    if (this.currentMood > 1) {
      this.currentMood -= 1;
    }
  }

  getMoodDescription() {
    return this.moods[this.currentMood - 1];
  }

  ngOnInit(): void {}

  onPrediction(event: PredictionEvent) {
    this.gesture = event.getPrediction();
    if (this.gesture === "Open Hand") {
      this.debouncedIncr();
    }
    if (this.gesture === "Closed Hand") {
      this.debouncedDecr();
    }
    if (this.gesture === "Two Closed Hands") {
      try {
        const data = JSON.parse(localStorage.getItem("moods") || "[]");
        const newMood = {
          mood: this.currentMood,
          o: this.moods[this.currentMood - 1],
          date: new Date().toDateString(),
        };
        localStorage.setItem("moods", JSON.stringify([...data, newMood]));
        this.route.navigate(["/home"]);
      } catch (e) {
        console.log(e);
      }
    }
    if (this.gesture === "Hand Pointing") {
      this.route.navigate(["/home"]);
    }
  }
}
