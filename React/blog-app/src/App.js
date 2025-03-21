import logo from "./logo.svg";
import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";

function App() {
  const userInfo = { username: "Admin", isAdmin: true };

  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage />
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
