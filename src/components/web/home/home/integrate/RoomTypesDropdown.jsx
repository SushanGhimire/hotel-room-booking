import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import dropdown from "../../../../../assets/images/icons/dropdown.svg";
import close2 from "../../../../../assets/images/icons/close2.svg";

const people = [
  { name: "Luxury Room", np: "लक्जरी कोठा" },
  { name: "Presidental Room", np: "" },
  { name: "Bachelor Room", np: "प्रेसिडेन्टअल कोठा" },
  { name: "Hall Room", np: "हल कोठा" },
];

export default function RoomTypesDropdown({ lang }) {
  const [selected, setSelected] = useState();

  return (
    <div className="z-20">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 z-20">
          <Listbox.Button className="flex items-center text-sm focus:outline-none">
            <span className="block truncate">
              {selected
                ? selected.name
                : lang === "EN"
                ? "Room Types"
                : "कोठा प्रकारहरू"}
            </span>
            <span></span>
            <span>
              {selected ? (
                <img
                  src={close2}
                  className="w-3 h-3 ml-2"
                  onClick={() => setSelected("")}
                  alt=""
                />
              ) : (
                <img src={dropdown} className="w-3 h-3 ml-1" alt="" />
              )}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute bg-white w-44  py-4 rounded-lg -left-4 px-1">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  value={person}
                  className=" px-3 py-1 cursor-pointer mt-1 hover:bg-black hover:text-lightWhite rounded transition-all duration-300 ease-in-out"
                >
                  <span className="">
                    {lang === "EN" ? person.name : person.np}
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
