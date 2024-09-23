export default function Profile(user) {
  return (
    <>
      <h1>Hello {user.firstName}</h1>
      <h2>Your Full Name: {user.firstName + " " + user.lastName}</h2>
      <h2>Your Age: {user.age}</h2>
    </>
  );
}
