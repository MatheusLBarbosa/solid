import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    throw new Error("Unsupported Method Exception");
  }
}
