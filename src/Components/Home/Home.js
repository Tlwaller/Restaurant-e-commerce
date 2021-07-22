import React from 'react'
import Feature from '../Feature'
import Hero from '../Hero'
import Products from '../Products'
import { sandwichData } from '../Products/sandwiches';
import { dessertData } from '../Products/desserts';

function Home() {
    return (
        <div>
            <Hero/>
            <Products heading='Fan favorites' data={sandwichData} />
                <Feature/>
            <Products heading="What's for dessert?" data={dessertData} />
        </div>
    )
}

export default Home
