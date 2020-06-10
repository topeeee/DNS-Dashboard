import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleAreaModalCreate, createArea} from "../../store/actions/areaAction";
import {ZoneUser} from "../../store/actions/zoneAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleAreaModalCreate: () => dispatch(toggleAreaModalCreate()),
    createArea: (xareacode, xarea, zonecode) => dispatch(createArea(xareacode, xarea, zonecode)),
    zoneUser: () => dispatch(ZoneUser()),

  };
}

const mapStateToProps = state => ({
  areaModalCreate: state.area.AreaModalCreate,
  zones: state.zone.zones,
  isAuthenticated: state.auth.isAuthenticated,

});

const AreaModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    toggleAreaModalCreate,
    areaModalCreate,
    createArea,
    zones,
    isAuthenticated,
    zoneUser
  } = props;

  useEffect(()=> {
    if(isAuthenticated) {
      zoneUser();
    }
  }, []);

  const [formData, setFormData] = useState({xareacode: "", xarea: "", zonecode: ""});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { xareacode, xarea, zonecode } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createArea(xareacode, xarea, zonecode);
    setFormData({xareacode: "", xarea: "", zonecode: ""})

  };

  const toggle = () => {toggleAreaModalCreate()};

  return (
    <div>
      <Modal isOpen={ areaModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Area</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">Area Code</Label>
              <Input
                type="text"
                name="xareacode"
                value={xareacode}
                onChange={onChange}
                required
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1 text-info">Area</Label>
              <Input
                type="text"
                name="xarea"
                value={xarea}
                onChange={onChange}
                required
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1 text-info">Zone Code</Label>
              <Input
                style={{cursor: 'pointer'}}
                type="select"
                name="zonecode"
                value={zonecode}
                onChange={onChange}
                required>
                <option value="">Select Zone</option>
                {zones &&  zones.map((zone, index) =>
                  <option value={zone.zone} key={index}>{zone.zone}</option>
                )}
              </Input>
            </FormGroup>
            <div className="d-flex justify-content-md-end">
              <Button color="primary" type="submit" className="mr-1" >Submit</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(AreaModalCreate);

