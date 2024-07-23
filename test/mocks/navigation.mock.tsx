import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { NavbarComponent, SidebarComponent } from '../../src/components';
import { store } from '../../src/store';

export const NavigationComponentMock = ({
  initialState = true,
}: {
  initialState?: boolean;
}) => {
  const [state, setState] = useState(initialState);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent setOpen={setState} state={state} />
        <SidebarComponent state={state} />
      </BrowserRouter>
    </Provider>
  );
};
