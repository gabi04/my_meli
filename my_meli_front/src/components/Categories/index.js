import "./Categories.sass";

const Categories = ({ categories }) => (
  <section className="categories">
    <p className="categories__text">
      {categories?.map((category, i) =>
        i + 1 < categories.length ? (
          <span key={`${category}-category-${i}`}>{`${category} > `}</span>
        ) : (
          <b key={`${category}-category-${i}`}>{`${category}`}</b>
        )
      )}
    </p>
  </section>
);

export default Categories;
