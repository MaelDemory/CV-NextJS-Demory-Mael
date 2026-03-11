import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/bootstrap.svg";

export default function BootstrapLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Bootstrap</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Bootstrap Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}