
import { Container, Row , Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Categories.css'
import Shalvar from '../assets/images/shalvar.svg'
import Tshirt from '../assets/images/tshirt.svg'
import Shalvarak from '../assets/images/shalvarak.svg'
import Shaal from '../assets/images/shaal.svg'
import Top from '../assets/images/top.svg'
import Jurab from '../assets/images/jurab.svg'

const Categories = (props) => {
    return(
        <Container>
            <Row >
                <Col className="categories ">
                    <img src={Shalvar} width = "35px"></img>
                </Col> 
                <Col className="categories mr-1">
                    <img src={Tshirt} width = "70px"></img>
                </Col>
                <Col className="categories mr-1">
                    <img src={Shalvarak} width = "67px"></img>
                </Col>
                <Col className="categories mr-1">
                    <img src={Top} width="44px"></img>
                </Col>
                <Col className="categories mr-1">
                <img src={Shaal} width="55px"></img>
                </Col>
                <Col className="categories mr-1">
                <img src={Jurab} width="75px" className="pt-2"></img>
                </Col>
            </Row>
        </Container>
    )
}

export default Categories