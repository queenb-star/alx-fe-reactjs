// src/App.jsx
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      {/* Existing components */}
      <Header />
      <MainContent />
      <Footer />

      {/* UserProfile examples */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys cooking and traveling" 
      />
      <UserProfile 
        name="Clara" 
        age={22} 
        bio="Passionate about painting" 
      />
    </div>
  );
}

export default App;
