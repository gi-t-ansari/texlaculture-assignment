import { Box, Grid } from '@mui/material'
import React from 'react'
import "./PerformanceIndicator.css"


function PerformanceIndicator() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item lg={6} sm={12}>
          <h5 className='sub-heading'>Key Performance Indicator</h5>
          <div className='key-performance-sub-container'>
            <div className='navy-blue-border'>
              <p>Client Retention Rate</p>
              <h2>55%</h2>
            </div>
            <div className='light-blue-border'>
              <p>Client Satisfaction</p>
              <h2>55%</h2>
            </div>
            <div className='green-border'>
              <p>Revenue generated</p>
              <h2>55%</h2>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <h5 className='sub-heading'>Companies Status</h5>
          <div className='key-performance-sub-container'>
            <div className='navy-blue-border'>
                <p>Total</p>
                <h2>20</h2>
            </div>
            <div className='green-border'>
                <p>Active</p>
                <h2>15</h2>
            </div>
            <div className='light-blue-border'>
                <p>New</p>
                <h2>3</h2>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <h5 className='sub-heading'>Active User Base</h5>
          <div className='user-base-container'>
            <div style={{display:"flex", alignItems: "center", fontSize: "14px", gap: "10px"}}>
              <div className='blue-dot'></div>
              <span style={{marginRight: "15px"}}>89% App User</span>
              <div className='green-dot'></div>
              <span>11% Web User</span>
            </div>
            <div style={{display: "flex", marginTop: "20px", gap: "10px"}}>
              <div className='app-user'></div>
              <div className='web-user'></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PerformanceIndicator