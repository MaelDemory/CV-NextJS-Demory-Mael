import Image from "next/image";
import logo from "@/assets/images/logos/linkedin.svg";

export default function LinkedInLogo() {
    return (
        <Image src={logo} alt="LinkedIn Logo" width={64} height={64}/>
    );
}