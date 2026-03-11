import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/flutter.svg";

export default function FlutterLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Flutter</CardTitle>
            </CardHeader>
            <CardContent className='justify-center'>
                <Image src={logo} alt="Logo Flutter" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}