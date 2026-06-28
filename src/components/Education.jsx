export default function Education() {
    return (
        <>
            <div className="pt-10" id="education">
            <hr  className="text-gray-500 w-[200vh] mx-10"/>
                <h1 className="text-white text-center text-4xl pt-5 font-semibold" data-aos="zoom-in-up">My <span className="text-cyan-500">Education</span></h1>
                <div>
                    <ol
                        className="relative flex gap-8 before:absolute before:-mt-px before:h-0.5 before:w-full before:rounded-full before:bg-gray-200  pt-20 px-20 w-[190vh]"
                        data-aos="fade-right"  data-aos-duration="1000" >
                        <li className="relative -mt-1.5">
                            <span className="block size-3 rounded-full bg-blue-600"></span>

                            <div className="mt-4">
                                <time className="text-xs/none font-medium text-gray-300">|2024 – Present |</time>

                                <h3 className="text-xl font-bold text-cyan-500">Engineering</h3>

                                <p className="mt-0.5 text-sm text-white">
                                BTech IT Dr.N.G.P.Institute Of Technology | Current CGPA: 8.4 |
                                </p>
                            </div>
                        </li>

                        <li className="relative -mt-1.5 px-20">
                            <span className="block size-3 rounded-full bg-blue-600"></span>

                            <div className="mt-4">
                                <time className="text-xs/none font-medium text-gray-300">|2022-2024 |</time>

                                <h3 className="text-xl font-bold text-cyan-500">Higher Secondary</h3>

                                <p className="mt-0.5 text-sm text-white">
                                S.L.B. Government Higher Secondary School, Nagercoil  
                                |Percentage: 80%|
                                </p>
                            </div>
                        </li>

                        <li className="relative -mt-1.5">
                            <span className="block size-3 rounded-full bg-blue-600"></span>

                            <div className="mt-4">
                                <time className="text-xs/none font-medium text-gray-300">|2021 – 2022 | </time>

                                <h3 className="text-xl font-bold text-cyan-500">Secondary Education</h3>

                                <p className="mt-0.5 text-sm text-white">
                                Ed Willmott Memorial SDA Higher Secondary School, Nagercoil |Percentage: 80%|
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}