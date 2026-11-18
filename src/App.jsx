import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="profiles-container">

        <ProfileCard
          name="John"
          description="My programming teacher. Loves React."
          avatar="https://i.pravatar.cc/150?img=12"
          type="Friend"
        />

        <ProfileCard
          name="Sarah"
          description="My best friend. Loves sports and music."
          avatar="https://i.pravatar.cc/150?img=47"
          type="Teacher"
        />

        <ProfileCard
          name="David"
          description="Computer Science student."
          avatar="https://i.pravatar.cc/150?img=13"
          type="Student"
        />

      </main>

      <Footer />
    </div>
  );
}

export default App;