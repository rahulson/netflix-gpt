import { ReactElement, createContext, useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/user";
import { onAuthStateChanged } from "firebase/auth";

const ApplicationContext = createContext(null);

type AppContextProps = {
  children: ReactElement;
};

const AppContext = ({ children }: AppContextProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, photoURL, phoneNumber, email, displayName } = user;
        user.getIdToken().then((token) => {
          dispatch(
            addUser({
              uid: uid,
              photoURL: photoURL ?? "",
              displayName: displayName ?? "",
              token: token,
              phoneNumber: phoneNumber ?? "",
              email: email ?? "",
            })
          );
        });
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <ApplicationContext.Provider value={null}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContext;
