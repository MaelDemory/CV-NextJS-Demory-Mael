import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/grafana.svg";

export default function GrafanaLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Grafana</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Grafana Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}