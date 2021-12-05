class NomFormulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'noix de coco'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        /*<label>
          Nom complet :
          <input type="text" placeholder="Veuillez saisir votre nom complet" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Commentaire
          <textarea value={this.state.value} onChange={this.handleChange} />
          {handleSubmit}
        </label>*/
        <label>
          Choisissez votre saveur préférée :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="citron vert">Citron vert</option>
            <option value="noix de coco">Noix de coco</option>
            <option value="mangue">Mangue</option>
          </select>
        </label>
        <input type="submit" value="Choisir" />
      </form>
    );
  }
}
