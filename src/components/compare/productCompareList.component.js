import React from 'react'
import { connect } from 'react-redux';
import { removeProductFromCompare } from './compare.action';
import { ListGroup,Button } from 'react-bootstrap';

const ProductCompareList = (props) => {

    let prodArray = props.addRemoveState.compareArray;


    const removeItem = (indexToDelete) => {
        props.removeProductFromCompare(indexToDelete);
    }

    return (
        <ListGroup>
            <h4>Compare List</h4>
            {prodArray.map((item, index) => {
                return (

                    <ListGroup.Item key={item.id}>
                        {item.name}
                        <Button variant="danger" onClick={() => removeItem(index)}>Remove From List</Button>
                    </ListGroup.Item>)
            })}

        </ListGroup>
    )
}

const mapStateToProps = (state) => ({
    addRemoveState: state.CompareReducer
})


const ProductCompareListComponent = connect(mapStateToProps, {
    removeProductFromCompare
})(ProductCompareList)



export default ProductCompareListComponent;
