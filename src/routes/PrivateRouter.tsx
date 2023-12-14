import { Routes, Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
  needAuth: boolean;
}

const PrivateRoute = ({ element, ...props }: PrivateRouteProps) => {
  const isAuthenticated = props.needAuth;

  if (isAuthenticated) {
    return <Route {...props} element={element} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export const PrivateRouter = () => {
  return (
    <Routes>
      <PrivateRoute
        needAuth={true}
        path="managment"
        element={<h1>Gestor</h1>}
      />

      <Route path="*" element={<Navigate to="/admin/managment" />} />
    </Routes>
  );
};
