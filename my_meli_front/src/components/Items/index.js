import "./Items.sass";
import Item from "./Item";

const Items = ({ items }) => {
  return (
    <section className="items">
      {items?.map((item) => (
        <>
          <Item item={item} />
          <hr className="item__hr" />
        </>
      ))}
    </section>
  );
};

export default Items;
