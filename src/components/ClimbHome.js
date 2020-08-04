import React, { Component } from 'react';
import ClimbCardProfile from './ClimbCardProfile'
import Header from './Header'
import Footer from './Footer'
import { Link, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from 'react-redux'
import { selectClimb } from '../actions/filters'

const HeaderWithRouter = withRouter(Header);

class ClimbHome extends React.Component {
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
    }
    componentDidMount() {
        this.props.selectClimb(this.history.location.pathname.substring(1));
    }
    render () {
      const data = this.props.data    
      const climbs = data.map((item) => 
          <div className="c-grid__item c-card" key={item.id}>
            <Link to={item.idName} className="c-card__link">
                <div className="c-card__img">
                    <ClimbCardProfile item={item} />
                </div>
                <div className="c-card__content">
                    <ul className="c-fiche__list">
                        <li className="c-fiche__listitem"><span className="c-flag--be"></span></li>
                        <li className="c-fiche__listitem">{item.name}</li>
                    </ul>
                    <ul className="c-fiche__list">
                        <li className="c-fiche__listitem c-fiche__listitem--icon"><i className="c-icon c-icon--length"/>{item.length}m</li>
                        <li className="c-fiche__listitem c-fiche__listitem--icon"><i className="c-icon c-icon--elevation"/>{item.coordinates[item.coordinates.length - 1].y - item.coordinates[0].y}m</li>
                        <li className="c-fiche__listitem c-fiche__listitem--icon"><i className="c-icon c-icon--elevation-gain"/>Max {item.maxElevation}%</li>
                        <li className="c-fiche__listitem c-fiche__listitem--icon"><i className="c-icon c-icon--elevation-gain"/>Avg {item.avgElevation}%</li>
                    </ul>
                </div>
            </Link>
          </div>
      )

      return (
        <div className="c-app">
            <HeaderWithRouter data={this.props.data}  />
            <div className="c-grid">
                <div className="c-grid__item c-card">
                    <div className="c-card__intro">
                        <h1 className="c-card__title">Cobbled Climbs</h1>
                        {/* <p>Bij sommigen zinkt het lood al in de schoenen alvorens men ze tracht te bedwingen, anderen zien
                        het als een kans om het verschil te maken. De kasseihelling. 
                        Als een relikwie in een heuvellandschap gesmeten om menig wielrenner van nederigheid te dienen.
                        Dit is een kleine verzameling van enkele bekende hellingen en de gegevens die hen zo uniek maken.
                        </p> */}
                        <p>Often spread out on top of a hilly countryside and by many cyclists perceived as relics to teach them about humility.
                        Some tremble at the idea of trying to subdue them, others see an opportunity to claim a personal victory.
                        </p>
                        <p>Enjoy this collection of some famous cobbled climbs and the data that makes them so unique.</p>
                    </div>
                </div>
                {climbs}
            </div>
            <Footer/>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ClimbHome);
