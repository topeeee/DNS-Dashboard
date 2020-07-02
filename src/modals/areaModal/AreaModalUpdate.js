import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleAreaModalUpdate, updateArea} from "../../store/actions/areaAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleAreaModalUpdate: () => dispatch(toggleAreaModalUpdate()),
    updateArea: (id, xareacode, xarea, zonecode) => dispatch(updateArea(id, xareacode, xarea, zonecode))
  };
}

const mapStateToProps = state => ({
  AreaModalUpdate: state.area.AreaModalUpdate,
  id: state.area.updateID,
  zones: state.zone.zones,
  areas: state.area.areas,

});

const AreaModalUpdate = (props)=> {
  const {
    className,
    toggleAreaModalUpdate,
    AreaModalUpdate,
    id,
    updateArea,
    zones,
    areas
  } = props;

  const [formData, setFormData] = useState({xareacode: "", xarea: "", zonecode: ""});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { xareacode, xarea, zonecode } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateArea(id, xareacode, xarea, zonecode);
    setFormData({xareacode: "", xarea: "", zonecode: ""})

  };

  useEffect(()=> {
    if(areas && id) {
      areas.map(area=> {
        if(area.id  === id) {
          setFormData({xareacode: area.xareacode, xarea: area.xarea, zonecode: area.zonecode})
        }
      })
    }
  },[areas, id]);

  const toggle = () => {toggleAreaModalUpdate()};

  return (
    <div>
      <Modal isOpen={AreaModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Area</ModalHeader>
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

export default  connect( mapStateToProps, mapDispatchToProps)(AreaModalUpdate);

