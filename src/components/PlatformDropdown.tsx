import Spinner from "./Spinner";
import { Dropdown } from "flowbite-react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformDropdown = () => {
  const {
    dispatch,
    platforms,
    platformsError,
    platformsLoading,
    platformFilterName,
  } = usePlatforms();

  const onSelectPlatformId = (id: number, name: string) => {
    dispatch({ type: "SET_PLATFORM_FILTER", payload: { id, name } });
  };

  if (platformsError) return <>Error...</>;

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
        {platformsLoading ? (
          <Spinner />
        ) : (
          platforms.map((platform) => (
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
