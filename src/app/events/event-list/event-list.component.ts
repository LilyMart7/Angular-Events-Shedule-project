import { Component, OnInit } from "@angular/core";
import Event from "..//..//models/event";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  events: Event[] = [
    new Event(
      "Svelte",
      "Svelte description",
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/full/svelte-logo-vertical.png"),
    new Event(
      "Svelte",
      "Svelte description",
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/full/svelte-logo-vertical.png")

  ];
  constructor() {}

  ngOnInit() {}
}
