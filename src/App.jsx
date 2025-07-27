import { useState } from 'react'
import './App.css'
import DataTable from './components/DataTable/DataTable.jsx'
import AppBar1 from './components/AppBar1/AppBar1.jsx'
import Box from '@mui/material/Box';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBar1 />
      <Box sx={{ flexGrow: 2, padding: 4 }}>
        <DataTable />
      </Box>
    </>
  )
}

export default App
