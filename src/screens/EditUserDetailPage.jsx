import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EditUserDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    let [userData, setUserData] = useState({
        firstName: '',
        email: '',
        phone: '',
        birthDate: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then((response) => setUserData(response.data))
            .catch((error) => console.error('Error fetching user data:', error));
    }
    , [id]);

    const EditUser = () => {
        userData ? axios.put(`http://localhost:3000/users/${id}`, userData)
            .then((response) => { alert('User updated successfully'); })
            .catch((error) => console.error('Error updating user data:', error))
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
                    <TextField onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} placeholder='Enter First Name' label="First Name" variant="outlined" fullWidth margin="normal" value={userData.firstName} slotProps={{ inputLabel: { shrink: true } }} />
                    <TextField onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder='Enter Email' label="Email" variant="outlined" fullWidth margin="normal" value={userData.email} slotProps={{ inputLabel: { shrink: true } }} />
                    <TextField onChange={(e) => setUserData({ ...userData, phone: e.target.value })} placeholder='Enter Phone' label="Phone" variant="outlined" fullWidth margin="normal" value={userData.phone} slotProps={{ inputLabel: { shrink: true } }} />
                    <TextField onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })} placeholder='Enter Birthdate' label="Birthdate" type="date" variant="outlined" fullWidth margin="normal" slotProps={{ inputLabel: { shrink: true } }} value={userData.birthDate} />
                    <Button onClick={EditUser} type="submit" variant="contained" color="success" sx={{ marginTop: 2, width: '100%' }}>
                        Edit User Details
                    </Button>
                </Paper>
            </Box>
        </>
    )
}

export default EditUserDetailPage