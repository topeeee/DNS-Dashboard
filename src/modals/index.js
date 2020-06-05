import React from "react";
import DriverModalCreate from "./driverModal/DriverModalCreate";
import DriverModalDelete from "./driverModal/DriverModalDelete";
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
import BusStopModalCreate from "./busStopModal/BusStopModalCreate";
import BusStopModalDelete from "./busStopModal/BusStopModalDelete";
import TripModalCreate from "./tripModal/TripModalCreate";
import TripModalDelete from "./tripModal/TripModalDelete";
import UserModalDelete from "./userModal/UserModalDelete";
import UserModalCreate from "./userModal/UserModalCreate";
import BookingModalDelete from "./bookingModal/BookingModalDelete";
import BookingModalCreate from "./bookingModal/BookingModalCreate";
import VehicleModalDelete from "./vehicleModal/VehicleModalDelete";
import VehicleModalCreate from "./vehicleModal/VehicleModalCreate";
import ModeModalDelete from "./modeModal/ModeModalDelete";
import ModeModalCreate from "./modeModal/ModeModalCreate";
import DriverLoggingModalCreate from "./driverLoggingModal/DriverLoggingModalCreate";
import DriverLoggingModalDelete from "./driverLoggingModal/DriverLoggingModalDelete";
import AreaModalCreate from "./areaModal/AreaModalCreate";
import AreaModalDelete from "./areaModal/AreaModalDelete";


const CombineModal = () => {
  return (
    <div>
      <AreaModalDelete />
      <AreaModalCreate />
      <DriverLoggingModalDelete />
      <DriverLoggingModalCreate />
      <ModeModalCreate />
      <ModeModalDelete />
      <VehicleModalCreate />
      <VehicleModalDelete />
      <BookingModalCreate />
      <BookingModalDelete />
      <UserModalDelete />
      <UserModalCreate />
      <TripModalDelete />
      <TripModalCreate />
      <BusStopModalDelete />
      <BusStopModalCreate />
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
    </div>
  );
};

export default   CombineModal;
