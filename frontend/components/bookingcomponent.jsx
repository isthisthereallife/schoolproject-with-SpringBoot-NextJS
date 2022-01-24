/* eslint-disable no-negated-condition */
import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import styles from '../styles/bookingcomponent.module.css'
import sv from 'date-fns/locale/sv'
import useActiveUser from '../lib/hooks/useActiveUser'
import Link from 'next/link'
import { Button, NativeSelect, FormControl, InputLabel } from '@material-ui/core'
import { FaCheckCircle, FaHome } from 'react-icons/fa'


registerLocale('sv', sv)


/*
 * to do: rätta till tiden(den är 1 timme fel)
 */

export default function Bookingcomponent() {
const activeUser = useActiveUser()
const [datePicked, setDatePicked] = useState("")
const [typeOfService, setTypeOfService] = useState("Basic Städning")
const [description] = useState("Det är ett stort hus")
const [isBooked, setIsBooked] = useState(false)
const [dayIsPassed, setDayIsPassed] = useState(false)
const [loaded, setLoaded] = useState(false)

function datetimeEvent(date) {
  let ISODate = date
  setDatePicked(ISODate)
}

useEffect(() => {
  if (datePicked < new Date().getTime()) {
  setDayIsPassed(true)
} else {
  setDayIsPassed(false)
}
}, [datePicked])

useEffect(() => {
  if (activeUser.activeUser && activeUser.activeUser.customer_id) {
  setLoaded(true)
  }
}, [activeUser.activeUser])
useEffect(() => {
  let newDate = new Date()
  newDate.setDate(newDate.getDate() + 1)
  setDatePicked(newDate)
}, [])

function bookingEvent () {
  if (activeUser.activeUser && activeUser.activeUser.customer_id) {
    postBooking(datePicked, typeOfService, description, activeUser)
    setIsBooked(true)
  }
}

return (
  <span className={styles.main}>
  {loaded
  ? (<>

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
          showDisabledMonthNavigation

          /*showWeekNumbers*/
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
      {!dayIsPassed
        ? <div className={styles.bookingbuttondiv}>
           <Button variant="contained" onClick={bookingEvent} className={styles.bookingbutton} startIcon={<FaCheckCircle/>}>Boka</Button>
          </div>
      : <div className={styles.bookingbuttondiv}>
          <p>Välj en kommande dag</p>
        </div>
      }
    </>)

    : (<>
        <div className={styles.confirmationdiv}>
          <h3>Detta är din bokningsbekräftelse.</h3>
          <div>Din städning kommer ske.
          </div>
          <div className={styles.backToStartButtondiv}>
            <Link href="/"><Button variant="contained" startIcon={<FaHome/>}>Tillbaka till startsidan</Button></Link>
          </div>
        </div>
      </>)}
</>
) : (<div className={styles.main}>
  <h1>Utloggad</h1>
  </div>)

}
</span>
    )
}

export function postBooking(datePicked, typeOfService, description, activeUser) {


let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "JSESSIONID=1AFC3231401780EA7F31B3585B869FCC");

let raw = JSON.stringify({
  "cleaner_id": 1,
  "customer_id": activeUser.activeUser.customer_id,
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
  // eslint-disable-next-line no-console
  then((result) => console.log(result)).
  // eslint-disable-next-line no-console
  catch((error) => console.log('error', error));
}
