function View(props) {
  console.log("PROP", props);

  return (
    <div style={{ display: "grid" }}>
      {props.lista.map((el, index) => (
        <div key={index}> Nome: {el.nome}</div>
      ))}
    </div>
  );
}

export { View };
