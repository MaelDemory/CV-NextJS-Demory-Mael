import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/mssql.svg";

export default function MSSQLLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>MSSQL</CardTitle>
            </CardHeader>
            <CardContent className='justify-center'>
                <Image src={logo} alt="Logo MSSQL" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}