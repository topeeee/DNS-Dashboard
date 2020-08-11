import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {setComment} from "../../store/actions/commentAction";
import {changeDriverStatus, toggleDriverModalFlag} from "../../store/actions/driverAction";







function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalFlag: () => dispatch(toggleDriverModalFlag()),
    changeDriverStatus: (id, status)=> dispatch(changeDriverStatus(id, status)),
    setComment: (commentType, comment, userId, role) => dispatch(setComment(commentType, comment, userId, role))
  };
}

const mapStateToProps = state => ({
  DriverModalFlag: state.driver.DriverModalFlag,
  flaggedDriverId: state.driver.flaggedDriverId
});

const DriveModalFlag= (props) => {
  const {
    className,
    DriverModalFlag,
    toggleDriverModalFlag,
    flaggedDriverId,
    changeDriverStatus,
    setComment
  } = props;

  const [formData, setFormData] = useState({comment: "", commentType: ""});
  // const [pin, setPin] = useState({});


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const {comment, commentType} = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    changeDriverStatus(flaggedDriverId, '3');
    setComment(commentType, comment, flaggedDriverId, 'Driver');
    setFormData({comment: "", commentType: ""});
  };

  const toggle = () => {toggleDriverModalFlag()};

  return (
    <div>
      <Modal isOpen={DriverModalFlag} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Flag Driver</ModalHeader>
        <ModalBody>
            <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="12">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Reason for Flagging</Label>
                <Input type="textarea"  name="comment" onChange={onChange}  value={comment}  required/>
              </Col>
            </FormGroup>
              <div className="d-flex justify-content-md-end">
                <Button color="warning" type="submit" className="mr-1 float-right">Flag</Button>
              </div>
            </Form>
            <div className="d-flex justify-content-md-end">
            </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriveModalFlag);

