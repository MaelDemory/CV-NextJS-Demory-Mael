import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/Git.svg";

export default function GitLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Git</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Git Logo" width={52} height={52} className="h-[52px] w-[52px] object-contain"/>
            </CardContent>
        </Card>
    );
}