import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/postman.svg";

export default function PostmanLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Postman</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Postman Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}