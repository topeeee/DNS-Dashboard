import React from "react";
import DriverModalCreate from "./driverModal/DriverModalCreate";
import UserModalCreate from "./userModal/UserModalCreate";
import DriverModalDelete from "./driverModal/DriverModalDelete";
import DriverModalUpdate from "./driverModal/DriverModalUpdate";
import DriverModalStatus from "./driverModal/DriverModalStatus";
import BusAssistantModalCreate from "./busAssistantModal/BusAssistantModalCreate";
import BusAssistantModalDelete from "./busAssistantModal/BusAssistantModalDelete";
import BusAssistantModalStatus from "./busAssistantModal/BusAssistantModalStatus";
import BusAssistantModalUpdate from "./busAssistantModal/BusAssistantModalUpdate";


const CombineModal = () => {




  return (
    <div>
      <BusAssistantModalUpdate />
      <BusAssistantModalStatus />
      <BusAssistantModalDelete />
      <BusAssistantModalCreate />
      <DriverModalDelete />
      <DriverModalCreate />
      <DriverModalUpdate />
      <DriverModalStatus />
      <UserModalCreate />

    </div>
  );
};

export default   CombineModal;
