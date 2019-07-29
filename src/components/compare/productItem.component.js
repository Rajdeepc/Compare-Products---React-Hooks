import React from 'react';
import { connect } from 'react-redux';
import { openCompareList, addProductToCompare } from './compare.action';
import {Card,Button } from 'react-bootstrap';


const ProductItem = (props) => {


    const addProductToCompare = (item) => {
        if(props.addRemoveState.compareArray && props.addRemoveState.compareArray > 4){
            return ;
        } else {
            props.openCompareList();
            props.addProductToCompare(item)
        }
    }



    return (
        <Card>
            <div style={{width:'10em',height:'10em',margin:'0 auto'}}>
                <img style={{height:'auto',maxWidth:'100%'}} src={props.item.image} />
            </div>
           
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                    {props.item.description}
                 </Card.Text>
                <Button variant="primary" onClick={() => addProductToCompare(props.item)}>Add To Compare</Button>
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