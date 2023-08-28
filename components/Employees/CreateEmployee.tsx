'use client'
import React, { useState } from "react";
import { Container,Input, FormLabel,  Item, Button,Grid, InputLabel,Paper, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';


// CREATE: NEW EMPLOYEE

const CreateEmployee = () => {

    // Init: Employee Fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");


    // Form: handleSubmission
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(EmployeeFormFields)
        console.log("First Name:", firstName,
            "Last Name", lastName,
            "E-mali Address", emailAddress,
            "Telephone Number", telephoneNumber

        );
    };

    return (
        <Paper>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                
                <FormControl fullWidth onSubmit={handleSubmit}>    
                <Grid item xs={12}>
                    
                    <FormLabel htmlFor="firstName">
                        First Name:
                    </FormLabel>
                    <Input
                    rows={12}
                    required
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    
                </Grid>
                <br />
                    
                    <FormLabel htmlFor="lastName">
                        Last Name:
                    </FormLabel>
                    <Input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                
                <br />
                
                    <FormLabel htmlFor="telephoneNumber">
                        Telephone Number:
                    </FormLabel>
                    <Input
                        type="text"
                        id="telephoneNumber"
                        value={telephoneNumber}
                        onChange={(e) => setTelephoneNumber(e.target.value)}
                    />
            
                <br />
                
                    <FormLabel htmlFor="emailAddress">
                        E-mail Address:
                    </FormLabel>
                    <Input
                        type="text"
                        id="emailAddress"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                    />
                <br />
                <Button type="submit">Create</Button>
                </FormControl>
                </Grid>
        </Paper>
    )
};

export default CreateEmployee;