import React from "react";
import DriverModalCreate from "./driverModal/DriverModalCreate";
import UserModalCreate from "./userModal/UserModalCreate";
import DriverModalDelete from "./driverModal/DriverModalDelete";
import DriverModalUpdate from "./driverModal/DriverModalUpdate";
import DriverModalStatus from "./driverModal/DriverModalStatus";


const CombineModal = () => {




  return (
    <div>
      <DriverModalDelete />
      <DriverModalCreate />
      <DriverModalUpdate />
      <DriverModalStatus />
      <UserModalCreate />

    </div>
  );
};

export default   CombineModal;
