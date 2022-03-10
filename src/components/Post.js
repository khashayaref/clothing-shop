import {Row, Col} from 'react-bootstrap'
import './Post.css'

const Post = (props) => {
    const number = props.number
    const result = number % 2 ==0 ? 'rtl' : 'ltr'

    const details = () => {
        console.log('yes')
    }
    return (
        <Row className="post"  style = {{ direction : result }}>
            <Col>
                <div className="descrption">
                    <p>{props.abstract}</p>
                    <a href = "#" onClick = {details}><strong>ادامه مطلب</strong></a>
                </div>
            </Col>
            <Col>
                <img src={props.img.default}></img>
            </Col>
        </Row>
    )
}

export default Post