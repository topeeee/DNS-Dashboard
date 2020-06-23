import React from 'react';
import {  CardHeader, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faPrint, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';



const PrimaryHeader = ()=> {

  const handleEvent = (event, picker) => {
    console.log(picker.startDate);
  };
  return (
    <div>
      <CardHeader className="bg-secondary d-flex">
              <div className="w-75 d-flex align-items-center ">
                <Input type="text"  className="w-25"/>
                <button className="btn btn-success">Search</button>
                {/*<DateRangePicker onApply={handleEvent}>*/}
                {/*  <button className="btn btn-instagram ml-2">Filter by Date</button>*/}
                {/*</DateRangePicker>*/}
              </div>
              <div className="w-25 text-right">
                <FontAwesomeIcon className="text-warning py-2" title="Print" style={{fontSize: 40,  cursor: "pointer"}} icon={faPrint} onClick={()=> window.print()} />
                <FontAwesomeIcon className="text-primary py-2" title="Send to Email" style={{fontSize: 40,  cursor: "pointer"}} icon={faEnvelopeSquare} />
                <FontAwesomeIcon className="text-danger py-2" title="Download Pdf" style={{fontSize: 40,  cursor: "pointer"}} icon={faFilePdf} />
              </div>
      </CardHeader>
    </div>
  )

};

export default PrimaryHeader;
