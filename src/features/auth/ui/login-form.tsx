import { Button } from "@/shared/ui/kit/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from "@/shared/ui/kit/form"
import { Input } from "@/shared/ui/kit/input"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from "@/features/auth/model/use-login";

const loginSchema = z.object({
    email: z
    .string({
        required_error: "Email не может быть пустым",
    })
    .email("Неверный email"),
    password: z
    .string({
        required_error: "Пароль не может быть пустым",
    })
    .min(8, "Пароль должен быть не менее 8 символов")
});

export function LoginForm() {
    const form = useForm({
        resolver: zodResolver(loginSchema)
    });

    const {login, isPending, errorMessage} = useLogin();

    if (isPending) {
        return <div>Loading...</div>
    }

    if (errorMessage) {
        return <div>{errorMessage}</div>
    }

    const onSubmit = form.handleSubmit(login);

    return (
        <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="admin@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="********" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Войти</Button>
            </form>
        </Form>
    )
} 