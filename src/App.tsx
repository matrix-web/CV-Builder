import { FC, useState, useReducer } from 'react';
import { GlobalStyles } from '@/helpers/styles/globalStyles';
import { Default } from './layouts/Default';
import { FlipperCard } from './components/FlipperCard/FlipperCard';
import { ModalContext } from './contexts/ModalContext';
import { ResumeContext } from './contexts/ResumeContext';
import { ResumeReducer } from './store/reducers/ResumeReducer';
import { IAbout, IResumeState } from './models';
import { Gradient } from './components/Gradient/Gradient';

const initialState: IResumeState = {
  about: {} as IAbout,
  workExperience: [],
  skills: [],
  projects: []
}

const App: FC = ():JSX.Element => {
  const [state, dispatch] = useReducer(ResumeReducer, initialState);
  
  const [modalValue, setModalValue] = useState({
    payload: null,
    workExperience: false,
    skills: false,
    about: false,
    project: false
  });

  return (
    <>
      <GlobalStyles />
      <ModalContext.Provider value={[modalValue, setModalValue]}>
        <ResumeContext.Provider value={{
          state,
          dispatch
        }}>
          <Gradient />
          <Default>
            <FlipperCard />
          </Default>
        </ResumeContext.Provider>
      </ModalContext.Provider>
    </>
  );
}

export default App;
