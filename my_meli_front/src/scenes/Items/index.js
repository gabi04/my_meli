import "./Items.sass";
import Item from "./Item";

const Items = ({ items, onProductClick }) => {
  return (
    <section className="items">
      {items?.map((item, i) => (
        <div
          key={`${item.title}-item-${i}`}
          onClick={() => onProductClick(item.id)}
        >
          <Item item={item} />
          <hr className="item__hr" />
        </div>
      ))}
    </section>
  );
};

export default Items;
