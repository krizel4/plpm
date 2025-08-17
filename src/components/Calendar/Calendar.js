import React, { useRef, useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import * as styles from './Calendar.module.css'

const events = [
  {
    title: 'Pop-up',
    start: '2025-09-06',
    videoUrl:
      'https://videos.ctfassets.net/xuyebjupxu9b/4jBjWWi7UMiRkMhBVRbW3t/0e01dd66039e935037dcf9b31a5b2e59/sept-event-reel.mp4'
  },
  {
    title: 'Pop-up',
    start: '2025-10-25',
    videoUrl:
      'https://videos.ctfassets.net/xuyebjupxu9b/3EmxBYYSDVhf15ApI0zPOv/295e90349452a7933da549cd125b6a3b/fall-festival-reel.mp4'
  },
  {
    title: 'Pop-up',
    start: '2025-11-29',
    videoUrl:
      'https://videos.ctfassets.net/xuyebjupxu9b/6zrOFGfc1d9TVzthk5s3M/76fd287b4942b4bd9ed73074f1f5a3ad/small-business-saturday-reel.mp4'
  },
  {
    title: 'Pop-up',
    start: '2025-12-13',
    videoUrl:
      'https://videos.ctfassets.net/xuyebjupxu9b/6CqfYMZoJ5JoquwudzruHC/d45aa027ec4da1fb452a700a6e2ecb67/POPPIES.mp4'
  }
]

export function CalendarApp () {
  const calendarRef = useRef()

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.updateSize()
    }
  }, [])

  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleEventClick = (info) => {
    setSelectedEvent(info.event.extendedProps)
  }

  return (
    <div className={styles.calendarWrapper} id="upcoming-events">
      <div className={styles.calendarContainer}>
        <h3>Upcoming Pretty Poppy Events</h3>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          dayCellDidMount={(info) => {
            const day = info.date.getDay()
            if (day === 0 || day === 1) {
              info.el.style.backgroundColor = '#a5a5a5ff'
            }
          }}
        />
      </div>
      <div className={styles.sharedContainer}>
        <p
          className={`${styles.disappear} ${
            selectedEvent ? styles.hidden : ''
          }`}
        >
          Click an event on the left to get more information.
        </p>
        {selectedEvent?.videoUrl && (
          <video
            className={styles.sharedContainer}
            src={selectedEvent.videoUrl}
            autoPlay
            loop
            playsInline
          />
        )}
      </div>
    </div>
  )
}

function renderEventContent (eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
