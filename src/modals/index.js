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
import RefundModalCreate from "./paymentModal/RefundModalCreate";
import PromoModalCreate from "./paymentModal/PromoModalCreate";
import StateModalCreate from "./stateModal/StateModalCreate";
import StateModalDelete from "./stateModal/StateModalDelete";
import ZoneModalCreate from "./zoneModal/ZoneModalCreate";
import ZoneModalDelete from "./zoneModal/ZoneModalDelete";
import RouteModalCreate from "./routeModal/RouteModalCreate";
import RouteModalDelete from "./routeModal/RouteModalDelete";


const CombineModal = () => {
  return (
    <div>
      <RouteModalDelete />
      <RouteModalCreate />
      <ZoneModalDelete />
      <ZoneModalCreate />
      <StateModalDelete />
      <StateModalCreate />
      <PromoModalCreate />
      <RefundModalCreate />
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
