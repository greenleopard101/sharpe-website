import React from "react";
import "./Events.css";

export default function Events() {
  return (
    <div className="video-responsive">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=p2ofu73ep15d2t2dvfuntt7km8%40group.calendar.google.com&ctz=America%2FNew_York"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
        title="Google Calendar"
        className="gcal"
      ></iframe>
    </div>
  );
}
