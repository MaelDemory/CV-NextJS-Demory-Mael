import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/terraform.svg";

export default function TerraformLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Terraform</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Terraform Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}