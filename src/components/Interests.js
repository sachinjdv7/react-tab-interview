const Interests = ({ data, setData }) => {
  const { interests } = data;

  const handleCheckBoxChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
          onChange={handleCheckBoxChange}
        />
        <label>coding: </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="badminton"
          checked={interests.includes("badminton")}
          onChange={handleCheckBoxChange}
        />
        <label>badminton: </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="javascript"
          checked={interests.includes("javascript")}
          onChange={handleCheckBoxChange}
        />
        <label>javascript: </label>
      </div>
    </div>
  );
};

export default Interests;
