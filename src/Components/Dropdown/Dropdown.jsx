import { Option, Select } from "./dropdown.styled";

export const Dropdown = ({ value, onChange }) => {
  if (!value) {
    return null;
  }

  return (
    <Select value={value} onChange={onChange}>
      <Option value="show all">Show All</Option>
      <Option value="follow">Follow</Option>
      <Option value="followings">Followings</Option>
    </Select>
  );
};
