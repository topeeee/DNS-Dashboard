import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {changeOperatorStatus, toggleOperatorModalSuspend} from "../../store/actions/operatorAction";
import {setComment} from "../../store/actions/commentAction";







function mapDispatchToProps(dispatch) {
  return {
    toggleOperatorModalSuspend: () => dispatch(toggleOperatorModalSuspend()),
    changeOperatorStatus: (id, status)=> dispatch(changeOperatorStatus(id, status)),
    setComment: (commentType, comment, userId, role) => dispatch(setComment(commentType, comment, userId, role))
  };
}

const mapStateToProps = state => ({
  OperatorModalSuspend: state.operator.OperatorModalSuspend,
  operatorSuspendId: state.operator.operatorSuspendId
});

const OperatorModalSuspend = (props) => {
  const {
    className,
    OperatorModalSuspend,
    toggleOperatorModalSuspend,
    operatorSuspendId,
    changeOperatorStatus,
    setComment
  } = props;

  const [formData, setFormData] = useState({comment: "", commentType: ""});
  // const [pin, setPin] = useState({});


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const {comment, commentType} = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    changeOperatorStatus(operatorSuspendId, '0');
    setComment(commentType, comment, operatorSuspendId, 'Operator');
    setFormData({comment: "", commentType: ""});
  };

  const toggle = () => {toggleOperatorModalSuspend()};

  return (
    <div>
      <Modal isOpen={OperatorModalSuspend} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Suspend Operator</ModalHeader>
        <ModalBody>
            <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="12">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Reason for suspension</Label>
                <Input type="textarea"  name="comment" onChange={onChange}  value={comment}  required/>
              </Col>
            </FormGroup>
              <FormGroup row>
                <Col md="12">
                  <Label for="name" className="font-weight-bold mb-0 text-info">Penalty</Label>
                  <Input type="text"  name="commentType" onChange={onChange} value={commentType}  required />
                </Col>
              </FormGroup>
              <div className="d-flex justify-content-md-end">
                <Button color="warning" type="submit" className="mr-1 float-right">Suspend</Button>
              </div>
            </Form>
            <div className="d-flex justify-content-md-end">
            </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(OperatorModalSuspend);

