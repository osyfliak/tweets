export const Dropdown = ({ value, onChange }) => {
  if (!value) {
    return null;
  }

  return (
    <select value={value} onChange={onChange}>
      <option value="show all">Show All</option>
      <option value="follow">Follow</option>
      <option value="followings">Followings</option>
    </select>
  );
};
