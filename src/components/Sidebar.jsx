import { documentStructure } from '../utils/documentStructure';

export default function Sidebar({ isOpen, onClose, currentPath, onNavigate }) {
  const handleNavigation = (path) => {
    onNavigate(path);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const renderItem = (item, level = 0) => {
    const isActive = item.path === currentPath;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.path || item.title}>
        {item.path ? (
          <button
            onClick={() => handleNavigation(item.path)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
            } ${level > 0 ? 'ml-4' : ''}`}
          >
            {item.title}
          </button>
        ) : (
          <div className={`px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider ${level > 0 ? 'ml-4' : ''}`}>
            {item.title}
          </div>
        )}
        
        {hasChildren && (
          <div className="mt-1 space-y-1">
            {item.children.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <nav className="p-4 space-y-1">
          {documentStructure.map(item => renderItem(item))}
        </nav>
      </aside>
    </>
  );
}
