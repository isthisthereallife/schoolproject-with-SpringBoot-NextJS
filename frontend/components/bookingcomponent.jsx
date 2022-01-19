import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import styles from '../styles/Bookingcomponent.module.css'
import sv from 'date-fns/locale/sv'
import useActiveUser from '../lib/hooks/useActiveUser'
import Link from 'next/link'
import parseISO from 'date-fns'
import { Button } from '@material-ui/core'

registerLocale('sv', sv)


/*
 * to do: rätta till tiden(den är 1 timme fel)
 */

export default function Bookingcomponent() {
const activeUser = useActiveUser()
console.log("acu", activeUser)
const [datePicked, setDatePicked] = useState("")
const [typeOfService, setTypeOfService] = useState("Standard")
const [description, setDescription] = useState("Det är ett stort hus")


function datetimeEvent(date) {
  let ISODate = date
  setDatePicked(ISODate)
}
function bookingEvent (event) {
  postBooking(datePicked, typeOfService, description, activeUser)
}
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
        onChange={(date) => datetimeEvent(date)}
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

export async function postBooking(datePicked, typeOfService, description, activeUser) {
  console.log("datepicked", datePicked)
  console.log("acutu", activeUser)

  const a = {
    cleaner_id: 1,
    customer_id: activeUser.activeUser.userId,
    datetime: datePicked,
    type_of_service: typeOfService,
    address: activeUser.activeUser.address,
    status: "Obekräftad",
    description
  }

/*
 *     console.log("stringify", JSON.stringify(a))
 *   let request = {
 *     method: 'POST',
 *     headers: {
 *       'Content-Type': 'application/json; charset=UTF-8'
 *     },
 *     body: JSON.stringify(a)
 *   }
 *   console.log("my request", request)
 *   const res = await fetch('localhost:8080/booking/add', request)
 *   console.log(res)
 *  // then((response) => response.json())
 */


let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "JSESSIONID=1AFC3231401780EA7F31B3585B869FCC");

let raw = JSON.stringify({
  "cleaner_id": 1,
  "customer_id": activeUser.activeUser.userId,
  "datetime": datePicked,
  "type_of_service": typeOfService,
  "address": activeUser.activeUser.address,
  "status": "Obekräftad",
  description
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/booking/add", requestOptions).
  then((response) => response.text()).
  then((result) => console.log(result)).
  catch((error) => console.log('error', error));
}
