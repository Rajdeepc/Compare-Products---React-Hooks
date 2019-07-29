import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { loadItemData } from './compare.action';
import ProductItemToCompare from './productItem.component';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCompareListComponent from '../compare/productCompareList.component'

const List = (props) => {

    useEffect(() => {
        console.log('useEffect 1 fired')
        props.loadItemData();
    }, [])

    return (
        <Container>
            <Row>
                {props.compareState.itemDataArray.map((item) => {
                    return (
                        <Col sm={3} key={item.id}>
                            <ProductItemToCompare item={item} {...props} />
                        </Col>
                    )
                })}

            </Row>
            <ProductCompareListComponent {...props} />
        </Container>
    )
}


const mapStateToProps = (state) => ({
    compareState: state.CompareReducer
})
const ListofItems = connect(mapStateToProps, {
    loadItemData
})(List)

export default ListofItems;