import React, { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import data from './Arg.json';
import YoutubeEmbed from "./YoutubeEmbed";
import Search from "./Search";

function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function ArgList() {
  const [open, setOpen] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = data.filter((item) => item.Baslik.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <div className="xl:mx-20 mt-14 sm:mx-8 mx-4">
        <Fragment>
          {filteredData.map((item, index) => (
            <Accordion open={open === index + 1} key={index} className="mb-4">
              <AccordionHeader onClick={() => handleOpen(index + 1)} className="flex items-center justify-between bg-gray-200 p-4 cursor-pointer">
                <span className="flex-grow font-medium">{item.Baslik}</span>
                <Icon open={open === index + 1} />
              </AccordionHeader>
              <AccordionBody className="p-4">
                <p className="text-lg text-center p-4">{item.Icerik}</p>
                {item.Linkler && <YoutubeEmbed embedId={item.Linkler} />}
                <h1 className="text-lg text-center pt-6 pb-2">Kaynaklar:</h1>
                <div className="flex justify-center">
                  <a className="text-lg font-bold" href={item.Kaynak}>{item.Kaynak}</a>
                </div>
              </AccordionBody>
            </Accordion>
          ))}
        </Fragment>
      </div>
    </div>
  );
}
