import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/spring-boot.svg";

export default function SpringBootLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Spring Boot</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Spring Boot Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}