import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { selectClimb, selectTheme } from '../actions/filters'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this); 
    }
    handleChange = (event) => {
        this.props.selectClimb(event.target.value);
        this.props.history.push(`/${event.target.value}`);
    }
    toggleTheme() {
        this.props.selectTheme(event.target.value);
        document.documentElement.setAttribute("data-theme", event.target.value);
    }
    render () {
        const data = this.props.data;
        const options = data.map((item) => (
            <option key={item.id} value={item.idName} >{item.name}</option>
        ))
        const idName = this.props.filters.idName
        const theme = this.props.filters.theme

        return (
            <header className="c-header">
                <Link to='/' className="c-logo" title="Cobbled Climbs">CC</Link>
                <select className='c-select' onChange={this.handleChange} value={idName}>
                    <option value=''>Choose a Cobbled Climb </option>
                    {options}
                </select>
                <select className='c-select' onChange={this.toggleTheme} value={theme}>
                    <option value='raleigh-panasonic' >Raleigh - Panasonic</option>
                    <option value='molteni' >Molteni</option>
                    <option value='mapei' >Mapei - Quickstep</option>
                    <option value='faema' >Faema</option>
                    <option value='peugeot' >Peugeot</option>
                    <option value='brooklyn' >Brooklyn</option>
                </select>
                <a className="c-header__link" href="https://github.com/driesstandaert/cobbled-climbs">View on Github</a>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});
  
const mapDispatchToProps = (dispatch) => ({
    selectClimb: (idName) => dispatch(selectClimb(idName)),
    selectTheme: (theme) => dispatch(selectTheme(theme)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
