import { Outlet } from 'react-router-dom';

export const RootPage = () => {
  return (
    <>
      <Outlet />
      <h2>sidebar</h2>
    </>
  );
};
