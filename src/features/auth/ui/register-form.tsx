import { Button } from "@/shared/ui/kit/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from "@/shared/ui/kit/form"
import { Input } from "@/shared/ui/kit/input"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegister } from "../model/use-register";

const registerSchema = z.object({
    email: z
    .string({
        required_error: "Email не может быть пустым",
    })
    .email("Неверный email"),
    password: z
    .string({
        required_error: "Пароль не может быть пустым",
    })
    .min(8, "Пароль должен быть не менее 8 символов"),
    confirmPassword: z.string().optional()
})
.refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Пароли не совпадают",
});

export function RegisterForm() {
    const form = useForm({
        resolver: zodResolver(registerSchema)
    });

    const {register, isPending, errorMessage} = useRegister();

    const onSubmit = form.handleSubmit(register);

    if (isPending) {
        <>Loading...</>
    }

    if (errorMessage) {
        <>{errorMessage}</>
    }

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
                            <Input placeholder="********" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Зарегистрироваться</Button>
            </form>
        </Form>
    )
} 