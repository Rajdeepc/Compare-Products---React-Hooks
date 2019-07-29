import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { openCompareList, addProductToCompare } from './compare.action';
import { Card, Button } from 'react-bootstrap';


const ProductItem = (props) => {

    const [isItemAddedToCompare, setIsItemAddedToCompare] = useState(false);

    useEffect(() => {
        console.log('useEffect 2 fired')
        if (props.addRemoveState.compareArray.length >= 0) {
            checkIfItemExists(props.addRemoveState.compareArray)
        }
    }, [props.addRemoveState.compareArray])


    let newItem = props.item;

    const checkIfItemExists = (array) => {
        let compareFlag = false;
        array.map((item) => {
            if (item.id === newItem.id) {
                compareFlag = true
            }
        });
        setIsItemAddedToCompare(compareFlag)
    }


    const addProductToCompare = (item) => {
        if (isItemAddedToCompare) {
            return;
        }

        if (props.addRemoveState.compareArray && props.addRemoveState.compareArray.length === 4) {
            alert('you have added max items to compare')
        } else {
            props.openCompareList();
            props.addProductToCompare(item)
        }
    }



    return (
        <Card>
            <div style={{ width: '10em', height: '10em', margin: '0 auto' }}>
                <img style={{ height: 'auto', maxWidth: '100%' }} src={props.item.image} />
            </div>

            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                    {props.item.description}
                </Card.Text>
                <Button
                    disabled={!isItemAddedToCompare ? false : true}
                    variant={!isItemAddedToCompare ? 'primary' : 'light'} onClick={() => addProductToCompare(props.item)}>{isItemAddedToCompare ? 'Item Added to Compare' : 'Add item to compare'}</Button>
            </Card.Body>
        </Card>
    )
}




const mapStateToProps = (state) => ({
    addRemoveState: state.CompareReducer
})


const ProductItemToCompare = connect(mapStateToProps, {
    openCompareList,
    addProductToCompare
})(ProductItem)


export default ProductItemToCompare;