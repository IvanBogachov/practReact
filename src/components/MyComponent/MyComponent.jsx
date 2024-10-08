const MyComponent = ({
  clicks,
  setClicks,
  query,
  setQuery,
  filteredPlanets,
}) => {
  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
