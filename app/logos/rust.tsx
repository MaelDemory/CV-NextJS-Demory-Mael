import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/rust.svg";

export default function RustLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Rust</CardTitle>
            </CardHeader>
            <CardContent className='justify-center'>
                <Image src={logo} alt="Logo Rust" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}