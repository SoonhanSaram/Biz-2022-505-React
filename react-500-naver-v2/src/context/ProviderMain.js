import { BookContextProvider } from "./BookContextProvider";
import { UserContextProvider } from "./UserContextProvider";
import { MyBookContextProvider } from "./MyBookContextProvider";
export const ProviderMain = ({ children }) => {
  return (
    <UserContextProvider>
      <MyBookContextProvider>
        <BookContextProvider>{children}</BookContextProvider>
      </MyBookContextProvider>
    </UserContextProvider>
  );
};
