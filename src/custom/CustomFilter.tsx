import { Input } from "antd";
import { lightningIcon } from "../assets";
import CustomSelect from "./CustomSelect";

const CustomFilter = () => {

  const filterOption = [{
    label: <img src={lightningIcon} width={55} height={25} />,
    value: 0
  }]
  return (
    <div className="flex gap-2 input-container">
      <CustomSelect option={filterOption} />
      <div className="w-[1px]  bg-light-grey " />
      <Input placeholder="Search an userOp" className="border-none" />
    </div>
  );
}

export default CustomFilter;
