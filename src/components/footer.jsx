import Link from 'next/link'
import Image from 'next/image'
import comstyle from "../styles/common.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {

    return(
        <>
            {/* <footer className="footer mt-5 py-5 container-fluid" className={comstyle.bgBlack} > */}
            <footer className="footer mt-5 py-5 container-fluid bg-black" >
               
                <div className="container">
                    <div className="container w-25 d-block mx-auto" >
                        <Image src="/img/lagunahills/LagunaHills_footer.svg" width={288} height={162} quality={90} />
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer
