/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import crops from "../../assets/crops.jpg"
import blueberry from "../../assets/blueberry.jpg"
import './Carousel.css'
import Button from "@mui/material/Button"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Carousel() {
    const [showText, setShowText] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<string>('blueberry')

    useEffect(() => {
        setTimeout(() => {
            setShowText(true)
        }, 2000)
    }, [selectedItem])

    function changeSelectedItem() {
        selectedItem === 'blueberry' ? setSelectedItem('crops') : setSelectedItem('blueberry')
        setShowText(false)
    }

    return (
        <div className='carousel-container'>
            {selectedItem === 'crops' && <img src={crops} alt="" />}
            {selectedItem === 'blueberry' && <img src={blueberry} alt="" />}
            <ArrowBackIosNewIcon className="carousel-arrow-left" onClick={changeSelectedItem} />
            <ArrowForwardIosIcon className="carousel-arrow-right" onClick={changeSelectedItem} />
            {showText && <div className="carousel-item">
                <p className="carousel-heading">Neki naslov o ovome</p>
                <Button variant="contained" className="carousel-button">Više informacija</Button>
            </div>}
        </div>
    )
}
