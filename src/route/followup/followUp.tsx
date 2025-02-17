// import TableGrid from "../../components/table-grid";
import {
  MagnifyingGlass,
  X,
  CaretCircleUp,
  CaretCircleDown,
} from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
// import RadioButtonComponent from "../../components/RadioButtonComponent";
import FollowUpSchedule from "./followUpSchedule";
import NotificationInformation from "./notificationInformation";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import GridLayoutComponent from "../../components/grid/GridLayoutComponent";
import { Toast } from "primereact/toast";

const FollowUp = () => {
  const [searchFollowUp, setSearchFollowUp] = useState<string>();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const [isDynamicDate, setIsDynamicDate] = useState<boolean>(true);
  const [form, setForm] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [dateFixDate, setDateFixDate] = useState<Date>();
  const [sendingChannel, setSendingChannel] = useState<string>("");
  const [alertText, setAlertText] = useState<string>("");
  const [selectedRow, setSelectedRow] = useState({
    followUpType: "",
    form: "",
    duration: "",
    date: "",
    alertText: "",
    sendingChannel: "",
  });
  const [followUpData, setFollowUpData] = useState([
    {
      followUpType: "Dynamic Date",
      duration: "50",
      form: "SendDate",
      alertText: "Oops! Something went wrong. Please try again later",
      sendingChannel: "Email",
    },
    {
      followUpType: "Fix Date",
      date: "2025-02-11",
      alertText: "Warning: You have unsaved changes!",
      sendingChannel: "SMS",
    },
    {
      followUpType: "Fix Date",
      date: "2025-02-12",
      alertText: "Caution: This action cannot be undone",
      sendingChannel: "SMS",
    },
    {
      followUpType: "Dynamic Date",
      duration: "150",
      form: "CreationDate",
      alertText: "Success! Your data has been saved",
      sendingChannel: "Email",
    },
    {
      followUpType: "Dynamic Date",
      duration: "8500",
      form: "DueDate",
      alertText: "Success! Your profile has been updated",
      sendingChannel: "Email",
    },
    {
      followUpType: "Fix Date",
      date: "2025-02-15",
      alertText: "Oops! We couldn't find what you're looking for",
      sendingChannel: "SMS",
    },
  ]);
  const toast = useRef(null);

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

  const formOptions = ["creationDate", "sendDate", "completionDate", "dueDate"];
  const sendingChannelOptions = ["SMS", "Email"];

  const columnDef = [
    { field: "followUpType", header: "Follow Up Type" },
    { field: "form", header: "From" },
    { field: "date", header: "Date" },
    { field: "duration", header: "Duration (min)" },
    { field: "sendingChannel", header: "Sending Channel" },
    { field: "alertText", header: "Alert Text" },
  ];

  const changeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchFollowUp(e.target.value);
  };

  const changeDuraiton = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setDuration(e.target.value);
  };

  const changeForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    console.log("EEE", e.target.value);

    setForm(e.target.value);
  };
  const changeFixDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    console.log(e);

    setDateFixDate(e.target.value);
  };

  const changeSendingChannel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setSendingChannel(e.target.value);
  };
  const changeAlertText = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setAlertText(e.target.value);
  };

  const handleAdd = () => {
    if (followUpData.followUpType == "" || followUpData.form == "") {
      return;
    }
    setForm("");
    setAlertText("");
    setDateFixDate("");
    setDuration("");
    setFollowUpData([
      ...followUpData,
      {
        followUpType: isDynamicDate ? "Dynamic Date" : "Fix Date",
        duration: duration,
        form: form,
        alertText: alertText,
        date: dateFixDate,
        sendingChannel: sendingChannel,
      },
    ]);

    setIsAccordionOpen(false);
  };

  const handleCancel = () => {
    setForm("");
    setAlertText("");
    setDateFixDate("");
    setDuration("");
    setSelectedRow({
      alertText: "",
      date: "",
      duration: "",
      followUpType: "",
      form: "",
      sendingChannel: "",
    });
    setIsAccordionOpen(false);
  };

  return (
    <div className="mb-96 p-4">
      <FollowUpSchedule />
      <NotificationInformation />
      <div className="font-bold mb-4">Existing Follow Ups:</div>
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
                    value={searchFollowUp}
                    onChange={(e) => changeSearchBar(e)}
                    onSubmit={() => {}}
                  />
                  <X size={20} onClick={() => setSearchFollowUp("")} />
                </div>
              </div>
              <X color="Black" size={20} onClick={() => setIsSearch(false)} />
            </div>
          )}
          <div className="bg-[#2a579a] text-white font-semibold py-2 pl-2 pr-5 flex items-center justify-between">
            Follow Up
            {/* Drag a column header and drop it here to group by that column */}
            <MagnifyingGlass
              color="Black"
              size={20}
              onClick={() => setIsSearch(!isSearch)}
            />
          </div>

          <DataTable
            value={followUpData}
            showGridlines
            stripedRows
            selectionMode={"single"}
            onSelectionChange={(e) => {
              setIsAccordionOpen(true);
              console.log("SELECTED ROW", e);

              console.log("start .....");
              if (e.value == selectedRow) {
                console.log("if .....");

                alert("Hello");
                return;
              } else {
                console.log("else .....");

                setSelectedRow(e.value);
              }
              console.log("Finish .....");
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
                setForm("");
                setAlertText("");
                setDateFixDate("");
                setDuration("");
                setFollowUpData([
                  ...followUpData,
                  {
                    followUpType: isDynamicDate ? "Dynamic Date" : "Fix Date",
                    duration: duration,
                    form: form,
                    alertText: alertText,
                    date: dateFixDate,
                    sendingChannel: sendingChannel,
                  },
                ]);
                setSelectedRow({
                  alertText: "",
                  date: "",
                  duration: "",
                  followUpType: "",
                  form: "",
                  sendingChannel: "",
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
                  setForm("");
                  setAlertText("");
                  setDateFixDate("");
                  setDuration("");
                  setSelectedRow({
                    alertText: "",
                    date: "",
                    duration: "",
                    followUpType: "",
                    form: "",
                    sendingChannel: "",
                  });
                  setIsDynamicDate(true);
                }}
              />
            }
          >
            <div className="flex gap-1 items-center text-sm cursor-pointer">
              <input
                type="radio"
                name="dynamicDate"
                value="dynamicDate"
                checked={isDynamicDate}
                onClick={() => setIsDynamicDate(true)}
              />
              <label className="text-sm">Dynamic Date</label>
            </div>

            <div
              className={`flex items-center ${
                !isDynamicDate && "pointer-events-none opacity-40"
              }`}
            >
              <label className="font-bold text-sm opacity-50">Form: </label>
              <select
                name="form"
                onChange={(e) => changeForm(e)}
                value={selectedRow.form ? selectedRow.form : form}
              >
                {formOptions.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div
              className={`flex items-center ${
                !isDynamicDate && "pointer-events-none opacity-40"
              }`}
            >
              <label className="font-bold text-sm opacity-50">Duration:</label>
              <input
                type="text"
                name="duration"
                value={
                  selectedRow.duration != "" ? selectedRow.duration : duration
                }
                // value={duration}
                defaultValue={selectedRow.duration}
                onChange={changeDuraiton}
                className="border-b border-b-black focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex gap-1 items-center text-sm cursor-pointer">
              <input
                type="radio"
                name="dynamicDate"
                value="fixDate"
                className="relative"
                checked={!isDynamicDate}
                onClick={() => setIsDynamicDate(false)}
              />
              <label className="text-sm">Fix Date {isDynamicDate}</label>
            </div>
            <div
              className={`flex items-center ${
                isDynamicDate && "pointer-events-none opacity-40"
              }`}
            >
              <label className="font-bold text-sm opacity-50">interDate:</label>
              <input
                type="date"
                name="fixDate"
                value={selectedRow.date ? selectedRow.date : dateFixDate}
                onChange={changeFixDate}
              />
            </div>
          </GridLayoutComponent>
          {/* //! Notification Information */}
          <GridLayoutComponent title="Notification Information" gridRows="1">
            <div className="mb-3">
              <div className="grid grid-cols-3 justify-center items-center">
                <label className="col-span-2 text-sm">Sending Channel:</label>
                <select
                  className="w-full"
                  value={
                    selectedRow.sendingChannel
                      ? selectedRow.sendingChannel
                      : sendingChannel
                  }
                  onChange={(e) => changeSendingChannel(e)}
                >
                  {sendingChannelOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="flex h-full gap-2 items-center justify-around">
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

export default FollowUp;
