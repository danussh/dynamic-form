import React from "react";

export const Dropdown = ({ isDropdown, openForm, copyToClipboard }) => {
  const dropdownMenu = [
    {
      text: "openForm",
      onClick: openForm,
    },
    {
      text: "link URL",
      onClick: copyToClipboard,
    },
  ];
  return (
    <>
      {isDropdown && (
        <div className="absolute rounded shadow right-0 lg:-right-20 lg:top-10 bg-white w-40 z-10">
          <ul className="text-gray-500 py-1">
            {dropdownMenu.map((el, index) => (
              <li
                key={index}
                className="py-2 px-5 hover:bg-gray-100 block"
                onClick={() => el.onClick()}
              >
                {el.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};