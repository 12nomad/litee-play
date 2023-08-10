import { Dropdown } from "flowbite-react";

import { useAppContext } from "../../context/app.context";
import usePlatforms from "../../hooks/usePlatforms";
import Spinner from "../Spinner";

const PlatformDropdown = () => {
  const { dispatch, platformFilterName } = useAppContext();
  const { data, isLoading, error } = usePlatforms();

  const onSelectPlatformId = (id: number, name: string) => {
    dispatch({ type: "SET_PLATFORM_FILTER", payload: { id, name } });
  };

  if (error) return <>{error.message}</>;

  return (
    <div>
      <Dropdown
        label={
          platformFilterName
            ? `Platform: ${platformFilterName}`
            : "Platform: All"
        }
        dismissOnClick={true}
        color="gray"
      >
        <Dropdown.Item onClick={() => onSelectPlatformId(-1, "all")}>
          All
        </Dropdown.Item>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.results.map((platform) => (
            <Dropdown.Item
              key={platform.id}
              onClick={() => onSelectPlatformId(platform.id, platform.name)}
            >
              {platform.name}
            </Dropdown.Item>
          ))
        )}
      </Dropdown>
    </div>
  );
};

export default PlatformDropdown;
