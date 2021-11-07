class Star extends React.Component {
    constractor(props) {
        super(props);
        this.state = { on : false }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( { on : true } );
    }

    const Style = {
        size: 30,
        //value: 2.5,
        //edit: false
    };

    render() {
        return(
            <img style={Style} src = { this.state.on ? Process.env.PUBLIC_URL + '/star_on.png' :
        Process.env.PUBLIC_URL + '/star_off.png' }
        onClick = { this.handleClick }
        />
        );
    }
}
