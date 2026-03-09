function Product({ user }) {
  console.log(user);
  const { id, name, email, role } = user;

  return (
    <div>
      
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>ID :{id}</p>
      <p>role: {role}</p>
    </div>
  );
}

export default Product;
