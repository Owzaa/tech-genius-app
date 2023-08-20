import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Button, Box, Paper, Grid } from '@mui/material/';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
export default function FilterEmployee() {

    const [employeeStatus, setEmployeeStatus] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [manager, setManager] = React.useState('');


    // handleFilter: Status
    const handleChange = (event: SelectChangeEvent) => {
        setEmployeeStatus(event.target.value);
    }

    // handleFilter: Department
    const handleChangeDepartment = (event: SelectChangeEvent) => {
        setDepartment(event.target.value);
    }

    // HandleFilter: Manager
    const handleChangeManager = (event: SelectChangeEvent) => {
        setManager(event.target.value)
    }

    return (
        <Grid spacing={2}>
            <Paper elevation="3" style={{ marginBlock: 5 }} gap={1} mb="5"  >
                <Box m={5} p={2}  >
                    <aside>Filter</aside>
                    <FormControl fullWidth sx={{ mt: 3 }} >



                        <InputLabel id="employeeStatus-select-required-label">Active/ (All)/ Deactive Only</InputLabel>
                        <Select
                            labelId="employeeStatus-select-required-label"
                            id="employeeStatus"
                            value={employeeStatus}
                            label="Employee Status"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>{employeeStatus}</em>
                            </MenuItem>

                            <MenuItem value="Active">Active Only</MenuItem>
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Deactive">Deactive Only</MenuItem>
                        </Select>
                    </FormControl>



                    <FormControl fullWidth sx={{ mt: 3 }} >

                        <InputLabel id="employeeDepartment-select-required-label">Select</InputLabel>
                        <Select
                            labelId="department-select-required-label"
                            id="employeeDepartment"
                            value={department}
                            label="Department"
                            onChange={handleChangeDepartment}
                        >
                            <MenuItem value="">
                                <em>{department}</em>
                            </MenuItem>
                        </Select>

                    </FormControl>



                    <FormControl fullWidth sx={{ mt: 3 }} >

                        <InputLabel id="manager-select-required-label">Select</InputLabel>
                        <Select
                            labelId="department-select-required-label"
                            id="manager"
                            value={manager}
                            label="Department"
                            onChange={handleChangeManager}
                        >
                            <MenuItem value="">
                                <em>{manager}</em>
                            </MenuItem>
                        </Select>
                    </FormControl>



                    <Button sx={{ mt: 2, placeItems: "left" }} size="small" variant="outlined" startIcon={<FilterAltIcon />}>
                        Filter
                    </Button>
                </Box>
            </Paper>
        </Grid>
    )
}

