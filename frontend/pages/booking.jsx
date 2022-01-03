import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import sv from 'date-fns/locale/sv'
import Link from 'next/link'
registerLocale('sv', sv)

/*
 * to do: rätta till tiden(den är 1 timme fel)
 */
function BookingPage() {

  const [datePicked, setDatePicked] = useState(new Date())


  return <div>
    <div>
      <h1>Gör din bokning här</h1>
    <DatePicker
    locale="sv"
      selected={datePicked}
      onChange={(date) => setDatePicked(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="d MMMM, yyyy H:mm"
    />
    </div>
    <button><Link href="/confirmation">Boka</Link></button>

    </div>
}

export default BookingPage
