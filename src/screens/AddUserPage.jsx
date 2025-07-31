import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddUserPage = () => {

    const navigate = useNavigate();

    let [userData, setUserData] = React.useState({
        firstName: '',
        email: '',
        phone: '',
        birthDate: ''
    });

    const AddData = () => {
        userData
            ? axios.post('http://localhost:3000/users', userData)
                .then((response) => { alert('User added successfully'); })
                .catch((error) => { alert('Error adding user'); })
            : alert('Please fill all fields');
        navigate('/');
    }   

    return (
        <>
            <Box sx={{ padding: 4, margin: 4 }}>
                <Paper sx={{ margin: '2% 20% 20% 20%', padding: 10 }} elevation={3}>
                    <Typography variant="h4" sx={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }} gutterBottom>
                        Add New User
                    </Typography>
                    <TextField onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} placeholder='Enter First Name' label="First Name" variant="outlined" fullWidth margin="normal" />
                    <TextField onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder='Enter Email' label="Email" variant="outlined" fullWidth margin="normal" />
                    <TextField onChange={(e) => setUserData({ ...userData, phone: e.target.value })} placeholder='Enter Phone' label="Phone" variant="outlined" fullWidth margin="normal" />
                    <TextField onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })} placeholder='Enter Birthdate' label="Birthdate" type="date" variant="outlined" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                    <Button onClick={AddData} type="submit" variant="contained" color="success" sx={{ marginTop: 2, width: '100%' }}>
                        Add User
                    </Button>
                </Paper>
            </Box>
        </>
    )
}

export default AddUserPage