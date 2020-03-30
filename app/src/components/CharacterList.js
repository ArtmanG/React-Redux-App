import React from 'react';
import { connect } from 'react-redux';

const CharacterList = props => {
    return (
        <div>
            {props.error ? (
                <div>{props.error}</div>
            ) : (
            props.books.map(docs => <div>{docs.name}</div>)
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        books: state.books,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(CharacterList);