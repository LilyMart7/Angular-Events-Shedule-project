import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import Event from "..//..//models/event";
import { EventService } from "../event.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  @Output() getSelectedEvent = new EventEmitter<Event>();
  events: Event[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
  }

  onEventSelected(event: Event) {
    this.getSelectedEvent.emit(event);
  }
}
