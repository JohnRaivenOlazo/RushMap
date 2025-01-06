import React from 'react'
import { features } from '@/data'

const About = () => {
    return (
        <section className="bg-black flex flex-col justify-center items-center px-6 py-16">
            <h3 className="text-4xl font-bold text-center mb-6 text-white">About Us</h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-6 opacity-80 text-light">
                <span className="text-white font-medium">RushMap</span> helps you navigate the city during peak hours by providing live data on pedestrian congestion, guiding you through the least crowded routes.
            </p>
            <div className="relative h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-2 px-6 text-gray-300">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-lg border-[1px] border-opacity-50 border-light shadow-lg backdrop-blur-xl flex flex-col items-center justify-between space-y-2 hover:scale-105 transition-transform hover:glow"
                    >
                        <img src={feature.image} alt={feature.title} className="w-full h-32 object-cover rounded-lg" />
                        <h4 className="text-lg font-semibold text-center">{feature.title}</h4>
                        <p className="text-sm text-light text-center">{feature.description}</p>
                    </div>
                )
                )}
            </div>
        </section>
    )
}

export default About