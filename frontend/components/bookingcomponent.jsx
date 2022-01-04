import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import styles from '../styles/Bookingcomponent.module.css'
import sv from 'date-fns/locale/sv'
import Link from 'next/link'
registerLocale('sv', sv)


/*
 * to do: rätta till tiden(den är 1 timme fel)
 */

export default function Bookingcomponent() {
const [datePicked, setDatePicked] = useState(new Date())

return (
<div className={styles.main}>
  <div>
    <h1>Gör din bokning här</h1>
    <DatePicker
      inline
      locale="sv"
      selected={datePicked}
      onSelect={console.log(datePicked)}
      onChange={(date) => setDatePicked(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Tid"
      dateFormat="d MMMM, yyyy H:mm"
    />
  </div>
  <button><Link href="/confirmation">Boka</Link></button>

</div>
)
}
