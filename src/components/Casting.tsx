import React from "react";
import castingImg from '../assets/Casting-Process.jpg';
import stCast1 from '../assets/Steel-cast-img1.jpg';
import stCast2 from '../assets/Steel-cast-img2.jpg';
import stCast3 from '../assets/Steel-cast-img3.jpg';

import IrCasting1 from '../assets/IrCasting1.jpg';
import IrCasting2 from '../assets/IrCasting2.jpg';
import IrCasting3 from '../assets/IrCasting3.jpg';
import IrCasting4 from '../assets/IrCasting4.jpg';
import IrCasting5 from '../assets/IrCasting5.jpg';
import IrCasting6 from '../assets/IrCasting6.jpg';
import IrCasting7 from '../assets/IrCasting7.jpg';


import NfCasting1 from '../assets/NonfrCasting1.jpg';
import NfCasting2 from '../assets/NonfrCasting2.jpg';
import NfCasting3 from '../assets/NonfrCasting3.jpg';
import NfCasting4 from '../assets/NonfrCasting4.jpg';
import NfCasting5 from '../assets/NonfrCasting5.jpg';
import NfCasting6 from '../assets/NonfrCasting6.jpg';
import NfCasting7 from '../assets/NonfrCasting7.png';
import NfCasting8 from '../assets/NonfrCasting8.jpg';
import NfCasting9 from '../assets/NonfrCasting9.jpg';
import NfCasting10 from '../assets/NonfrCasting10.jpg';
import NfCasting11 from '../assets/NonfrCasting11.jpg';
import NfCasting12 from '../assets/NonfrCasting12.jpg';
import NfCasting13 from '../assets/NonfrCasting13.jpg';
import NfCasting14 from '../assets/NonfrCasting14.jpeg';
import NfCasting15 from '../assets/NonfrCasting15.jpeg';
import NfCasting16 from '../assets/NonfrCasting16.jpeg';


// LOST WAX INVESTMENT CASTING IMAGES
import LWIcasting1 from '../assets/LostWIcasting1.jpg';
import LWIcasting2 from '../assets/LostWIcasting2.jpg';
import LWIcasting3 from '../assets/LostWIcasting3.jpg';
import LWIcasting4 from '../assets/LostWIcasting4.jpg';
import LWIcasting5 from '../assets/LostWIcasting5.jpg';
import LWIcasting6 from '../assets/LostWIcasting6.jpg';
import LWIcasting7 from '../assets/LostWIcasting7.jpg';
import LWIcasting8 from '../assets/LostWIcasting8.jpg';


// SIMULATION
import dbSimulation from '../assets/Dry_Builk_Simulation.mp4';
import solidSimulation from '../assets/Solidification_Simulation.mp4';
import simulationProcess from '../assets/In_house_Simulation.jpg';
import simulation1 from '../assets/Simulation1.png';
import simulation2 from '../assets/Simulation2.png';
import simulation3 from '../assets/Simulation3.png';
import simulation4 from '../assets/Simulation4.png';

