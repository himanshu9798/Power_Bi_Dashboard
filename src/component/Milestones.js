// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Typography from '@mui/material/Typography';

// const steps = [
//   { label: '$2400, Design changes', description: '22 DEC 7:20 PM' },
//   { label: 'New order #1832412', description: '21 DEC 11 PM' },
//   { label: 'Server payments for April', description: '21 DEC 9:34 PM' },
//   { label: 'New card added for order #4395133', description: '20 DEC 2:20 AM' },
//   { label: 'New card added for order #4395133', description: '18 DEC 4:54 AM' },
// ];

// export default function Milestones() {
//   return (
//     <Box sx={{ maxWidth: 400, padding: 2, }}>
//       <Stepper orientation="vertical">
//         {steps.map((step) => (
//           <Step key={step.label}>
//             <StepLabel>
//               <Box>
//                 {/* Label with black color and font size 15px */}
//                 <Typography 
//                   variant="" 
//                   sx={{ fontWeight: 'bold', color: 'black', fontSize: '12px' }}
//                 >
//                   {step.label}
//                 </Typography>
//                 {/* Description with gray color and font size 10px */}
//                 <Typography 
//                   variant="body2" 
//                   sx={{ color: 'gray', fontSize: '10px',marginBottom:"2px" }}
//                 >
//                   {step.description}
//                 </Typography>
//               </Box>
//             </StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faShoppingCart, faServer, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { CiLineHeight } from "react-icons/ci";
import { Float } from "@chakra-ui/react";

const timelineData = [
  { title: "$2400, Design changes", date: "22 DEC 7:20 PM", icon: faDollarSign, color: "#FF5733" },
  { title: "New order #1832412", date: "21 DEC 11 PM", icon: faShoppingCart, color: "#33B5FF" },
  { title: "Server payments for April", date: "21 DEC 9:34 PM", icon: faServer, color: "#28A745" },
  { title: "New card added for order #4395133", date: "20 DEC 2:20 AM", icon: faCreditCard, color: "#FFC107" },
  { title: "New card added for order #4395133", date: "18 DEC 4:54 AM", icon: faCreditCard, color: "#6F42C1" }
];

const Milestones = () => {
  return (
    <div style={styles.timeline}>
      {timelineData.map((item, index) => (
        <div key={index} style={styles.timelineItem}>
          {/* Vertical Line */}
          {index !== timelineData.length - 1 && <div style={styles.verticalLine}></div>}
          
          {/* Icon inside Circle */}
          <div style={{ ...styles.iconContainer, backgroundColor: item.color }}>
            <FontAwesomeIcon icon={item.icon} style={styles.icon} />
          </div>

          {/* Text Content */}
          <div style={styles.textContainer}>
            <div style={styles.title}>{item.title}</div>
            <div style={styles.date}>{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  timeline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "20px",
    position: "relative",
    lineHeight:"25px"
  
  },
  timelineItem: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginBottom: "20px"
  },
  verticalLine: {
    position: "absolute",
    width: "2px",
    backgroundColor: "#ddd",
    top: "45px",
    bottom: "-25px",
    left: "18px"
  },
  iconContainer: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    zIndex: 1
  },
  icon: {
    color: "#fff",
    fontSize: "14px"
  },
  textContainer: {
   position:"relative",
   top:"10px"
  },
  title: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#000"
  },
  date: {
    fontSize: "10px",
    color: "#555",
    textAlign:"left",
  }
};

export default Milestones;
