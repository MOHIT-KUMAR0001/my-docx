import { useScrollSpy } from '../hooks/useScrollSpy';

export default function TableOfContents({ headings }) {
  const activeId = useScrollSpy(headings.map(h => h.id));

  if (!headings || headings.length === 0) {
    return null;
  }

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hidden xl:block fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] overflow-y-auto p-6 border-l border-gray-200 dark:border-gray-800">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
          On This Page
        </h3>
        
        <nav className="space-y-2">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block text-sm transition-colors ${
                heading.level === 3 ? 'pl-4' : ''
              } ${
                activeId === heading.id
                  ? 'text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
