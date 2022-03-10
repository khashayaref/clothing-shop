
import { FaShoppingCart,FaSearch,FaUserAlt } from "react-icons/fa";
import './Header.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Logo from '../assets/images/logo.svg'

const Header = (props) => {

    const [showSearch,setShowSearch] = useState(false)
    const [searchValue,setSearhValue] = useState('')

    const sendSearchData = (e) => {
        e.preventDefault()
        console.log(searchValue)
    }

    return (
        <div>
            <header className = "header d-block">
                <div className = "">
                    <div className = "right-header">
                        <ul>
                            <li><a href = "/"><FaShoppingCart></FaShoppingCart></a></li>
                            <li><a href = "/"><FaUserAlt></FaUserAlt></a></li>
                            <li onClick = {() => setShowSearch(!showSearch)}><FaSearch></FaSearch></li>
                        </ul>
                    </div>
                    <div className = "left-header">
                        <span>
                            SATIN CLOTHING
                        </span>
                    </div>
                </div>
                
            </header>
            {showSearch ? <div className="search-form">
                            <form onSubmit = {sendSearchData} className = "">
                            <Button type= "submit" className="submit-btn"><FaSearch ></FaSearch></Button>
                            <input type = "text" className= "" value = {searchValue} 
                            onChange = {(e) => setSearhValue(e.target.value)}
                                placeholder = "جستجو"></input>
                                </form>
                            </div> : null }
            <div className="d-block my-4">
                <picture alt="" className = "picture" src="">
                    <img src = {Logo}></img>
                </picture>
            </div>
        </div>
        
    )
}

export default Header