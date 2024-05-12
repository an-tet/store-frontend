import { UseGuards, applyDecorators } from '@nestjs/common';
import { ValidRoles } from '../enum/valid-roles';
import { RoleProtected } from './role-protected.decorator';
import { AuthGuard } from '@nestjs/passport';
import { ValidateRoleGuard } from '../guards/validate-role/validate-role.guard';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard(), ValidateRoleGuard),
  );
}
