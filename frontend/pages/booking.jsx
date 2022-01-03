import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import sv from 'date-fns/locale/sv'
registerLocale('sv',sv)

function BookingPage() {
  const [datePicked, setDatePicked] = useState(new Date())
  
  const changeDatePicked = (e) =>{
    setDatePicked(e.target.value)
    console.log("changed date?",datePicked)
  }

  
  return <div>
    <h2>Inloggad som "Bolaget AB"</h2><hr/>
    <div><h1>Gör din bokning</h1>
    <DatePicker
    locale='sv'
      selected={datePicked}
      onChange={(date) => setDatePicked(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="d MMMM, yyyy H:mm"
    />
    
    </div>
    </div>
}

export default BookingPage