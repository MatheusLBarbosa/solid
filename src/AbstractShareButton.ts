import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  className: string;

  constructor(eventHanhler: EventHandler, className: string) {
    this.eventHandler = eventHanhler;
    this.className = className;
  }

  abstract createAction();

  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.className, "click", action);
  }
}
