import { FaGithub, FaHtml5, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About(){
    return(
        <>
         <div className=" pt-48 " id="about" >
         <hr  className="text-gray-500 w-[200vh] mx-10"/>
            <h1 className="text-white pt-10 text-center text-4xl font-semibold about" data-aos="zoom-in-up">About <span className="text-cyan-500">Me</span></h1>
            <p className="text-white px-20 pt-10 text-lg" data-aos="fade-right"  data-aos-duration="1000"> Hi My name is Pratheesh ,Im a motivated first-year B.Tech IT student passionate about Full stack developement and eager to learn. I enjoy building responsive web applications and exploring new technologies. I adapt quickly, collaborate well,  and embrace challenges that help me grow. Excited to apply my skills <br />to real-world projects and make a meaningful impact.</p>
             <div className="flex justify-around pt-10" data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="text-white border rounded-4xl border-dashed w-[20vh] h-10 text-center p-2"> HTML & CSS-90%</h1>
                <h1 className="text-white border rounded-4xl border-dashed w-[20vh] h-10 text-center p-2">Javascript-75%</h1>
                <h1 className="text-white border rounded-4xl border-dashed w-[20vh] h-10 text-center p-2">Tailwind CSS-90%</h1>
                <h1 className="text-white border rounded-4xl border-dashed w-[20vh] h-10 text-center p-2">React js-75%</h1> 
             </div>
             <div className="flex px-20 pt-10" data-aos="fade-right"  data-aos-duration="1000">
             <div >
                <h1 className="text-white ">Phone : 9361029817</h1>
                <h1 className="text-white ">Email : pratheehpratheesh2006@gmail.com</h1>
                <h1 className="text-white ">Address: Main road chunkankadai near RC church kanyakumari 629003</h1>
             </div>
             <div className="px-46">
             <h1 className="text-white "><a href="https://github.com/pratheesh-18">Github: Pratheesh-18</a></h1>
             <h1 className="text-white "><a href="https://www.linkedin.com/in/pratheesh-p-s-226809328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkdin: Pratheesh PS</a></h1>
             </div>
             </div>
             <div>
                <div className="text-gray-500 flex w-[45vh] justify-between px-20 pt-5" data-aos="zoom-in-up" data-aos-duration="1000">
                    <a href="https://www.instagram.com/zx._.goat._.18/profilecard/?igsh=bzU4OWJyeTE3Zzh5" className="hover:text-cyan-500 "><FaInstagram  size={35}/></a>
                    <a href="https://www.linkedin.com/in/pratheesh-p-s-226809328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-cyan-500 "><FaLinkedin  size={35}/></a>
                    <a href="https://github.com/pratheesh-18" className="hover:text-cyan-500 "><FaGithub  size={35}/></a>
                </div>
             </div>
         </div>
        </>
    )
}