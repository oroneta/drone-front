import { Calendar, dayjsLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import './index.css'

function Calendario() {
	const localizer = dayjsLocalizer(dayjs);
	
	const events = [
		{
			start: dayjs('2024-03-17T12:00:00').toDate(),
			end: dayjs('2024-03-17T22:00:00').toDate(),
			title: "Ruta a tu corazon <3",
		},
		{
			start: dayjs('2024-03-18T12:00:00').toDate(),
			end: dayjs('2024-03-20T22:00:00').toDate(),
			title: "Ruta Paterna",
		}
	];

	return ( 
		<Calendar
        	localizer={localizer}
			events={events}
			// it can be added to view 'week'
			views={['month', 'day', 'agenda']}
			defaultView='month'
            style={{
            	height:"100%",
                width:"100%",
                backgroundColor: "gray",
            }}
        />
	)
}

export default Calendario;