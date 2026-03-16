import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/linux.svg";

export default function LinuxLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Linux</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Linux Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}