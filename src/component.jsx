function Media(props) {
  return (
    <div className="media">
      <img src={props.image} alt="bartender" />
      <div className="media-content">
        <span className="media-category">{props.category}</span>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Media;
