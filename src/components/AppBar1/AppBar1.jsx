import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function ButtonAppBar() {
    return (
        <div style={{ margin: '0', padding: '0' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: 4 }}>
                            Manage <b>Employees</b>
                        </Typography>
                        <Stack sx={{ marginRight: 4 }} direction="row" spacing={2}>
                            <Button variant="contained" color="error" startIcon={<RemoveCircleIcon />}>
                                Delete
                            </Button>
                            <Button variant="contained" color="success" startIcon={<AddCircleIcon />}>
                                Add New Employee
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
