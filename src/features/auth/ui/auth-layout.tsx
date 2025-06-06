
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card";


export function AuthLayout({form, title, description, footerText}: 
    {form: React.ReactNode, title: React.ReactNode, description: React.ReactNode, footerText: React.ReactNode}
) {
    return (
    <main className="grow flex pt-[200px] flex-col items-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {form}
        </CardContent>
        <CardFooter>
          <p>
            {footerText}
          </p>
        </CardFooter>
      </Card>
    </main>
    )
}