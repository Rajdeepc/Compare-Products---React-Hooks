import React from 'react'
import { connect } from 'react-redux';
import { removeProductFromCompare } from './compare.action';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ProductCompareList = (props) => {

    let prodArray = props.addRemoveState.compareArray;


    const removeItem = (indexToDelete) => {
        props.removeProductFromCompare(indexToDelete);
    }

    return (
        <div>
        <h4>{prodArray.length ? 'Compare List' : ''}</h4>
        <Row>
           
            {prodArray.map((item, index) => {
                return (
                    <Col sm={3}>
                        <Card>
                            <div style={{ width: '10em', height: '10em', margin: '0 auto' }}>
                                <img style={{ height: 'auto', maxWidth: '100%' }} src={item.image} />
                            </div>

                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                   Price:  {item.price}
                                </Card.Text>
                                <Card.Text>
                                   Condition {item.condition}
                                </Card.Text>
                                <Button
                                    variant="danger" onClick={() => removeItem(index)}>Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                )
            })}
        </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    addRemoveState: state.CompareReducer
})


const ProductCompareListComponent = connect(mapStateToProps, {
    removeProductFromCompare
})(ProductCompareList)



export default ProductCompareListComponent;
