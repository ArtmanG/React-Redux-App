import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const CharacterForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <div>
            {props.isFetchingData ? (
                <div>No, thank you. We don’t want any more visitors, well-wishers, or distant relations.</div>
            ) : (
                <button onClick={handleGetData}>Get Your Book</button>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(CharacterForm)