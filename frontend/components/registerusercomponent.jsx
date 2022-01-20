import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import useActiveUser from '../lib/hooks/useActiveUser'

export default function RegisterUserComponent() {

    const activeUser = useActiveUser()
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [eMail, setEmail] = useState("")

    const sendCustomer = () => {

        console.log("Test RegisterButton")

        //objekt
        const newCustomer = {
            first_name: fName,
            last_name: lName,
            address: address,
            phoneNo: phoneNo,
            e_mail: eMail,
            accountAccessLvl: accountAccessLvl,
            accountNonLocked: accountNonLocked,
            username: username
        }

        //paketera objektet
        const postData = {
            method: 'POST',
            body: JSON.stringify(newCustomer),
            headers: {
                "Content-type": "application/json"
            }
        }

        //postar objekt
        fetch("http://localhost:8080/customer/add", postData).
            then((res) => console.log(res))
    }

    return (
        <Box
            components="form"
            sx={{
                '& .MuiTextField-root':
                {
                    m: 1,
                    width: '25ch'
                }
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="outlined-required"
                placeholder="Obligatoriskt"
                label="Förnamn"
                onChange={(e) => setFname(e.target.value)}
                value={fName}
            />
            <br />
            <TextField
                required
                id="outlined-required"
                placeholder="Obligatoriskt"
                label="Efternamn"
                onChange={(e) => setLname(e.target.value)}
                value={lName}
            />
            <br />
            <TextField
                required
                id="outlined-required"
                placeholder="Obligatoriskt"
                label="Adress"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />
            <br />
            <TextField
                required
                id="outlined-required"
                placeholder="Obligatoriskt"
                onChange={(e) => setEmail(e.target.value)}
                value={eMail}
            />
            <br />
            <TextField
                required
                id="outlined-required"
                placeholder="Obligatoriskt"
                label="Telefonnummer"
                onChange={(e) => setPhoneNo(e.target.value)}
                value={phoneNo}
            />
            <br />
            <Button variant="contained" size="small" onClick={sendCustomer}>
                Registrera mig
            </Button>
        </Box>)
}
