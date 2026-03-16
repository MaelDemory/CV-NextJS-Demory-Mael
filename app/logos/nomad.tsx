import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/nomad.svg";

export default function NomadLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Nomad</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Nomad Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}