import React from 'react'
import { connect } from 'react-redux';
import { removeProductFromCompare } from './compare.action';
import { Row, Col, Card, Button } from 'react-bootstrap';
import addToCompare from './add.png';


const ProductCompareList = (props) => {

    let prodArray = props.addRemoveState.compareArray;
    let compareArray = [
        {
            "imageAdd": addToCompare
        },
        {
            "imageAdd": addToCompare
        },
        {
            "imageAdd": addToCompare
        },
        {
            "imageAdd": addToCompare
        }
    ];

    const removeItem = (indexToDelete) => {
        props.removeProductFromCompare(indexToDelete);
    }
    const popImageAndPushItem = () => {
        let indexOfLastItem = prodArray.indexOf(prodArray[prodArray - 1]);
        console.log("indexOfLastItem" + indexOfLastItem)
        prodArray.map((item, index) => {
            debugger;
            compareArray.splice(indexOfLastItem + 1, 1, item);
            indexOfLastItem++;
        })
        console.log("compareArray" + compareArray)
        return compareArray;
    }

    return (
        <div>
            <h4>{compareArray.length ? 'Compare List' : ''}</h4>
            <Row>
                {popImageAndPushItem().map((item, index) => {
                    return (
                        <Col sm={3}>
                            <Card>
                                {item.price && item.description && item.name && item.condition && item.image ?
                                    <>
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
                                    </> :
                                    <div style={{ width: '10em', height: '10em', margin: '0 auto' }}>
                                        <img style={{ height: 'auto', maxWidth: '100%' }} src={item.imageAdd} />
                                    </div>
                                }
                            </Card>
                        </Col>
                    )
                })
                }
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
