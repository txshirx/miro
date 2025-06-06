import { rqClient } from "@/shared/api/instance";
import { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/model/routes";
import { useNavigate } from "react-router-dom";

export function useRegister() {
    const navigate = useNavigate()
    
    const registerMutation = rqClient.useMutation("post", "/auth/register", {
        onSuccess: () => {
            navigate(ROUTES.HOME)
        }
    })

    const register = (data: ApiSchemas["AuthRequest"]) => {
        registerMutation.mutate({ body: data })
    }

    const errorMessage = registerMutation.isError ? registerMutation.error.message : null;

    return (
        {register, isPending: registerMutation.isPending, errorMessage}
    );
}