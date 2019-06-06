function SearchResults(res) {
  return (
    <div className="cardStyle row" key={res.slug}>
      <div className="wrapper" key={res.slug}>
        <div className="box header">
          <span className="reading">{res.japanese[0].reading}</span>
          <p className="labelStyle">
            {res.japanese[0].word
              ? res.japanese[0].word
              : res.japanese[0].reading}
          </p>
        </div>

        <div className="sidebar">
          {" "}
          <p>
            <h4>Jlpt Level: </h4>
            <div>{res.jlpt}</div>
          </p>
        </div>
        <div className="box content">
          {" "}
          <h4>English Definition: </h4>
          <ul>
            {res.senses[0].english_definitions.map(def => (
              <li key={def}>{def}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
