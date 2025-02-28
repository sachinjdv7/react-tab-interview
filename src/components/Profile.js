const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div className="profile">
        <label>name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
      </div>
      <div>
        <label>age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
      </div>
      <div>
        <label>email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
    </div>
  );
};

export default Profile;
