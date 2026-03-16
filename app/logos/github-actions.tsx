import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/github-actions.svg";

export default function GithubActionsLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>GitHub Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="GitHub Actions Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}