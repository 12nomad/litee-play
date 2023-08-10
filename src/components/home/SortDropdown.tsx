import { useState } from "react";
import { Dropdown } from "flowbite-react";

import { useAppContext } from "../../context/app.context";

const sorts = [
  { value: "", label: "Relevance" },
  { value: "-rating", label: "Average Rating" },
  { value: "-released", label: "Release Date" },
  { value: "-added", label: "Date Added" },
  { value: "-metacritic", label: "Popularity" },
  { value: "name", label: "Name" },
];

const SortDropdown = () => {
  const [selected, setSelected] = useState("");

  const { dispatch } = useAppContext();

  const onSelectSort = (value: string, label: string) => {
    dispatch({ type: "SET_PLATFORM_SORT_VALUE", payload: { value } });
    setSelected(label);
  };

  return (
    <Dropdown
      label={selected ? `Sort by: ${selected}` : "Sort by: Relevance"}
      dismissOnClick={true}
      color="gray"
    >
      {sorts.map((el) => (
        <Dropdown.Item
          key={el.value}
          value={el.value}
          onClick={() => onSelectSort(el.value, el.label)}
        >
          {el.label}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default SortDropdown;
