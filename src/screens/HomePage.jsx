import React from 'react'
import DataTable from '../components/DataTable/DataTable.jsx'
import AppBar1 from '../components/AppBar1/AppBar1.jsx'
import Box from '@mui/material/Box';

const HomePage = () => {
    return (
        <>
            <AppBar1 />
            <Box sx={{ flexGrow: 2, padding: 4 }}>
                <DataTable />
            </Box>
        </>
    )
}

export default HomePage