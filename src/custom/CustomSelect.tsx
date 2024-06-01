import { Select, SelectProps } from "antd";
import { FC } from "react";

interface customSelectProps {
  option: SelectProps['options'];
}

const CustomSelect: FC<customSelectProps> = (props) => {
  const { option } = props;
  return <Select
    options={option}
    className="select-border-color  navBarFontStyle  "
    defaultValue={0}
    variant="borderless" />
}

export default CustomSelect;
