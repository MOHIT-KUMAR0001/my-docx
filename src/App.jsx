import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import DocumentPage from './pages/DocumentPage';
import { getDefaultDocPath, documentStructure } from './utils/documentStructure';

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.slice(1);
    return hash || getDefaultDocPath(documentStructure);
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setCurrentPath(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MainLayout currentPath={currentPath} onNavigate={handleNavigate}>
      <DocumentPage path={currentPath} />
    </MainLayout>
  );
}

export default App;
