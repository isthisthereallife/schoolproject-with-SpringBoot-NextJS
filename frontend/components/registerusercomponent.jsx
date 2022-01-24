import React from 'react';
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
                    placeholder="Obligatoriskt"
                    label="Förnamn"
                />
                 <TextField
                    required
                    id="outlined-required"
                    placeholder="Obligatoriskt"
                    label="Efternamn"
                />
                 <TextField
                    required
                    id="outlined-required"
                    placeholder="Obligatoriskt"
                    label="Adress"
                />
                 <TextField
                    required
                    id="outlined-required"
                    placeholder="Obligatoriskt"
                    label="E-postadress"
                />
                 <TextField
                    required
                    id="outlined-required"
                    placeholder="Obligatoriskt"
                    label="Telefonnummer"
                />
         </Box>)
}
