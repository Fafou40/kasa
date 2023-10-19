import React from 'react';
import Banner from '../Layout/Banner';
import homeBanner from '../../styles/img/bannerHome-kasa.webp'

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
    )
}

export default HomeBanner;