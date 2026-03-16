import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/gitlab-ci.svg";

export default function GitlabCILogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>GitLab CI</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="GitLab CI Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}