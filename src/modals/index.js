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
import PartnerModalCreate from "./partnerModal/PartnerModalCreate";
import PartnerModalUpdate from "./partnerModal/PartnerModalUpdate";
import OperatorModalSuspend from "./operatorModal/OperatorModalSuspend";
import OperatorModalReactivate from "./operatorModal/OperatorModalReactivate";
import DriveModalFlag from "./driverModal/DriverModalFlag";
import DriverModalFlagDetails from "./driverModal/DriverModalFlagDetails";
import ServiceModalUpdate from "./serviceModal/ServiceModalUpdate";
import ServiceModalCreate from "./serviceModal/ServiceModalCreate";
import TrainLineModalCreate from "./trainLineModal/TrainLineModalCreate";
import TrainLineModalUpdate from "./trainLineModal/TrainLineModalUpdate";
import TrainStopModalUpdate from "./trainStopModal/TrainStopModalUpdate";
import TrainStopModalCreate from "./trainStopModal/TrainStopModalCreate";
import FerryStopModalUpdate from "./ferryStopModal/FerryStopModalUpdate";
import FerryStopModalCreate from "./ferryStopModal/FerryStopModalCreate";
import LamataServiceModalCreate from "./serviceModal/LamataServiceModalCreate";
import LamataModeModalCreate from "./operatorModal/LamataModeModalCreate";
import OperatorModalApprove from "./operatorModal/LamataOperatorModalApprove";


const CombineModal = () => {
  return (
    <div>
      <PartnerModalUpdate />
      <PartnerModalCreate />
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
     <OperatorModalSuspend />
     <OperatorModalReactivate />
     <DriveModalFlag />
     <DriverModalFlagDetails />
     <ServiceModalUpdate />
     <ServiceModalCreate />
     <TrainLineModalCreate />
     <TrainLineModalUpdate />
     <TrainStopModalUpdate />
     <TrainStopModalCreate />
     <FerryStopModalUpdate />
     <FerryStopModalCreate />
     <LamataServiceModalCreate />
     <LamataModeModalCreate />
     <OperatorModalApprove />
    </div>
  );
};

export default   CombineModal;
