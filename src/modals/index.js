import React from "react";
import DriverModalCreate from "./driverModal/DriverModalCreate";
import BusAssistantModalCreate from "./busAssistantModal/BusAssistantModalCreate";
import BusAssistantModalUpdate from "./busAssistantModal/BusAssistantModalUpdate";
import RefundModalCreate from "./paymentModal/RefundModalCreate";
import PromoModalCreate from "./paymentModal/PromoModalCreate";
import StateModalCreate from "./stateModal/StateModalCreate";
import StateModalDelete from "./stateModal/StateModalDelete";
import ZoneModalCreate from "./zoneModal/ZoneModalCreate";
import ZoneModalUpdate from "./zoneModal/ZoneModalUpdate";
import RouteModalCreate from "./routeModal/RouteModalCreate";
import RouteModalUpdate from "./routeModal/RouteModalUpdate";
import BusStopModalCreate from "./busStopModal/BusStopModalCreate";
import BusStopModalUpdate from "./busStopModal/BusStopModalUpdate";
import VehicleModalDelete from "./vehicleModal/VehicleModalDelete";
import VehicleModalCreate from "./vehicleModal/VehicleModalCreate";
import ModeModalUpdate from "./modeModal/ModeModalUpdate";
import ModeModalCreate from "./modeModal/ModeModalCreate";
import AreaModalCreate from "./areaModal/AreaModalCreate";
import AreaModalUpdate from "./areaModal/AreaModalUpdate";
import OperatorModalCreate from "./operatorModal/OperatorModalCreate";
import OperatorModalUpdate from "./operatorModal/OperatorModalUpdate";
import VehicleModalUpdate from "./vehicleModal/VehicleModalUpdate";
import DriverModalUpdate from "./driverModal/DriverModalUpdate";


const CombineModal = () => {
  return (
    <div>
      <DriverModalUpdate />
      <VehicleModalUpdate />
      <OperatorModalUpdate />
      <OperatorModalCreate />
      <AreaModalUpdate />
      <AreaModalCreate />
      <ModeModalCreate />
      <ModeModalUpdate />
      <VehicleModalCreate />
      <VehicleModalDelete />
      <BusStopModalUpdate />
      <BusStopModalCreate />
      <RouteModalUpdate />
      <RouteModalCreate />
      <ZoneModalUpdate />
      <ZoneModalCreate />
      <StateModalDelete />
      <StateModalCreate />
      <PromoModalCreate />
      <RefundModalCreate />
      <BusAssistantModalUpdate />
      <BusAssistantModalCreate />
     <DriverModalCreate />
    </div>
  );
};

export default   CombineModal;
