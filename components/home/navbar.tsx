import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

import Logo from '@/public/logo.png'

export function Navbar() {
    return (
        <div className="w-full h-16 bg-muted/10 flex items-center sticky top-0 shadow-lg z-50 border-b">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image src={Logo} alt="Logo NetBR Telecom" />
                </Link>
                <div className="flex items-center gap-4">
                <nav>
                    <ul className="flex items-center gap-4 text-zinc-100 font-semibold">
                        <li>
                            <Link href="#">Inicio</Link>
                        </li>
                        <li>
                            <Link href="#">Planos</Link>
                        </li>
                        <li>
                            <Link href="#">Sobre</Link>
                        </li>
                    </ul>
                </nav>

                <Button asChild>
                    <Link href="#" className="font-semibold">
                        Contato
                    </Link>
                </Button>
                </div>
            </div>
        </div>
    )
}