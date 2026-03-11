import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/docker.svg";

export default function DockerLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Docker</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Docker Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}