const Casting = () => {
    return (
        <div className="bg-gray-50 text-gray-800">


            {/* Header Section */}
            <header className="bg-gradient-to-r from-sky-900 to-sky-900 text-white py-48 relative">
                <div className="absolute inset-0">
                    <img
                        src={castingImg}
                        alt="Casting Image"
                        className="w-full h-full object-fit opacity-80"
                    />
                </div>
                <div className="relative max-w-6xl mx-auto text-center px-4">
                    <h1 className="text-6xl font-extrabold text-white leading-tight ">CASTING</h1>
                    <h2 className="text-2xl font-bold mt-2">CASTINGS FROM INDIA</h2>
                    <p className="mt-12 text-black  font-serif text-xl font-extrabold bg-opacity-60 rounded-b-xl rounded-t-xl  bg-neutral-50 mx-auto">
                        Synergy specializes in end-to-end manufacturing solutions for high-quality metal castings from India. We have one of the strongest technical teams in India with the most diverse capabilities.
                    </p>
                </div>
            </header>


            {/* Capabilities Section */}
            <section className="py-16 bg-gradient-to-b from-gray-100 via-white to-gray-50 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight leading-tight">

                        OUR CAPABILITIES
                    </h2>
                    <p className="text-center text-lg text-gray-700 mb-12">
                        We specialize in delivering comprehensive solutions to meet diverse casting requirements with unparalleled precision and quality.
                    </p>

                    {/* Capabilities List */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Foundry identification and assessment",
                            "Process audits, system audits, and qualifications to meet customer criteria",
                            "Competitive pricing and SWOT analysis",
                            "Product development, tooling design, flow simulation, solidification analysis, and defect resolution",
                            "Material testing, micro-structure analysis, non-destructive testing (X-Ray, MPI, UT, etc.)",
                            "Production process control, zero-notice audits, and quality assurance",
                            "Inspection at source with quality reports for every batch",
                            "Secure export packaging  Logistics management",
                            "Logistics management",
                        ].map((capability, index) => (
                            <li
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 transform hover:scale-105 hover:shadow-2xl transition-transform"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-[#00B4D8] text-white rounded-full flex items-center justify-center text-xl font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                {/* Content */}
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {capability}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Call-to-Action */}
                    <div className="text-center mt-12">
                        <p className="text-xl text-gray-700 mb-4">
                            Partner with us to unlock the potential of Indian casting sourcing.
                        </p>
                        <p className="text-xl text-gray-700 mb-4">Contact us for a non-obligatory feasibility report to explore the best options for your needs.</p>
                        <a
                            href="#"
                            className="inline-block px-8 py-3 bg-[#00B4D8] text-white text-lg font-semibold rounded-lg shadow hover:bg-[#0077B6] transition-colors"
                        >
                            Request a Feasibility Report
                        </a>
                    </div>
                </div>
            </section>


            {/* Diverse Casting Solutions Section */}
            <section className="py-8 px-0 bg-gray-50">
                <div className="bg-slate-200 shadow-lg rounded-lg p-6 mb-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight leading-tight">
                            DIVERSE CASTING SOLUTIONS
                        </h2>

                        {/* Split Layout */}
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                            {/* Left Column */}
                            <div className="bg-white shadow-lg rounded-xl p-12 lg:w-1/2 hover:shadow-xl hover:bg-sky-200 transition-all">
                                <h3 className="text-2xl font-bold text-[#0077B6] mb-6">Metals</h3>
                                <ul className="space-y-4 text-pretty text-lg text-gray-900 list-disc list-inside">
                                    <li>
                                        Steels: Steels (Carbon, Low alloy carbon steels, Stainless steels, Duplex steels, Super Duplex Steels)
                                    </li>
                                    <li>Grey, Ductile Irons & White Iron</li>
                                    <li>
                                        Non-Ferrous-Aluminium, Copper, Bronze, Brass, Zinc
                                        & Magnesium
                                    </li>
                                </ul>
                            </div>

                            {/* Right Column */}
                            <div className="bg-white shadow-lg rounded-xl p-8 lg:w-1/2 hover:shadow-xl hover:bg-sky-200 transition-all">
                                <h3 className="text-2xl font-bold text-[#00B4D8] mb-6 ">
                                    Casting Processes
                                </h3>
                                <ul className="space-y-4 text-gray-900 text-pretty text-lg list-disc list-inside">
                                    <li>CO2, No-Bake, Lost Wax Investment Casting, Centrifugal Casting</li>
                                    <li>
                                        Green Sand, Shell Molding, Lost Foam, High Pressure Die Casting
                                    </li>
                                    <li>
                                        Gravity die (permanent mold), Shell Molding, High Pressure die casting, Continuous Casting (Horizontal and Upward)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Call-to-Action */}
                        <div className="text-center mt-12">
                            <a
                                href="#"
                                className="inline-block px-8 py-3 bg-[#0077B6] text-white text-lg font-medium rounded-full shadow-md hover:bg-[#023E8A] transition-colors"
                            >
                                Explore More Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </section>





            {/* Steel Castings Section */}
            <section className="py-4 px-6 bg-gray-0">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Section Header */}
                    <div className="mb-10 text-center">
                        {/* Section Title */}
                        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight leading-tight">
                            STEEL CASTING
                        </h2>

                        {/* Subheading/Tagline */}
                        <p className="text-xl text-sky-500 font-medium mb-4">
                            Precision Engineering, Exceptional Quality
                        </p>

                        {/* Description */}
                        <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
                            We provide high-quality steel castings from sand and investment processes, including carbon steel,
                            wear-resistant, stainless steel, low/high alloy steel, and nickel-based alloys. Our castings range
                            from a few grams/oz. to 5000 kg/11000 lbs. per piece, adhering to international standards such as
                            ASTM A216, A217, A297, A351, A352, A487, and more.
                        </p>
                    </div>


                    {/* Image Grid Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {[
                            {
                                image: stCast2,
                                title: "Stainless Steel Castings",
                            },
                            {
                                image: stCast1,
                                title: "High-Quality Carbon Steel Castings",
                            },

                            {
                                image: stCast3,
                                title: "Wear-Resistant Steel Castings",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {/* Title */}
                                <p className="absolute bottom-0 left-0 text-white text-lg font-medium p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Call-to-Action */}
                    <div className="mt-12">
                        <a
                            href="#"
                            className="inline-block px-8 py-3 text-lg font-medium text-white bg-sky-600 rounded-full shadow-md hover:bg-blue-900 transition-colors"
                        >
                            Learn More About Our Castings
                        </a>
                    </div>
                </div>
            </section>









            {/* Iron Castings Section */}
            <section className="py-0 px-0 bg-gradient-to-b from-gray-100 via-white to-gray-50">
                <div className="bg-slate-200 shadow-lg rounded-lg p-6 mb-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight leading-tight">
                            IRON CASTING
                        </h2>






                        {/* Ductile Iron Castings */}
                        <div className="bg-slate-200  rounded-lg p-8">
                            {/* Subheading */}
                            <h3 className="text-3xl font-semibold text-pretty font-serif text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                                Ductile Iron (SG Iron) Castings
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-gray-900  leading-relaxed mb-8">
                                We offer ductile iron castings weighing up to several metric tons, produced using high-pressure molding lines
                                (Disa, Sinto), jolt-squeeze molding, or hand-molding green sand processes. Cores are made with resin-bonded cold
                                box technology for precision and quality.
                            </p>

                            {/* Table Container */}
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                                    {/* Table Header */}
                                    <thead className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-bold">Standard</th>
                                            <th className="px-6 py-4 text-left font-bold">Country</th>
                                            <th className="px-6 py-4 text-left font-bold">Grades</th>
                                        </tr>
                                    </thead>

                                    {/* Table Body */}
                                    <tbody>
                                        {[
                                            ["IS 1865", "India", "370/17, 400/15, 500/7, 600/3"],
                                            ["ASTM A536", "United States", "60-40-18, 65-45-12, 80-55-06"],
                                            ["ISO 1083", "International", "400/15, 500/7, 600/3"],
                                            ["DIN 1693", "Germany", "GGG30, GGG40, GGG50"],
                                            ["BS 2789", "United Kingdom", "370/17, 420/12, 500/7"],
                                            [],
                                        ].map((row, index) => (
                                            <tr
                                                key={index}
                                                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                    } hover:bg-blue-50`}
                                            >
                                                {row.map((cell, cellIndex) => (
                                                    <td key={cellIndex} className="px-6 py-4 border-t border-gray-200">
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>



                            {/* Images Section */}
                            <div className="mt-10 mb-10 flex justify-start gap-36 flex-wrap">
                                {[IrCasting1, IrCasting2, IrCasting7].map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-50 h-60 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300"
                                    >
                                        <img
                                            src={image}
                                            alt={`Grey Iron Casting ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>







                    {/* Grey Iron Castings Section */}
                    <div className="py-12 px-6 ">
                        <div className="max-w-7xl mx-auto">
                            {/* Subheading */}
                            <h3 className="text-3xl font-semibold font-serif text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                                Grey Iron Castings
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Castings size range from a few grams/oz. up to 1500 kg/3300 lbs. per piece, meeting international
                                standards with the following material grades:
                            </p>

                            {/* Table Section */}
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                                    {/* Table Header */}
                                    <thead className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-bold">Standard</th>
                                            <th className="px-6 py-4 text-left font-bold">Country</th>
                                            <th className="px-6 py-4 text-left font-bold">Grades</th>
                                        </tr>
                                    </thead>

                                    {/* Table Body */}
                                    <tbody>
                                        {[
                                            ["IS 210", "India", "FG220, FG260, FG300"],
                                            ["ASTM A48", "United States", "30A, 35A, 40A"],
                                            ["DIN 1694", "Germany", "GG20, GG25, GG30"],
                                            ["BS 1452", "United Kingdom", "14, 17, 20"],
                                        ].map((row, index) => (
                                            <tr
                                                key={index}
                                                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                    } hover:bg-blue-50`}
                                            >
                                                {row.map((cell, cellIndex) => (
                                                    <td key={cellIndex} className="px-6 py-4 border-t border-gray-200">
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Images Section */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                                <img
                                    src={IrCasting3}
                                    alt="Grey Iron Casting 4"
                                    className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                                />

                                <img
                                    src={IrCasting4}
                                    alt="Grey Iron Casting 4"
                                    className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                                />
                                <img
                                    src={IrCasting5}
                                    alt="Grey Iron Casting 3"
                                    className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                                />
                                <img
                                    src={IrCasting6}
                                    alt="Grey Iron Casting 4"
                                    className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                                />


                            </div>


                        </div>
                    </div>

                </div>
            </section>





            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
                    {/* Left Side: Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                            NON-FERROUS CASTINGS
                        </h2>

                        {/* Aluminum Alloys */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold font-serif text-gray-800 mb-4">
                                Aluminum Alloys
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                <li>
                                    Sand and Gravity Castings: A336, A355, 356.2, A380, A384, A413
                                </li>
                                <li>
                                    High-Pressure Die Castings: ADC6, ADC8, ADC10, ADC12 (up to 4 kg,
                                    1500-ton capacity)
                                </li>
                            </ul>
                        </div>

                        {/* Zinc Alloys */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 font-serif mb-4">Zinc Alloys</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                <li>Zamak 2, Zamak 5, Zamak 6, Zamak 7</li>
                            </ul>
                        </div>

                        {/* Copper Alloys */}
                        <div>
                            <h3 className="text-xl font-semibold font-serif text-gray-800 mb-4">
                                Copper Alloys
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                <li>Brass, including lead-free grades like C6802</li>
                                <li>Aluminum Bronze: AB, AB2</li>
                                <li>Gun Metal: C83300, C84400, C92220</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Images */}
                    <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            NfCasting5,
                            NfCasting2,
                            NfCasting3,
                            NfCasting6,
                            NfCasting1,
                            NfCasting13,
                            NfCasting7,
                            NfCasting8,
                            NfCasting9,
                            NfCasting10,
                            NfCasting11,
                            NfCasting12,
                            NfCasting4,
                            NfCasting14,
                            NfCasting15,
                            NfCasting16,
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Non-Ferrous Casting ${index + 1}`}
                                className="h-24 w-11/12 rounded-lg shadow hover:shadow-lg hover:scale-x-150 hover:scale-y-150 transform transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>
            </section>








            <section className="py-0 px-0 bg-gradient-to-b from-gray-50 to-gray-100">
                <div className="bg-slate-200 shadow-lg rounded-lg p-6 mb-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Title */}
                        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight leading-tight">
                            LOST WAX INVESTMENT FOR STEEL & NON-FERROUS ALLOYS
                        </h2>

                        {/* Introductory Text */}

                        <p className="text-xl text-gray-900 mb-4 leading-relaxed">
                            Manufactured using the lost wax process for near-net shapes and as-cast surface finishes (60 to 125 RMS).
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-gray-900 mb-6">
                            <li className="text-lg">Achieves dimensional tolerances of ±0.15 mm per 25 mm.</li>
                        </ul>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Materials Offered:</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-900">
                            <li className="text-lg">Carbon Steel</li>
                            <li className="text-lg">
                                Stainless Steel (including duplex and precipitation-hardened grades like 17-4 PH)
                            </li>
                            <li className="text-lg">
                                Copper Alloys: Gun Metal, Phosphor Bronze, Leaded Tin Bronze, Aluminum Bronze, Manganese Bronze
                            </li>
                        </ul>


                        {/* First Set of Images */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 mb-10">
                            {[LWIcasting1, LWIcasting2, LWIcasting3, LWIcasting4].map((image, index) => (
                                <div
                                    key={index}
                                    className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200"
                                >
                                    <img
                                        src={image}
                                        alt={`Lost Wax Investment ${index + 1}`}
                                        className="w-full h-44 transition-transform duration-300 transform group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white text-sm font-semibold">Image</p>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>
            </section>












            <section className="py-12 px-6 ">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight leading-tight">LOST FOAM CASTINGS FOR IRON CASTINGS</h2>
                    <ul className="list-disc text-lg list-inside mb-6">
                        <li>An evaporative-pattern process similar to investment casting.</li>
                        <li>Uses EPS foam patterns instead of wax.</li>
                        <li>Simplifies production by eliminating the need for wax removal.</li>
                        <li>Ideal for complex designs that require cores.</li>
                    </ul>

                    {/* Second Set of Images */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[LWIcasting5, LWIcasting6, LWIcasting7, LWIcasting8].map((image, index) => (
                            <div
                                key={index + 4}
                                className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200"
                            >
                                <img
                                    src={image}
                                    alt={`Lost Wax Investment ${index + 5}`}
                                    className="w-full h-44 transition-transform duration-300 transform group-hover:scale-110"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white text-sm font-semibold">Image</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>





            {/* Simulation Section */}
            <section className="py-16  rounded-sm mb-5">
                <div className="bg-slate-200 shadow-lg rounded-lg p-6 mb-10">
                    {/* Title Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            IN-HOUSE SIMULATION CAPABILITIES
                        </h2>
                        <p className="text-lg text-gray-900 mt-4 leading-relaxed">
                            The team at Synergy Global Sourcing has vast expertise in casting simulation, casting design, feeding and gating design (rigging system), and foundry shopfloor experience to ensure precision in casting “right the first time” and consistent casting quality.
                        </p>
                    </div>

                    {/* Simulation Overview Content */}
                    <div className="bg-white shadow-transparent rounded-lg p-8 mb-12">
                        <p className="text-lg text-gray-900 leading-relaxed">
                            We have installed globally renowned casting simulation software from Adstefan (Hitachi). ADSTEFAN includes a pre-processor, solver, post-processor, and utility with capabilities for mesh creation, condition setting, and analysis execution. It can simulate various casting processes, including:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-gray-900 space-y-2">
                            <li>Die casting (squeeze, semi-solidification)</li>
                            <li>Gravity casting (sand mold/mold)</li>
                            <li>Low-pressure casting</li>
                            <li>Inclined casting</li>
                            <li>Centrifugal casting</li>
                            <li>Precision casting</li>
                            <li>Lost wax casting</li>
                            <li>Electro slag remelting (ESR)</li>
                        </ul>
                    </div>


                    {/* Images Section */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {[simulationProcess, simulation1, simulation2, simulation3, simulation4].map((image, index) => (
                            <div
                                key={index}
                                className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-200"
                            >
                                <img
                                    src={image}
                                    alt={`Simulation Image ${index + 1}`}
                                    className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white text-sm font-semibold">Image</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Videos Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 ">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <video
                                controls
                                className="w-full h-full rounded-lg"
                            >
                                <source src={dbSimulation} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="absolute bottom-2 left-4 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                                Database Simulation
                            </p>
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <video
                                controls
                                className="w-full h-full rounded-lg"
                            >
                                <source src={solidSimulation} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="absolute bottom-2 left-4 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                                Solid Simulation
                            </p>
                        </div>
                    </div>



                </div>
            </section>






        </div>
    );
};

export default Casting;
