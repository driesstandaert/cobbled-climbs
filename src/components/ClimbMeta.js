import React, { Component } from 'react';

class ClimbMeta extends React.Component {
    render () {
        const item = this.props.item
        const elevGain = item.coordinates[item.coordinates.length - 1].y - item.coordinates[0].y
        return (
            <React.Fragment>
                <h1 className="c-fiche__title">{item.name}</h1>
                <ul className="c-fiche__list">
                    <li className="c-fiche__listitem">
                        <span className={`c-flag--${item.country}`}></span>
                    </li>
                    <li className="c-fiche__listitem c-fiche__listitem--icon"><i className="c-icon c-icon--length"/>{item.length}m</li>
                    <li className="c-fiche__listitem c-fiche__listitem--icon"><i className="c-icon c-icon--elevation"/>{elevGain}m</li>
                    <li className="c-fiche__listitem c-fiche__listitem--icon"><i className="c-icon c-icon--elevation-gain"/>Max {item.maxElevation}%</li>
                    <li className="c-fiche__listitem c-fiche__listitem--icon"><i className="c-icon c-icon--elevation-gain"/>Avg {item.avgElevation}%</li>
                </ul>
                <p className="c-fiche__desc">{item.descEn}</p>
            </React.Fragment>
        ) 
    }
}

export default ClimbMeta;