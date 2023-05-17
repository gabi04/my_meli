const Items = ({ items }) => {
  return (
    <div>
      {items.items?.map((item) => (
        <p>{item.title} </p>
      ))}
    </div>
  );
};

export default Items;
