import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Button, Box, Paper, Grid } from '@mui/material/';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import FilterAltIcon from '@mui/icons-material/FilterAlt';


//Filter: Department
export default function FilterDepartment() {

    const [departmentStatus, setDepartmentStatus] = React.useState('');


    // handleFilter: Status
    const handleChange = (event: SelectChangeEvent) => {
        setDepartmentStatus(event.target.value);
    }


    return (
        <Grid spacing={2}>
            <Paper elevation="3" style={{ marginBlock: 5 }} gap={1} mb="5"  >
                <Box m={5} p={2}  >
                    <aside>Filter</aside>
                    <FormControl fullWidth sx={{ mt: 3 }} >



                        <InputLabel id="departmentStatus-select-required-label">Active/ (All)/ Deactive Only</InputLabel>
                        <Select
                            labelId="departmentStatus-select-required-label"
                            id="employeeStatus"
                            value={departmentStatus}
                            label="Status"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>{departmentStatus}</em>
                            </MenuItem>

                            <MenuItem value="Active">Active Only</MenuItem>
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Deactive">Deactive Only</MenuItem>
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

