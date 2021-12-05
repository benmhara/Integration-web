class NomFormulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Nom complet : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom complet :
          <input type="text" placeholder="Veuillez saisir votre nom complet" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Afficher" />
      </form>
    );
  }
}
