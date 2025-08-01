import React, { useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import * as styles from "./Calendar.module.css";

const events = [
  { title: "Pretty 'Lit' Poppy", start: "2025-09-06" },
  { title: "Pretty Little Pumpkin", start: "2025-10-25" },
  { title: "Bears. Beets. (Small) Business Saturday", start: "2025-11-29" },
  { title: "Poppies & Pinecoles", start: "2025-12-13"}
];

export function DemoApp() {
  const calendarRef = useRef();

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.updateSize();
    }
  }, []);

  return (
    <div className={styles.calendarWrapper}>
    <div className={styles.calendarContainer}>
      <h3>Upcoming Pretty Poppy Events</h3>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
