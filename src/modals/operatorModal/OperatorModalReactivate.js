import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Button, Modal, ModalBody, ModalHeader, Card, CardText, CardTitle, Label} from 'reactstrap';
import {connect} from "react-redux";
import {changeOperatorStatus, toggleOperatorModalReactivate} from "../../store/actions/operatorAction";
import api from "../../environments/environment";
import {deleteComment} from "../../store/actions/commentAction";








function mapDispatchToProps(dispatch) {
  return {
    toggleOperatorModalReactivate: () => dispatch(toggleOperatorModalReactivate()),
    changeOperatorStatus: (id, status)=> dispatch(changeOperatorStatus(id, status)),
    deleteComment: (id)=> dispatch(deleteComment(id))
  };
}

const mapStateToProps = state => ({
  OperatorModalReactivate: state.operator.OperatorModalReactivate,
  operatorReactivateId: state.operator.operatorReactivateId
});

const OperatorModalReactivate = (props) => {
  const {
    className,
    OperatorModalReactivate,
    toggleOperatorModalReactivate,
    operatorReactivateId,
    changeOperatorStatus,
    deleteComment
  } = props;

  const [formData, setFormData] = useState({comment: "", commentType: "", commentId: ""});
  const [isLoading, setIsLoading] = useState(true)
  // const [pin, setPin] = useState({});


  async function getComment() {
    try {
      const res = await axios.get(`${api.comment}/api/query/comments?role=Operator&userId=${operatorReactivateId}`)
      setFormData({comment: res.data[0].comment, commentType: res.data[0].commentType, commentId: res.data[0].id})
      setIsLoading(false)
    }catch (e) {}
  }

  const onSubmit = async () => {
   try {
     await changeOperatorStatus(operatorReactivateId, '1');
     await deleteComment(formData.commentId)
     await setFormData({comment: "", commentType: "", commentId: ""});
     setIsLoading(true);
   }catch (e) {}
  };

  useEffect(()=> {
    if(operatorReactivateId !== "") {
      getComment()
    }
  }, [operatorReactivateId])
  const toggle = () => {toggleOperatorModalReactivate()};


  return (
    <div>
      <Modal isOpen={OperatorModalReactivate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Reactivate Operator</ModalHeader>
        <ModalBody>
          <div>
            <div className="text-primary">Reason for suspension:</div>
            <Card body>
              {isLoading? 'loading..': <CardText>{formData.comment}</CardText>}
            </Card>
            <div className="text-primary">Penalty:</div>
            <Card body>
              {isLoading? 'loading..': <CardText>{formData.commentType}</CardText>}
            </Card>
          </div>
          <div className="d-flex justify-content-md-end">
            <Button color="success" type="button" className="mr-1 float-right" onClick={onSubmit}>Reactivate</Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(OperatorModalReactivate);

