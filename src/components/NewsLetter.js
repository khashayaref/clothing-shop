import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import './NewsLetter.css'
import camva from '../assets/images/camva.jpg'

const NewsLetter = (props) => {
    const [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!email){
            alert('please fill the fild')
            return
        }
        console.log(email)
        setEmail('')
    }

    return (
        <Row className="my-5">
            <Col className="">
                <form onSubmit = {onSubmit} className="form-send-email">
                    <div className="d-inline-block input-email pl-5">
                        <label className="">عضویت در خبرنامه پن پخ</label>
                        <input type="email" placeholder="ایمیل خود را وارد کنید" 
                            value={email} name="email" onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        <div></div>
                    </div>
                    <input type="image" src={camva} alt="Submit" className="send-email"></input>
                </form>
            </Col>
        </Row>
    )
}
 
export default NewsLetter