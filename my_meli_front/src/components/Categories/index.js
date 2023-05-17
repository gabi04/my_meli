import "./Categories.sass";

const Categories = ({ categories }) => (
  <section className="categories">
    <p className="categories__text">
      {categories?.map((caregory, i) =>
        i + 1 < categories.length ? (
          <span>{`${caregory} > `}</span>
        ) : (
          <b>{`${caregory}`}</b>
        )
      )}
    </p>
  </section>
);

export default Categories;
