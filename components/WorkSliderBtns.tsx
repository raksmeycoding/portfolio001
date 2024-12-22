'use client'

import {useSwiper} from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";
import React from "react";

interface WorkSliderBtnsProps {
    containerStyles?: string
    butnStyles?: string
    iconsStyles?: string
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({containerStyles, butnStyles, iconsStyles}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={butnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold/>
            </button>
            <button className={butnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    );
};

export default WorkSliderBtns;