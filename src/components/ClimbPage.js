import React, { Component } from 'react';
import ClimbMeta from './ClimbMeta'
import ClimbProfile from './ClimbProfile'
import Header from './Header'
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from 'react-redux'
import { selectClimb, selectTheme } from '../actions/filters'

const HeaderWithRouter = withRouter(Header);

class ClimbPage extends React.Component {
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
    }
    componentDidMount() {
        this.props.selectClimb(this.history.location.pathname.substring(1));
    }
    render () {
      const data = this.props.data
      const climbContent = data.map((item) => 
        (this.props.filters.idName === item.idName) 
        ?
            <main key={item.id} className="c-main">
                <div className="c-fiche">
                    <ClimbMeta item={item} />
                </div>
                <ClimbProfile item={item} />
            </main>
        : 
            ''
      )
      return (
        <div className="c-app">
            <HeaderWithRouter data={this.props.data}  />
            {climbContent}
        </div>
      ) 
    }
  }

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    selectClimb: (idName) => dispatch(selectClimb(idName)),
    selectTheme: (theme) => dispatch(selectTheme(theme))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ClimbPage);
