import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Search from '../component/Search';
import { useState } from 'react';

export default function Notisfication() {
  const [clickedAlert, setClickedAlert] = useState('');

  // Handle alert click
  const handleAlertClick = (message) => {
    setClickedAlert(message); // Update state with the clicked message
    alert(message); // Show alert with the same message
  };
  return (
    <>
    <Header></Header>
    <div >
        <Search main="Notification" secondmains="Notification"></Search>
      </div>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <div style={{marginLeft:"300px",backgroundColor:"white",padding:"10px",alignItems:"center",justifyContent:"center",display:"flex"}}>

      <Stack sx={{ width: '90%' }} spacing={2}>
      <Alert
        variant="filled"
        severity="success"
        sx={{ backgroundColor: '#4caf50', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: Task Completed Successfully!")}
      >
        Power BI Alert: Task Completed Successfully!
      </Alert>
      <Alert
        variant="filled"
        severity="info"
        sx={{ backgroundColor: '#2196f3', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: New Data Available for Analysis.")}
      >
        Power BI Alert: New Data Available for Analysis.
      </Alert>
      <Alert
        variant="filled"
        severity="warning"
        sx={{ backgroundColor: '#ff9800', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: Warning! Data Inconsistency Detected.")}
      >
        Power BI Alert: Warning! Data Inconsistency Detected.
      </Alert>
      <Alert
        variant="filled"
        severity="error"
        sx={{ backgroundColor: '#f44336', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: Error! Data Load Failed.")}
      >
        Power BI Alert: Error! Data Load Failed.
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        sx={{ backgroundColor: '#8bc34a', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: Report Generation Completed Successfully.")}
      >
        Power BI Alert: Report Generation Completed Successfully.
      </Alert>
      <Alert
        variant="filled"
        severity="info"
        sx={{ backgroundColor: '#03a9f4', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: Data Refresh Scheduled for Tonight.")}
      >
        Power BI Alert: Data Refresh Scheduled for Tonight.
      </Alert>
      <Alert
        variant="filled"
        severity="warning"
        sx={{ backgroundColor: '#ffeb3b', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: Warning! High Memory Usage Detected.")}
      >
        Power BI Alert: Warning! High Memory Usage Detected.
      </Alert>
      <Alert
        variant="filled"
        severity="error"
        sx={{ backgroundColor: '#d32f2f', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: Critical Error! Server Timeout.")}
      >
        Power BI Alert: Critical Error! Server Timeout.
      </Alert>
      <Alert
        variant="filled"
        severity="info"
        sx={{ backgroundColor: '#00bcd4', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: New Dataset Successfully Added.")}
      >
        Power BI Alert: New Dataset Successfully Added.
      </Alert>
      <Alert
        variant="filled"
        severity="warning"
        sx={{ backgroundColor: '#ff5722', cursor: 'pointer' }}
        onClick={() => handleAlertClick("Power BI Alert: Warning! Low Disk Space on Server.")}
      >
        Power BI Alert: Warning! Low Disk Space on Server.
      </Alert>

      {/* Displaying the clicked alert message in an alert box */}
      {clickedAlert && (
        <Alert variant="filled" severity="info">
          {clickedAlert}
        </Alert>
      )}
    </Stack>
    </div>
    <Footer></Footer>
    </>
  );
}
