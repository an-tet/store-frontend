import { Navigate } from 'react-router-dom';
import { AuthModel } from '../../models/auth/auth.model';
import { roleEnum } from '../../enum';

interface RoleRoutesProtectionProps {
  roles: roleEnum[];
  component: JSX.Element;
}

const RoleRoutesProtection = ({
  roles,
  component,
}: RoleRoutesProtectionProps) => {
  const authStored = localStorage.getItem('user');
  const auth: AuthModel = JSON.parse(authStored || '{}');

  if (Object.values(roles).includes(auth.role as roleEnum)) return component;
  else {
    return <Navigate to='/' replace />;
  }
};

export default RoleRoutesProtection;
