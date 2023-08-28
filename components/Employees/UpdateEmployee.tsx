'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Container, Input, FormLabel, Button, Grid, Paper } from "@mui/material";
import FormControl from '@mui/material/FormControl';

// Edit: Employee_API

function UpdateEmployee() {


    // Init: Employee Fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [employeeManager, setEmployeeManager] = useState("");
    const [employeeStatus, setEmployeeStatus] = useState("");


    const router = useRouter();



    const updateEmployee = async () => {
        try {
            const response = await fetch('/api/employees', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, emailAddress, telephoneNumber, employeeManager, employeeStatus }),
            });
            if (response.ok) {
                router.push('/employees');
            } else {
                throw new Error('Failed to update employee');
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Paper>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <FormControl fullWidth >
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


                    <FormLabel htmlFor="employeeManager">
                        Manager:
                    </FormLabel>
                    <Input
                        type="text"
                        id="employeeManager"
                        value={employeeManager}
                        onChange={(e) => setEmployeeManager(e.target.value)}
                    />
                    <br />

                    <FormLabel htmlFor="employeeStatus">
                        Status:
                    </FormLabel>
                    <Input
                        type="text"
                        id="employeeStatus"
                        value={employeeStatus}
                        onChange={(e) => setEmployeeStatus(e.target.value)}
                    />


                    <Button type="button" onClick={updateEmployee}>Update</Button>
                </FormControl>
            </Grid>
        </Paper>
    )
}

export default UpdateEmployee;
