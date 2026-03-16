import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/sonarqube.svg";

export default function SonarQubeLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>SonarQube</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="SonarQube Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}