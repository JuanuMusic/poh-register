import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import { styled } from '@mui/material/styles';
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
// import { StepIconProps } from '@mui/material/StepIcon';

// const ColorlibIcon = withStyles({
// 	root: {
// 	   background: #FFFFFF,
// 	   /* Light Mode/Stroke */
//            border: 1px solid #E5E5E5,
//            box-sizing: border-box,	
// 	   color: #FFFFF,
// 	},
// 	active: {
// 	   color: #FF9900,
// 	},
// 	completed: {
// 	   color: #FF9900,
// 	},

// })(StepIcon);

// const ColorlibConnector = withStyles({
// 	root: {
// 	   background: #FFFFFF,
// 	   border: 1px solid #E5E5E5,
//      box-sizing: border-box,	
// 	   color: #FFFFF,
// 	},
// 	active: {
// 	   color: #FF9900,
// 	},
// 	completed: {
// 	   color: #FF9900,
// 	},

// })(StepIconConnector);

const steps = [
  'Create Profile',
  'Upload Photo',
  'Upload Video',
  'Preview',
];

export default function HorizontalLabelPositionBelowStepper({currentStep }) {
  return (
    
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={0} >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel  >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}