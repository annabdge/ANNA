function Insert(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    props.onSave(data);
    e.target.reset(); //reset the form after submission
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="nome" required></input>
      <button type="submit">Salva</button>
    </form>
  );
}
//abbiamo definito un componente e lo esportiamo. se voglio che si chiami esattamente Insert uso {}
export { Insert };
