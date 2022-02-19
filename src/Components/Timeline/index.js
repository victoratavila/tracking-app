import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StartIcon from '@mui/icons-material/Start';
import './styles.css';

export default function CustomizedTimeline(props) {

  return (

   <div>
      {props.elements.map(result => {

        return (
          <Timeline position="right" key={result.hora}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          style={{ maxWidth: "495px", paddingLeft: '0px', paddingRight: '0px' }}
        >
         <i className='date'>{result.data} <i className='hour'>{result.hora}</i> </i>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color={result.status === 'Objeto entregue ao destinatário' ? 'success' : 'warning'}>
           
            {result.status === 'Objeto entregue ao destinatário' ? <CheckCircleOutlineIcon/> : <LocalShippingIcon /> }

          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {result.status}
          </Typography>
          <Typography>{result.local}</Typography>
        </TimelineContent>
      </TimelineItem>
     
    </Timeline>
        )
      })}


   </div>

 
  );
}
