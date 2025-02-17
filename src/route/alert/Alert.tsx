// import TableGrid from "../../components/table-grid";
import SelectUserTable from "./selectUserTable";
import {
  MagnifyingGlass,
  X,
  CaretCircleUp,
  CaretCircleDown,
} from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
// import RadioButtonComponent from "../../components/RadioButtonComponent";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import GridLayoutComponent from "../../components/grid/GridLayoutComponent";

const Alert = () => {
  const [searchAlert, setSearchAlert] = useState<string>();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const [isTimeBased, setIsTimeBased] = useState<boolean>(true);
  const [timeField, setTimeField] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [step, setStep] = useState<string>("");
  const [changingField, setChangingField] = useState<Date>();
  const [sendingChannel, setSendingChannel] = useState<string>("");
  const [receiver, setReceiver] = useState<string>("");
  const [alertText, setAlertText] = useState<string>("");

  const [selectedRow, setSelectedRow] = useState({
    sched: "",
    field: "",
    duration: "",
    channel: "",
    alertText: "",
    receiver: "",
  });

  const [alerts, setAlert] = useState([
    {
      sched: "08:00 AM",
      field: "Temperature",
      duration: "30m",
      channel: "Email",
      alertText: "High temp detected",
      receive: "Admin",
    },
    {
      sched: "09:30 AM",
      field: "Humidity",
      duration: "1h",
      channel: "SMS",
      alertText: "Humidity above threshold",
      receive: "Technician",
    },
    {
      sched: "11:00 AM",
      field: "Pressure",
      duration: "45m",
      channel: "Push",
      alertText: "Pressure drop detected",
      receive: "Operator",
    },
    {
      sched: "01:00 PM",
      field: "Voltage",
      duration: "15m",
      channel: "Email",
      alertText: "Voltage spike detected",
      receive: "Supervisor",
    },
    {
      sched: "02:30 PM",
      field: "Current",
      duration: "20m",
      channel: "SMS",
      alertText: "Current fluctuation",
      receive: "Engineer",
    },
    {
      sched: "03:45 PM",
      field: "Battery",
      duration: "40m",
      channel: "Push",
      alertText: "Battery low warning",
      receive: "Manager",
    },
    {
      sched: "05:00 PM",
      field: "Gas Levels",
      duration: "50m",
      channel: "Email",
      alertText: "Gas leakage detected",
      receive: "Safety Officer",
    },
    {
      sched: "06:15 PM",
      field: "Flow Rate",
      duration: "30m",
      channel: "SMS",
      alertText: "Flow rate anomaly",
      receive: "Technician",
    },
    {
      sched: "07:30 PM",
      field: "Speed",
      duration: "10m",
      channel: "Push",
      alertText: "Over speed warning",
      receive: "Driver",
    },
    {
      sched: "09:00 PM",
      field: "Connectivity",
      duration: "25m",
      channel: "Email",
      alertText: "Network disconnect",
      receive: "IT Support",
    },
  ]);

  // useEffect(() => {
  //   if (selectedRow.followUpType != "") {
  //     setIsAccordionOpen(true);
  //     if (selectedRow.followUpType == "Dynamic Date") {
  //       setIsDynamicDate(true);
  //     } else {
  //       setIsDynamicDate(false);
  //     }
  //   }
  // }, []);

  const alertOptions = [
    "creationDate",
    "sendDate",
    "completionDate",
    "dueDate",
  ];
  const sendingChannelOptions = ["SMS", "Email"];

  const recievers = [
    "Ali",
    "MMD",
    "Mhdi",
    "Reza",
    "Sina",
    "Hassan",
    "Amir",
    "Hossein",
    "Javad",
    "Mostafa",
    "Ehsan",
    "Sadegh",
    "Omid",
    "Yasin",
    "Arman",
  ];

  const columnDef = [
    { field: "field", header: "field" },
    { field: "sched", header: "sched" },
    { field: "duration", header: "duration" },
    { field: "channel", header: "channel" },
    { field: "alertText", header: "alertText" },
    { field: "receive", header: "receive" },
  ];

  const changeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchAlert(e.target.value);
  };

  const changeTimeField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    console.log("EEE", e.target.value);

    setTimeField(e.target.value);
  };

  const changeDuraiton = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setDays(e.target.value);
  };

  const changeChangingField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    console.log(e);

    setChangingField(e.target.value);
  };

  const changeStep = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setStep(e.target.value);
  };

  const changeSendingChannel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setSendingChannel(e.target.value);
  };

  const changeReceiver = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setReceiver(e.target.value);
  };

  const changeAlertText = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setAlertText(e.target.value);
  };

  const handleAdd = () => {
    if (alerts.followUpType == "" || alerts.form == "") {
      return;
    }
    setTimeField("");
    setAlertText("");
    setChangingField("");
    setStep("");
    setDays("");
    setAlert([
      ...alerts,
      {
        sched: isTimeBased ? "" : "",
        field: timeField,
        duration: days ?? step,
        channel: sendingChannel,
        alertText: alertText,
        receive: receiver,
      },
    ]);

    setIsAccordionOpen(false);
  };

  const handleCancel = () => {
    setTimeField("");
    setAlertText("");
    setChangingField("");
    setStep("");
    setReceiver("");
    setDays("");
    setSelectedRow({
      sched: "",
      field: "",
      duration: "",
      channel: "",
      alertText: "",
      receiver: "",
    });
    setIsAccordionOpen(false);
  };

  const handleSelectRole = (e: any, data: any) => {
    setIsDialogOpen(e);

    if (data != "null") {
      alert(
        `SelectedUser \n\nname: ${data.name} ${data.family} \nrole: ${data.role} \nenterprise: ${data.enterprise} \nsuperintede: ${data.superintede} `
      );
    } else {
      alert("Nothing Selected");
    }
  };

  return (
    <div className="mb-96 p-4 relative">
      {isDialogOpen && (
        <div className="fixed ml-10 mt-10 top-0 left-0  text-center py-2 z-50 p-6 bg-white rounded-md shadow-lg mx-auto w-1/2">
          <div className="flex justify-end w-full">
            <X
              color="Black"
              weight="bold"
              size={25}
              onClick={() => setIsDialogOpen(false)}
            />
          </div>
          <SelectUserTable onClick={handleSelectRole} />
          {/* <button
            onClick={() => setIsDialogOpen(false)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button> */}
        </div>
      )}
      <div className="font-bold mb-4">Existing Alerts:</div>
      <section>
        <div className="border-black border">
          {isSearch && (
            <div className="flex justify-between items-center gap-2 bg-[#2a579a] text-white font-semibold py-2 pl-2 pr-5">
              <div className="flex gap-5 items-center">
                <div>Full Text Search</div>
                <div className="flex items-center border-b border-black text-white text-sm">
                  <input
                    type="text"
                    name="search"
                    className="border-none focus:outline-none h-6 focus:ring-0"
                    value={searchAlert}
                    onChange={(e) => changeSearchBar(e)}
                    onSubmit={() => {}}
                  />
                  <X size={20} onClick={() => setSearchAlert("")} />
                </div>
              </div>
              <X color="Black" size={20} onClick={() => setIsSearch(false)} />
            </div>
          )}
          <div className="bg-[#2a579a] text-white font-semibold py-2 pl-2 pr-5 flex items-center justify-between">
            Alert
            {/* Drag a column header and drop it here to group by that column */}
            <MagnifyingGlass
              color="Black"
              size={20}
              onClick={() => setIsSearch(!isSearch)}
            />
          </div>

          <DataTable
            value={alerts}
            showGridlines
            stripedRows
            selectionMode={"single"}
            onSelectionChange={(e) => {
              setIsAccordionOpen(true);
              console.log("SELECTED ROW", e);

              console.log("start .....");
              if (e.value == selectedRow) {
                return;
              } else {
                setSelectedRow(e.value);
              }
            }}
            // onDoubleClick={(e) => {
            //   e.preventDefault();
            //   // setForm("");
            //   // setDuration("");
            //   // setDateFixDate("");
            //   // setSendingChannel("");
            //   // setAlertText("");
            // }}
            selection={selectedRow}
          >
            {columnDef.map((column) => (
              <Column field={column.field} header={column.header}></Column>
            ))}
          </DataTable>
        </div>
        <div className="flex item-center justify-end m-2 ">
          <Button severity="primary" disabled>
            Delete
          </Button>
        </div>
      </section>

      {/* //! follow up schedule */}
      <section>
        <div className="flex items-center gap-1 select-none">
          {isAccordionOpen ? (
            <CaretCircleUp
              size={30}
              onClick={() => {
                setTimeField("");
                setAlertText("");
                setChangingField("");
                setReceiver("");
                setStep("");
                setDays("");
                setAlert([
                  ...alerts,
                  {
                    sched: isTimeBased ? "" : "",
                    field: timeField,
                    duration: days ?? step,
                    channel: sendingChannel,
                    alertText: alertText,
                    receive: receiver,
                  },
                ]);
                setSelectedRow({
                  sched: "",
                  field: "",
                  duration: "",
                  channel: "",
                  alertText: "",
                  receiver: "",
                });
                setIsAccordionOpen(false);
              }}
            />
          ) : (
            <CaretCircleDown
              size={30}
              onClick={() => {
                setIsAccordionOpen(true);
              }}
            />
          )}
          {isAccordionOpen ? "Cancel" : "New"}
        </div>
        {/* //! Dynamic Date */}
        {/* {isAccordionOpen && ( */}
        <div
          className={`bg-white transition-all duration-500 ease-linear overflow-hidden ${
            isAccordionOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <GridLayoutComponent
            title="follow up schedule"
            icons={
              <X
                size={20}
                onClick={() => {
                  setTimeField("");
                  setAlertText("");
                  setChangingField("");
                  setDays("");
                  setStep("");
                  setReceiver("");
                  setSelectedRow({
                    sched: "",
                    field: "",
                    duration: "",
                    channel: "",
                    alertText: "",
                    receiver: "",
                  });
                  setIsTimeBased(true);
                }}
              />
            }
          >
            <div className="flex gap-1 items-center text-sm cursor-pointer">
              <input
                type="radio"
                name="timeBased"
                value="timeBased"
                checked={isTimeBased}
                onClick={() => setIsTimeBased(true)}
              />
              <label className="text-sm">TimeBased</label>
            </div>

            <div
              className={`flex items-center ${
                !isTimeBased && "pointer-events-none opacity-40"
              }`}
            >
              <label className="font-bold text-sm opacity-50">
                Time Field:
              </label>
              <select
                onChange={(e) => changeTimeField(e)}
                value={selectedRow.field ? selectedRow.field : timeField}
              >
                {alertOptions.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div
              className={`flex items-center ${
                !isTimeBased && "pointer-events-none opacity-40"
              }`}
            >
              <label className="font-bold text-sm opacity-50">Days:</label>
              <input
                type="text"
                name="duration"
                value={selectedRow.duration != "" ? selectedRow.duration : days}
                // value={duration}
                defaultValue={selectedRow.duration}
                onChange={changeDuraiton}
                className="border-b border-b-black focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex gap-1 items-center text-sm cursor-pointer">
              <input
                type="radio"
                name="timeBased"
                value="eventBased"
                className="relative"
                checked={!isTimeBased}
                onClick={() => setIsTimeBased(false)}
              />
              <label className="text-sm">Event Based</label>
            </div>
            <div
              className={`flex items-center ${
                isTimeBased && "pointer-events-none opacity-40"
              }`}
            >
              <label className="font-bold text-sm opacity-50">
                Changing Field:
              </label>
              <input
                type="date"
                value={selectedRow.field ? selectedRow.field : changingField}
                onChange={changeChangingField}
              />
            </div>
            <div
              className={`flex items-center ${
                isTimeBased && "pointer-events-none opacity-40"
              }`}
            >
              <label className="font-bold text-sm opacity-50">Step:</label>
              <input
                type="text"
                value={selectedRow.duration ? selectedRow.duration : step}
                onChange={changeStep}
              />
            </div>
          </GridLayoutComponent>
          {/* //! Notification Information */}
          <GridLayoutComponent
            title="Notification Information"
            gridCols="4"
            gridRows="1"
          >
            <div className="mb-3 col-span-1">
              <div className="grid grid-cols-3 justify-center items-center">
                <label className="col-span-2 text-sm">Reciever:</label>
                <select
                  className="w-full"
                  value={selectedRow.receiver ? selectedRow.receiver : receiver}
                  onChange={(e) => changeReceiver(e)}
                >
                  {recievers.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-3 mt-4 justify-center items-center">
                <label className="col-span-2 text-sm">Sending Channel:</label>
                <select
                  className="w-full"
                  value={
                    selectedRow.channel ? selectedRow.channel : sendingChannel
                  }
                  onChange={(e) => changeSendingChannel(e)}
                >
                  {sendingChannelOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="flex h-full pb-3 gap-2 items-center justify-around">
                <button
                  className="bg-[#0000cd] text-white font-bold w-full py-1 rounded"
                  onClick={handleAdd}
                >
                  Add
                </button>
                <button
                  className="bg-[#0000cd] text-white font-bold w-full py-1 rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center mt-10">
              <button
                className="mr-4 col-span-1 bg-[#0000cd] py-2 px-4 text-white rounded"
                onClick={() => setIsDialogOpen(true)}
              >
                ...
              </button>
            </div>

            <div className="col-span-2">
              <label className="font-bold text-sm opacity-50">
                Alert Text:
              </label>
              <textarea
                className="w-full focus:outline-0 focus:border-none border-b"
                maxLength={350}
                value={
                  selectedRow.alertText != ""
                    ? selectedRow.alertText
                    : alertText
                }
                onChange={(e) => changeAlertText(e)}
              ></textarea>
            </div>
          </GridLayoutComponent>
        </div>
        {/* )} */}
      </section>
    </div>
  );
};

export default Alert;
