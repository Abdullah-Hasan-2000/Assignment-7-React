import * as React from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function BasicTable() {

    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => setData(data.users))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    console.log(data);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Birthdate</TableCell>
                        <TableCell align='center'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((e, i) => (
                        <TableRow
                            key={e.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell component="th" scope="row">
                                {e.firstName}{' '}{e.maidenName}{' '}{e.lastName}
                            </TableCell>
                            <TableCell >{e.email}</TableCell>
                            <TableCell >{e.address.address + ', ' + e.address.city}</TableCell>
                            <TableCell >{e.phone}</TableCell>
                            <TableCell >{e.birthDate}</TableCell>
                            <TableCell>

                                <Stack direction="row" justifyContent={'center'} spacing={2}>
                                    <IconButton aria-label="edit" sx={{ color: 'rgb(215, 187, 48)' }}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
