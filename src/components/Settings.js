const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleRadioChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleRadioChange}
        />
        <label>dark: </label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={handleRadioChange}
        />
        <label>light: </label>
      </div>
    </div>
  );
};

export default Settings;
