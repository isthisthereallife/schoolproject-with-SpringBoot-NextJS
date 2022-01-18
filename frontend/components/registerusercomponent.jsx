import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function RegisterUserComponent() {
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
                    label="Obligatoriskt"
                    defaultValue="Förnamn"
                />
                 <TextField
                    required
                    id="outlined-required"
                    label="Obligatoriskt"
                    defaultValue="Efternamn"
                />
                 <TextField
                    required
                    id="outlined-required"
                    label="Obligatoriskt"
                    defaultValue="Adress"
                />
                 <TextField
                    required
                    id="outlined-required"
                    label="Obligatoriskt"
                    defaultValue="E-postadress"
                />
                 <TextField
                    required
                    id="outlined-required"
                    label="Obligatoriskt"
                    defaultValue="Telefonnummer"
                />
         </Box>)
}
