import "./Items.sass";
import Item from "./Item";
import { scenes } from "../../App";

const Items = ({ items, setScene }) => {
  return (
    <section className="items">
      {items?.map((item, i) => (
        <div
          key={`${item.title}-item-${i}`}
          onClick={() => setScene(scenes.PRODUCT_DETAIL)}
        >
          <Item item={item} />
          <hr className="item__hr" />
        </div>
      ))}
    </section>
  );
};

export default Items;
