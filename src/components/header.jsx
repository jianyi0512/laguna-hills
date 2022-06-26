import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return(
        <header className="container-fluid bg-white sticky-top bg-white mb-5">
            <div className="row justify-content-around shadow-sm">
                <div className="col-4">
                    <Link href="/">
                        <a className="navbar-brand">
                            <Image src="/LagunaHills_216x26.svg" className="d-flex align-items-center" width={300} height={90} quality={90} />
                        </a>
                    </Link>
                </div>
                
                <nav className="navbar navbar-expand-lg col-4 d-flex align-items-center justify-content-end">
                    
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                {/* <div class="collapse navbar-collapse" id="navbarNavDropdown"> */}
                    <ul className="nav">
                        <li className="nav-item"><Link href="/products"><a className="nav-link text-body">輸入製品</a></Link></li>
                        <li className="nav-item"><Link href="/develop"><a className="disabled nav-link text-body">自社製品・開発</a></Link></li>
                        <li className="nav-item"><Link href="/aboutus"><a className="nav-link text-body">会社案内</a></Link></li>
                        <li className="nav-item"><Link href="/contact"><a className="nav-link text-body">問合せ</a></Link></li>
                    </ul>
                    {/* </div> */}
                </nav>
            </div>
        </header>
    )
}

export default Header
