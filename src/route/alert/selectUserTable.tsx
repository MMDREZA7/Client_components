import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";

interface SelectUserTableProps {
  onClick?: (e: any, data?: any) => void;
}

const SelectUserTable: React.FC<SelectUserTableProps> = ({ onClick }) => {
  const [isRolesSelected, setIsRolesSelected] = useState<boolean>(true);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchRoles, setSearch] = useState<string>();
  const [selectedRow, setSelectedRow] = useState({
    role: "",
    name: "",
    family: "",
    enterprise: "",
    superintede: "",
    description: "",
  });

  const handleChangeSelectedRow = (e) => {
    if (selectedRow.name == "") {
      setSelectedRow(e);
      if (onClick) {
        onClick(false, e);
      }

      setIsRolesSelected(true);
      setIsSearch(false);
      setSearch("");
      setSelectedRow({
        role: "",
        name: "",
        family: "",
        enterprise: "",
        superintede: "",
        description: "",
      });
    } else {
      onClick(false, "null");
    }
  };

  const changeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  const roleList = [
    {
      role: "Manager",
      name: "Ali",
      family: "Rezaei",
      enterprise: "TechCorp",
      superintede: "John",
    },
    {
      role: "Engineer",
      name: "MMD",
      family: "Hosseini",
      enterprise: "InnoSoft",
      superintede: "Lisa",
    },
    {
      role: "Developer",
      name: "Mhdi",
      family: "Karimi",
      enterprise: "DevHub",
      superintede: "Mark",
    },
    {
      role: "Analyst",
      name: "Reza",
      family: "Nasiri",
      enterprise: "DataWorks",
      superintede: "Emma",
    },
    {
      role: "Designer",
      name: "Sina",
      family: "Fathi",
      enterprise: "Creatix",
      superintede: "Noah",
    },
    {
      role: "Consultant",
      name: "Hassan",
      family: "Tavakoli",
      enterprise: "BizConsult",
      superintede: "Mia",
    },
    {
      role: "Technician",
      name: "Amir",
      family: "Gholami",
      enterprise: "FixTech",
      superintede: "Ethan",
    },
    {
      role: "Support",
      name: "Hossein",
      family: "Ebrahimi",
      enterprise: "HelpDesk",
      superintede: "Sophia",
    },
    {
      role: "Admin",
      name: "Javad",
      family: "Rahimi",
      enterprise: "SysAdmin",
      superintede: "William",
    },
    {
      role: "Accountant",
      name: "Mostafa",
      family: "Azizi",
      enterprise: "FinancePro",
      superintede: "Olivia",
    },
    {
      role: "Marketing",
      name: "Ehsan",
      family: "Mousavi",
      enterprise: "AdMarket",
      superintede: "James",
    },
    {
      role: "Sales",
      name: "Sadegh",
      family: "Ahmadi",
      enterprise: "SalesForce",
      superintede: "Charlotte",
    },
    {
      role: "HR",
      name: "Omid",
      family: "Khodadadi",
      enterprise: "PeopleFirst",
      superintede: "Benjamin",
    },
    {
      role: "Security",
      name: "Yasin",
      family: "Kiani",
      enterprise: "SafeNet",
      superintede: "Lucas",
    },
    {
      role: "Legal",
      name: "Arman",
      family: "Farhadi",
      enterprise: "LegalEase",
      superintede: "Amelia",
    },
    {
      role: "Trainer",
      name: "Behnam",
      family: "Sharifi",
      enterprise: "EduTrain",
      superintede: "Elijah",
    },
    {
      role: "Coordinator",
      name: "Soroush",
      family: "Daneshvar",
      enterprise: "EventHub",
      superintede: "Harper",
    },
    {
      role: "IT Support",
      name: "Mohammad",
      family: "Hajizadeh",
      enterprise: "TechHelp",
      superintede: "Henry",
    },
    {
      role: "Content Writer",
      name: "Arash",
      family: "Taheri",
      enterprise: "WriteWell",
      superintede: "Evelyn",
    },
    {
      role: "Data Scientist",
      name: "Kaveh",
      family: "Zamani",
      enterprise: "BigDataCo",
      superintede: "Alexander",
    },
    {
      role: "Product Manager",
      name: "Milad",
      family: "Esmaili",
      enterprise: "InnovateX",
      superintede: "Scarlett",
    },
    {
      role: "Logistics",
      name: "Farzad",
      family: "Shahbazi",
      enterprise: "MoveIt",
      superintede: "Mason",
    },
    {
      role: "Operations",
      name: "Shayan",
      family: "Jalili",
      enterprise: "OpsPro",
      superintede: "Liam",
    },
    {
      role: "Researcher",
      name: "Babak",
      family: "Norouzi",
      enterprise: "ResLab",
      superintede: "Grace",
    },
    {
      role: "Quality Assurance",
      name: "Navid",
      family: "Shahram",
      enterprise: "QATech",
      superintede: "Daniel",
    },
  ];

  const roleGroupsList = [
    {
      name: "Ali",
      description: "Software engineer specializing in web development",
    },
    {
      name: "MMD",
      description: "Data analyst with experience in machine learning",
    },
    { name: "Mhdi", description: "Graphic designer focusing on UI/UX design" },
    {
      name: "Reza",
      description: "Marketing strategist with expertise in digital campaigns",
    },
    {
      name: "Sina",
      description: "Cybersecurity expert working in network security",
    },
    {
      name: "Hassan",
      description: "Cloud architect experienced in AWS and Azure",
    },
    {
      name: "Amir",
      description: "Full-stack developer specializing in MERN stack",
    },
    {
      name: "Hossein",
      description: "IT support technician with troubleshooting skills",
    },
    {
      name: "Javad",
      description: "Database administrator managing SQL and NoSQL databases",
    },
    {
      name: "Mostafa",
      description: "Financial analyst with a focus on risk assessment",
    },
    {
      name: "Ehsan",
      Description:
        "Mobile app developer experienced in Flutter and React Native",
    },
    {
      name: "Sadegh",
      description: "Blockchain developer working on decentralized apps",
    },
    {
      name: "Omid",
      description: "Game developer creating indie and AAA titles",
    },
    {
      name: "Yasin",
      description: "AI researcher focused on deep learning models",
    },
    {
      name: "Arman",
      description: "Content creator producing educational videos",
    },
    {
      name: "Behnam",
      description: "HR manager specializing in talent acquisition",
    },
    {
      name: "Soroush",
      description: "Network engineer managing enterprise infrastructures",
    },
    {
      name: "Mohammad",
      description: "SEO expert optimizing websites for search engines",
    },
    {
      name: "Arash",
      description: "Project manager leading software development teams",
    },
    {
      name: "Kaveh",
      description: "Technical writer documenting software applications",
    },
    {
      name: "Milad",
      description: "E-commerce specialist managing online stores",
    },
    {
      name: "Farzad",
      description: "Operations manager overseeing logistics and supply chains",
    },
    {
      name: "Shayan",
      description: "Legal consultant advising startups on compliance",
    },
    {
      name: "Babak",
      description: "Biomedical engineer developing medical devices",
    },
    {
      name: "Navid",
      description: "Quality assurance specialist testing software products",
    },
  ];

  const rolesColumnDef = [
    { header: "Role", field: "role" },
    { header: "Name", field: "name" },
    { header: "Family", field: "family" },
    { header: "Enterprise", field: "enterprise" },
    { header: "Superintede", field: "superintede" },
  ];

  const roleGroupsColumnDef = [
    { header: "Name", field: "name" },
    { header: "Description", field: "description" },
  ];

  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-1 ">
        <button
          className={`w-full ${
            isRolesSelected ? "bg-[#2a579a] text-white" : "bg-[#d3d3d3]"
          } rounded-t-lg py-2 font-bold transition duration-200`}
          onClick={() => {
            setSelectedRow({
              role: "",
              name: "",
              family: "",
              enterprise: "",
              superintede: "",
              description: "",
            });
            setIsRolesSelected(true);
          }}
        >
          Roles
        </button>
        <button
          className={`w-full ${
            isRolesSelected ? "bg-[#d3d3d3]" : "bg-[#2a579a] text-white"
          } rounded-t-lg py-2 font-bold transition duration-200`}
          onClick={() => {
            setSelectedRow({
              role: "",
              name: "",
              family: "",
              enterprise: "",
              superintede: "",
              description: "",
            });
            setIsRolesSelected(false);
          }}
        >
          RolesGroups
        </button>
      </div>
      <div className="text-left pl-4 text-black text-lg font-bold">
        PostCategory
      </div>
      {isRolesSelected ? (
        <div
          className="p-5 bg-[#d3d3d3] rounded-b-lg overflow-auto"
          style={{ height: "500px" }}
        >
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
                      value={searchRoles}
                      onChange={(e) => changeSearchBar(e)}
                      onSubmit={() => {}}
                    />
                    <X size={20} onClick={() => setSearch("")} />
                  </div>
                </div>
                <X color="Black" size={20} onClick={() => setIsSearch(false)} />
              </div>
            )}
            <div className="bg-[#2a579a] text-white font-semibold py-2 pl-2 pr-5 flex items-center justify-between">
              Roles
              {/* Drag a column header and drop it here to group by that column */}
              <MagnifyingGlass
                color="Black"
                size={20}
                onClick={() => setIsSearch(!isSearch)}
              />
            </div>

            <DataTable
              value={roleList}
              showGridlines
              stripedRows
              selectionMode={"single"}
              onRowDoubleClick={(e) => handleChangeSelectedRow(e.data)}
              onSelectionChange={(e) => setSelectedRow(e.value)}
              selection={selectedRow}
              size="small"
              // rows={5}
              // paginator
            >
              {rolesColumnDef.map((column) => (
                <Column field={column.field} header={column.header}></Column>
              ))}
            </DataTable>
          </div>
        </div>
      ) : (
        <div
          className="p-5 bg-[#d3d3d3] rounded-b-lg overflow-auto"
          style={{ height: "500px" }}
        >
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
                      value={searchRoles}
                      onChange={(e) => changeSearchBar(e)}
                      onSubmit={() => {}}
                    />
                    <X size={20} onClick={() => setSearch("")} />
                  </div>
                </div>
                <X color="Black" size={20} onClick={() => setIsSearch(false)} />
              </div>
            )}
            <div className="bg-[#2a579a] text-white font-semibold py-2 pl-2 pr-5 flex items-center justify-between">
              Role Groups
              {/* Drag a column header and drop it here to group by that column */}
              <MagnifyingGlass
                color="Black"
                size={20}
                onClick={() => setIsSearch(!isSearch)}
              />
            </div>

            <DataTable
              value={roleGroupsList}
              showGridlines
              stripedRows
              selectionMode={"single"}
              onRowDoubleClick={(e) => handleChangeSelectedRow(e.data)}
              onSelectionChange={(e) => setSelectedRow(e.value)}
              selection={selectedRow}
              size="small"
            >
              {roleGroupsColumnDef.map((column) => (
                <Column field={column.field} header={column.header}></Column>
              ))}
            </DataTable>
          </div>
        </div>
      )}
      <div className="flex items center gap-2 w-full pt-2 px-2">
        <button
          className="w-full bg-[#2a579a] py-2 font-bold text-white rounded-lg hover:bg-[#0c1731] transition duration-200"
          onClick={() => handleChangeSelectedRow(selectedRow)}
        >
          Select
        </button>
        <button
          className="w-full bg-[#2a579a] py-2 font-bold text-white rounded-lg hover:bg-[#0c1731] transition duration-200"
          onClick={() => {
            onClick && onClick(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SelectUserTable;
