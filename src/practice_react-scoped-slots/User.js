const User = ({ user }) => {
  const { name, location } = user || {};

  return (
    <div>
      <h4>My name is {name}</h4>
      <div>I live in {location}</div>
    </div>
  );
};

export default User;
