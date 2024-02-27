import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { columns } from "../../../utils/assettablesdata"
import { rows } from "../../../utils/assettablesdata"
import UpgradeIcon from '@mui/icons-material/Upgrade';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';

const AssetsProvisingTable = () => {
    const naviagate=useNavigate()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const showIOTDetails = (iot_uuid) => {
        console.log(iot_uuid, "this is after click for showing details")
        naviagate(`/assetsProvisioning/maps/${iot_uuid}`)
    }

    const handleUpdateClick = (iot_uuid) => {
        console.log(iot_uuid, "for updaing iot devcie")
        toast(`${iot_uuid} Update Started`, {  autoClose: 2000, type: 'success' })
    }

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <ToastContainer
                            position="bottom-left"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                <TableContainer className='h-[50vh]' >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        className=''
                                    >
                                        <p className='font-dm-font font-bold text-lg' >{column.label}</p>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {

                                    return (
                                        
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className=''  >
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    const iot_uuid = row.iot_uuid
                                                    return (
                                                     
                                                        column.id != "update_button" ?
                                                            (<>
                                                                <TableCell key={`${column.id}-${row.code}`}align={column.align} className=' hover:cursor-pointer' onClick={() => showIOTDetails(iot_uuid)}   >

                                                                    {

                                                                        column.format && typeof value === 'number'
                                                                            ? column.format(value):(<>
                                                                            {<p className='font-dm-font font-normal' >{value}</p>}
                                                                            </>)
                                                                            

                                                                                    


                                                                    }
                                                                </TableCell>
                                                            </>) :
                                                            (<>
                                                                <TableCell key={`${column.id}-${row.code}-update`} align={column.align} className=' hover:cursor-pointer'    >

                                                                    {

                                                                        column.format && typeof value === 'number'
                                                                            ? column.format(value):
                                                                            
                                                                                (<>

                                                                                    <button className='bg-black py-1 px-3 rounded-full font-dm-font font-normal text-white  ' onClick={()=>handleUpdateClick(iot_uuid)}  > {value} <UpgradeIcon fontSize='small'/> </button>
                                                                                </>)


                                                                    }
                                                                </TableCell>
                                                            </>)
                                                            
                                                    );
                                                })}
                                            </TableRow>
                                        
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}

export default AssetsProvisingTable