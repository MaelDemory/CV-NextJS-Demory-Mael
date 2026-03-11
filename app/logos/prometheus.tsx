import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/prometheus.svg";

export default function PrometheusLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Prometheus</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Prometheus Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}