import React from 'react'
import Hero from '~/components/AboutUs/Hero/Hero'
import OurStory from '~/components/AboutUs/OurStory/OurStory'
import OurVision from '~/components/AboutUs/OurVision/OurVision'
import WhatWeDo from '~/components/AboutUs/WhatWeDo/WhatWeDo'
import WhoWeServe from '~/components/AboutUs/WhoWeServe/WhoWeServe'
import Navbar from '~/components/Navbar/Navbar'
import Footer from "~/components/footer/Footer";

const aboutus = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <OurStory />
            <WhatWeDo />
            <WhoWeServe />
            <OurVision />
            <Footer />
        </>
    )
}

export default aboutus