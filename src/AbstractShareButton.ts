import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  className: string;
  url: string;

  constructor(className: string, url: string) {
    this.eventHandler = new EventHandler();
    this.className = className;
    this.url = url;
  }

  abstract createLink(): string;

  bind() {
    const link = this.createLink();
    this.eventHandler.addEventListenerToClass(this.className, "click", () =>
      window.open(link)
    );
  }
}
