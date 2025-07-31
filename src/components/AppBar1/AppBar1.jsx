import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate();

    const AllDelete = () => {
        if (window.confirm('Are you sure you want to delete all users?')) {
            alert('You can not delete all users at once. Please delete them one by one.');
        }
    };

    return (
        <div style={{ margin: '0', padding: '0' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: 4 }}>
                            Manage <b>Employees</b>
                        </Typography>
                        <Stack sx={{ marginRight: 4 }} direction="row" spacing={2}>
                            <Button onClick={AllDelete}  variant="contained" color="error" startIcon={<RemoveCircleIcon />}>
                                Delete
                            </Button>
                            <Button onClick={() => {navigate('/adduser')}} variant="contained" color="success" startIcon={<AddCircleIcon />}>
                                Add New Employee
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
