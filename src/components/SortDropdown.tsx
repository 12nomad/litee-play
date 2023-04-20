import { Dropdown } from "flowbite-react";
import { useState } from "react";
import usePlatforms from "../hooks/usePlatforms";

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

  const { dispatch } = usePlatforms();

  const onSelectSort = (value: string, label: string) => {
    dispatch({ type: "SET_PLATFORM_SORT_VALUE", payload: { value } });
    setSelected(label);
  };

  return (
    <div className="hidden md:block">
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
    </div>
  );
};

export default SortDropdown;
