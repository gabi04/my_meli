import "./Loader.sass";

const Loader = () => {
  const iterable = Array.from(Array(12).keys());
  console.log(iterable);
  return (
    <div className="lds-spinner__container">
      <div className="lds-spinner">
        {iterable.map((i) => (
          <div key={`loader-line-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
