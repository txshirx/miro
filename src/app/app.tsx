import { Outlet, useLocation } from "react-router-dom";
import { AppHeader } from "@/features/header";
import { ROUTES } from "@/shared/model/routes";

export function App() {

  const location = useLocation();
  const isAuthPage = location.pathname === ROUTES.REGISTER || location.pathname === ROUTES.LOGIN;
  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </div>
  );
}
