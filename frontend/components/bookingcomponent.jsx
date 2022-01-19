/* eslint-disable no-negated-condition */
import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import styles from '../styles/Bookingcomponent.module.css'
import sv from 'date-fns/locale/sv'
import useActiveUser from '../lib/hooks/useActiveUser'
import Link from 'next/link'
import { Button, NativeSelect, FormControl, InputLabel } from '@material-ui/core'

registerLocale('sv', sv)


/*
 * to do: rätta till tiden(den är 1 timme fel)
 */

export default function Bookingcomponent() {
const activeUser = useActiveUser()
const [datePicked, setDatePicked] = useState("")
const [typeOfService, setTypeOfService] = useState("Basic Städning")
const [description, setDescription] = useState("Det är ett stort hus")
const [isBooked, setIsBooked] = useState(false)

function datetimeEvent(date) {
  let ISODate = date
  setDatePicked(ISODate)
}

function bookingEvent () {
  postBooking(datePicked, typeOfService, description, activeUser)
  setIsBooked(true)
}
return (
  <>
    <div className={styles.main}>

    {!isBooked ? (
      <>
    <div>
      <h1 className={styles.headline}>Gör din bokning här</h1>
      <div className={styles.datepickerdiv}>

      <DatePicker
        calendarClassName={styles.datepicker}
        wrapperClassName={styles.datepicker}
        inline
        locale="sv"
        selected={datePicked}
        onChange={(date) => datetimeEvent(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Tid"
        dateFormat="d MMMM, yyyy H:mm"
        htmlFor="uncontrolled-native"
      />
      </div>
    </div>
    <div className={styles.valAvTjanstForm}>
  <FormControl >
  <InputLabel className={styles.valInputLabel} variant="standard" htmlFor="uncontrolled-native">
    Val av tjänst
  </InputLabel>
  <NativeSelect
    selected={typeOfService}
    onChange={(value) => setTypeOfService(value.target.value)}

    inputProps={{
      name: 'ValAvTjanst',
      id: 'uncontrolled-native'
    }}
  >
    <option value="Basic Städning">Basic Städning</option>
    <option value="Topp Städning">Topp Städning</option>
    <option value="Diamant Städning">Diamant Städning</option>
    <option value="Fönstertvätt">Fönstertvätt</option>
  </NativeSelect>
</FormControl>
      </div>
    <div className={styles.bookingbuttondiv}>
      <Button variant="contained" onClick={bookingEvent} className={styles.bookingbutton}>Boka</Button>
    </div></>)

    : <div className={styles.confirmationdiv}>
      <h3>Detta är din bokningsbekräftelse.</h3>
      <div>Din städning kommer ske.
      </div>
      <div className={styles.backToStartButtondiv}>
        <button className={styles.backToStartButton}><Link href="/">Tillbaka till startsidan</Link></button>
      </div>
    </div>
}
  </div>
</>
)
}

export function postBooking(datePicked, typeOfService, description, activeUser) {


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
