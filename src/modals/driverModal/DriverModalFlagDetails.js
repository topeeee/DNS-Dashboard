import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Button, Modal, ModalBody, ModalHeader, Card, CardText, CardTitle, Label} from 'reactstrap';
import {connect} from "react-redux";
import api from "../../environments/environment";
import {toggleDriverModalFlagDetails} from "../../store/actions/driverAction";
import Spinner from "../../spinner/Spinner";








function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalFlagDetails: () => dispatch(toggleDriverModalFlagDetails()),
  };
}

const mapStateToProps = state => ({
  DriverModalFlagDetails: state.driver.DriverModalFlagDetails,
  flaggedDetailsDriverId: state.driver.flaggedDetailsDriverId
});

const DriverModalFlagDetails = (props) => {
  const {
    className,
    DriverModalFlagDetails,
    toggleDriverModalFlagDetails,
    flaggedDetailsDriverId,
  } = props;

 const [flag, setFlag] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // const [pin, setPin] = useState({});


  async function getComment() {
    try {
      const res = await axios.get(`${api.comment}/api/query/comments?role=Driver&userId=${flaggedDetailsDriverId}`)
      setFlag(res.data)
      setIsLoading(false)
    }catch (e) {}
  }


  useEffect(()=> {
    if(flaggedDetailsDriverId !== "") {
      getComment()
    }
  }, [flaggedDetailsDriverId])
  const toggle = () => {toggleDriverModalFlagDetails(); setIsLoading(true)};


  return (
    <div>
      <Modal isOpen={DriverModalFlagDetails} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">DriverId: {flaggedDetailsDriverId}</ModalHeader>
        {isLoading && <Spinner />}
        {!isLoading &&
        <ModalBody>
        <div className="text-primary pb-1">Reason(s) for Flagging:</div>
          {(flag.length > 0) && flag.map(flagComment=> (
          <Card body>
          <CardText><span className="text-primary">Date:</span> {new Date(flagComment.timestamp).toLocaleString()}</CardText>
          <CardText><span className="text-primary">Comment:</span> {flagComment.comment}</CardText>
          </Card>
          ))}
          </ModalBody>
        }
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriverModalFlagDetails);

