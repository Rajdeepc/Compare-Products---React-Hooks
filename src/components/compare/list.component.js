import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { loadItemData } from './compare.action';
import ProductItem from './productItem.component';
import {Container,Row,Col } from 'react-bootstrap';


const List = (props) => {

    useEffect(() => {
        props.loadItemData();
    },[])

    return (
        <Container>
        <Row>
            {props.compareState.itemDataArray.map((item) => {
                return (
                    <Col sm={3}>
                        <ProductItem item={item} {...props} />
                    </Col>
                )
            })}
           
        </Row>
</Container>
    )
}


const mapStateToProps = (state) => ({
    compareState : state.CompareReducer
})
const ListofItems = connect(mapStateToProps,{
    loadItemData
})(List)

export default ListofItems;