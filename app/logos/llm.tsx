import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function LLM() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>LLM</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-center text-sm text-muted-foreground'>Claude, ChatGPT, Gemini</p>
            </CardContent>
        </Card>
    );
}