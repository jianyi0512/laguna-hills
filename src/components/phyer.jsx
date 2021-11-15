//import jacketData from "../../data/obj/jacketData";
import Image from 'next/image'
import * as style from "../styles/common.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

const Phyer = () => {

    return(
        <>
        
            <div className="container-fluid g-0">
                <div className="bg-dark text-center">
                    <h2 className="text-white mb-0 py-4"></h2>
                </div>
                <div  className={style.bgSpace}>
                <div className="row px-0 py-0 g-0 fs-0">
                    <div className="col-6">
                        <Image src="/img/jacket_images/pax601024x512.webp" width={1273} height={636} />
                    </div>
                    <div className="col-3">
                        <Image src="/img/jacket_images/AVDT-BOB.webp"  width={636} height={636} />
                    </div>
                    <div className="col-3">
                        <Image src="/img/jacket_images/network.webp"  width={636} height={636} />
                    </div>
                    <div className="col-3">
                        <Image src="/img/jacket_images/blocks5_600x600.webp"  width={636} height={636} />
                    </div>
                    <div className="col-3">
                        <Image src="/img/jacket_images/rubi1512x512.webp" width={636} height={636}/>
                    </div>
                    <div className="col-6">
                        <Image src="/img/jacket_images/4D1200x600withBK.webp" width={1273} height={636} />
                    </div>
                    <div className="col-6 border">
                        <Image src="/img/jacket_images/AVBx7-SBr1024x512.webp" width={1273} height={636} />
                    </div>
                    <div className="col-3 border">
                        <Image src="/img/jacket_images/pax40512x512.webp"  width={636} height={636} />
                    </div>
                    <div className="col-3 border">
                        <Image src="/img/jacket_images/UD300_512x512Front.webp"  width={636} height={636} />
                    </div>
                </div>
                </div>
            </div>
            {/* <div className={style.bgSpace}>
            <Image src="/img/jacket_images/pax601024x512.webp" width={1273} height={636} />
            <Image src="/img/jacket_images/AVDT-BOB.webp"  width={636} height={636} />
            <Image src="/img/jacket_images/network.webp"  width={636} height={636} />
            </div>
            <div>
            <Image src="/img/jacket_images/pax601024x512.webp" width={1273} height={636} />
            <Image src="/img/jacket_images/AVDT-BOB.webp"  width={636} height={636} />
            <Image src="/img/jacket_images/network.webp"  width={636} height={636} />
            </div> */}
        </>
    )
}

export default Phyer
