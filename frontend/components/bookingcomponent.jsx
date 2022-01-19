import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import styles from '../styles/Bookingcomponent.module.css'
import sv from 'date-fns/locale/sv'
import useActiveUser from '../lib/hooks/useActiveUser'
import Link from 'next/link'
import { Button } from '@material-ui/core'

registerLocale('sv', sv)


/*
 * to do: rätta till tiden(den är 1 timme fel)
 */

export default function Bookingcomponent() {
const activeUser = useActiveUser()
const [datePicked, setDatePicked] = useState(new Date())
const [typeOfService, setTypeOfService] = useState("Standard")

const bookingEvent = ((event) => {
  postBooking(datePicked, typeOfService, activeUser)
})
return (
  <>
  <div className={styles.main}>
    <div>
      <h1 className={styles.headline}>Gör din bokning här</h1>
      <div className={styles.datepickerdiv}>

      <DatePicker
        calendarClassName={styles.datepicker}
        wrapperClassName={styles.datepicker}
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
    </div>
    <div className={styles.bookingbuttondiv}>
      <Button variant="contained" onClick={bookingEvent} className={styles.bookingbutton}>Boka</Button>
    </div>
  </div>
</>
)
}

export async function postBooking(datePicked, typeOfService, activeUser) {
  
  const a = {
    cleaner_id: 1,
    customer_id: activeUser.activeUser.userId,
    datetime: datePicked,
    type_of_service: typeOfService,
    address: "" }
    
  let request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(a)
  }
  console.log("my request", request)
  const res = await fetch('localhost:8080/booking/add', request).
  then((response) => response.json())

}
