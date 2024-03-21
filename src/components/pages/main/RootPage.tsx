import { Outlet } from 'react-router-dom';

export const RootPage = () => {
  return (
    <>
      <h2>navbar</h2>
      <Outlet />
      <h2>sidebar</h2>
    </>
  );
};
