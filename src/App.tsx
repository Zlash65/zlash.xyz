import Header from './components/Header';
import StarField from './components/StarField';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <StarField />
      <FloatingElements />
      <Header />
      {/* Placeholder for future sections */}
    </div>
  );
}

export default App;
