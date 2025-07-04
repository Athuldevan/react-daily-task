const { useState } = require("react");

const userData = {
  name: "Athul",
  age: 20,
  city: "india",
};

const userData2 = {
  name: "Elwin",
  age: 19,
  city: "Kozhikkode",
};

function App() {
  const [user, setUser] = useState(userData);
  return (
    <div>
      <UserCard userData={userData} userData2={userData2} />
    </div>
  );
}

function UserCard({ userData, userData2 }) {
  const [clicked, setClicked] = useState(false);

  function handleButtonClick() {
    setClicked(!clicked);
  }
  return (
    <div>
      <button onClick={handleButtonClick}>Update</button>
      {clicked === true ? (
        <h3>
          {userData2.name}-{userData2.age} -{userData2.city}
        </h3>
      ) : (
        <h3>
          {userData.name}-{userData.age} -{userData.city}
        </h3>
      )}
    </div>
  );
}
export default App;
