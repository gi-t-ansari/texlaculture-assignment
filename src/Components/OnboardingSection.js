import "./OnboardingSection.css"
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import { Grid } from "@mui/material";
import Metrics from "../Assets/metrics-data.png"
import WestRegionData from "../Assets/west-region-data.png"
import EastRegionData from "../Assets/east-region-data.png"
import SouthRegionData from "../Assets/south-region-data.png"
import NorthRegionData from "../Assets/north-region-data.png"

const columns = [
    { id: 'companyName', label: 'Company Name', minWidth: 170 },
    { id: 'onboardingDate', label: 'Onboarding Date', minWidth: 120 },
    {
      id: 'goLiveDate',
      label: 'Go Live Date',
      minWidth: 120,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'totalUser',
      label: 'Total User Base',
      minWidth: 120,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'billingDate',
      label: 'Last Billing Status',
      minWidth: 120,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 120,
        align: 'center',
        format: (value) => value.toFixed(2),
    }
];

  
const rows = [
    {
        companyName: "TexlaCulture",
        companyCode: "INV-17048",
        onboardingDate: "12 Jan 2022",
        goLiveDate : "7 Aug 2022",
        totalUser : 244,
        billingDate : "7 Aug 2022",
        status: "Active"
    },
    {
        companyName: "TexlaCulture",
        companyCode: "INV-17048",
        onboardingDate: "12 Jan 2022",
        goLiveDate : "7 Aug 2022",
        totalUser : 244,
        billingDate : "7 Aug 2022",
        status: "Active"
    },
    {
        companyName: "TexlaCulture",
        companyCode: "INV-17048",
        onboardingDate: "12 Jan 2022",
        goLiveDate : "7 Aug 2022",
        totalUser : 244,
        billingDate : "7 Aug 2022",
        status: "Active"
    },
    {
        companyName: "Pinch Life",
        companyCode: "INV-17048",
        onboardingDate: "12 Jan 2022",
        goLiveDate : "7 Aug 2022",
        totalUser : 244,
        billingDate : "7 Aug 2022",
        status: "Active"
    },
    {
        companyName: "Pinch Life",
        companyCode: "INV-17048",
        onboardingDate: "12 Jan 2022",
        goLiveDate : "7 Aug 2022",
        totalUser : 244,
        billingDate : "7 Aug 2022",
        status: "Active"
    },
    {
        companyName: "Pinch Life",
        companyCode: "INV-17048",
        onboardingDate: "12 Jan 2022",
        goLiveDate : "7 Aug 2022",
        totalUser : 244,
        billingDate : "7 Aug 2022",
        status: "Active"
    }
];

const logoStyle = {
    backgroundColor: "#091A7A",
    borderRadius: "50%",
    color: "#fff",
    width: "40px",
    height: "40px",
    padding: "20px 10px 0px 10px",
    fontSize: "16px",
    marginRight: "10px"
}

function OnboardingSection() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [dense, setDense] = useState(false);

    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

  return (
    <Grid container spacing={2}>
        <Grid lg={8} md={12}>
            <h5 className="sub-heading">Onboarded Companies</h5>
            <div className="input-container">
                <label for="select-option">Service Type</label>
                <select id="select-option">
                    <option value="option1">All</option>
                </select>
                <input type="text" placeholder="Search client or invoice number"/>
            </div>
             <Paper sx={{ width: '100%' }} >
                <TableContainer sx={{ maxHeight: 440 }} id={dense ? "dense" : ""}>
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow >
                                {columns.map((column) => (
                                    <TableCell
                                        sx={{fontSize: "12px", color: "#637381", fontWeight: "600"}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        <TableCell sx={{display: "flex", alignItems: "center"}}>
                                            <div style={logoStyle}>
                                                TX
                                            </div>
                                            <div>
                                                {row.companyName}<br />
                                                {row.companyCode}
                                            </div>
                                        </TableCell>
                                        <TableCell align="left">{row.onboardingDate}</TableCell>
                                        <TableCell align="center">{row.goLiveDate}</TableCell>
                                        <TableCell align="center">{row.totalUser}</TableCell>
                                        <TableCell align="center">{row.billingDate}</TableCell>
                                        <TableCell align="center">
                                            <div style={{backgroundColor: "#D6F1E4", color: "#0D6A30", fontSize: "12px", fontWeight: 600, padding: "5px", borderRadius: "5px"}}>
                                                {row.status}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
                    <div>
                        <Switch onClick={() => setDense(!dense)} />
                        {dense === false ? <span>Dense</span> : <span>Bright</span>}
                    </div>
                    <TablePagination
                        rowsPerPageOptions={[3, 6, 9]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </Paper>
        </Grid>
        <Grid lg={4} md={4}>
            <h5 className="sub-heading">Regional Metrics</h5>
            <div className="metrics-container">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div className="frame1">
                        <span>East</span>
                        <div className="small-yellow-dot"></div>
                    </div>
                    <div className="frame1">
                        <span>North</span>
                        <div className="small-green-dot"></div>
                    </div>
                    <div className="frame1">
                        <span>South</span>
                        <div className="small-orange-dot"></div>
                    </div>
                    <div className="frame1">
                        <span>West</span>
                        <div className="small-blue-dot"></div>
                    </div>
                </div>
                <div style={{position:"relative"}}>
                    <div className="west-region-data">
                        <img src={WestRegionData} alt="west-region-data"/>
                    </div>
                    <div className="north-region-data">
                        <img src={NorthRegionData} alt="north-region-data" />
                    </div>
                    <div className="south-region-data">
                        <img src={SouthRegionData} alt="south-region-data" />
                    </div>
                    <div className="east-region-data">
                        <img src={EastRegionData} alt="east-region-data" />
                    </div>
                    <div className="metrics-data-img-container">
                        <img width={200} src={Metrics} alt="metrics-data" />
                    </div>
                </div>
            </div>
        </Grid>
    </Grid>
  )
}

export default OnboardingSection