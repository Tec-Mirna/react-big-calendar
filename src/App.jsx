import { Calendar, dayjsLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";

import dayjs from 'dayjs'
import './App.css'

function App() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs('2024-04-04T12:00:00').toDate(),
      end: dayjs('2024-04-04T14:00:00').toDate(),
      title: "Evento 1"
    },
    {                                     //Pasar a formato fecha
      start: dayjs('2024-04-08T12:00:00').toDate(),
      end: dayjs('2024-04-08T14:00:00').toDate(),
      title: "Evento 2"
    }
  ]
  return (
    <div style={{
      height: "95vh",
      width: "70vw",
    }}>
     <Calendar
     localizer={localizer}
     events={events}
     views={["month", "agenda"]}
    /*  defaultView='agenda' //agenda por defecto */

  
     />
    </div>
  )
}

export default App
