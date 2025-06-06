import { ROUTES } from "@/shared/model/routes";
import { AuthLayout } from "./ui/auth-layout";
import { Link } from "react-router-dom";
import { RegisterForm } from "./ui/register-form";

function RegisterPage() {


  return (
    <AuthLayout
      title="Регистрация"
      description="Введите ваш email и пароль для входа в систему"
      footerText={<>Уже есть аккаунт? <Link className="underline text-primary" to={ROUTES.LOGIN}>Войти</Link></>}
      form={<RegisterForm/>}
    >
      
    </AuthLayout>
  );
}

export const Component = RegisterPage;
