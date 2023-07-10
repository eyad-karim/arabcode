import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return ( 
        <header className="bg-white py-2">
            <div className="container mx-auto flex flex-row justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <Image src={"/media/logo.png"} height={50} width={50}/>
                    <span className="font-bold">عرب كود</span>
                </div>
                <nav className="flex items-center">
                    <ul className="flex flex-row gap-3">
                        <li className="anchor"><Link href={'/'}>الصفحة الرئيسية</Link></li>
                        <li className="anchor"><Link href={'/courses'}>الدورات التعليمية</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;