import { Avatar, Badge, Dropdown } from "antd";
import { apiIcon, dashboard, logOutIcon, profileIcon } from "../assets";

const CustomProfile = () => {
  const items = [
    {
      key: '1',
      label: <div className="flex gap-4">
        <img src={profileIcon} />
        <p>View Profile</p>

      </div>,
    },
    {
      key: '2',
      label: <div className="flex gap-4">
        <img src={dashboard} />
        <p>Dashboard</p>

      </div>,
    },
    {
      key: '3',
      label: <div className="flex gap-4">
        <img src={apiIcon} />
        <p>Api</p>
      </div>,
    }, {
      key: '4',
      label: <div className="flex gap-4">
        <img src={logOutIcon} />
        <p>Logout</p>
      </div>,
    },
  ];
  return (
    <div className="  mt-[12px] mb-[4px] flex gap-[12px]">
      <Badge dot offset={[-5, 29]}>
        <Avatar shape="circle">OR</Avatar>
      </Badge>
      <Dropdown menu={{ items }} placement="bottomLeft" arrow trigger={["click"]} className="cursor-pointer">
        <div className="text-[14px] leading-5">
          <p className="font-semibold ">Olivia Rhye</p>
          <p className="font-normal text-primary">olivia@jiffyscan.xyz</p>
        </div>
      </Dropdown>

    </div>
  );
}

export default CustomProfile;
