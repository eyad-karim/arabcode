import Navbar from "./navbar";
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({ subsets: ['arabic'],weight: ["200", "300", "400", "500", "700", "800", "900"] })

function Layout({children}) {
    return ( 
        <div
            className={`${tajawal.className}`}
        >
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;