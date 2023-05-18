import "./Items.sass";
import Item from "./Item";

const Items = ({ products, onProductClick }) => {
  return (
    <section className="items">
      {products?.map((item, i) => (
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
