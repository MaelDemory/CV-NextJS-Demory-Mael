import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/flask.svg";

export default function FlaskLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Flask</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Flask Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}