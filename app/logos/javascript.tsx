import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/javascript.svg";

export default function JavaScriptLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>JavaScript</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="JavaScript Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}