export default function Footer(){
    return(
        <>
         <hr  className="text-gray-500 w-[200vh] mx-10 mt-20"/>
        <footer className=" text-white py-6">
           
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
        </>
    )
}