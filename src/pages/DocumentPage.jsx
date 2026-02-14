import { useState, useEffect } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import TableOfContents from '../components/TableOfContents';
import { loadDocument, parseMarkdownMeta, extractHeadings } from '../utils/documentUtils';

export default function DocumentPage({ path }) {
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});
  const [headings, setHeadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      
      try {
        const raw = await loadDocument(path);
        
        if (!raw) {
          setError('Document not found');
          setLoading(false);
          return;
        }
        
        const { meta: docMeta, content: docContent } = parseMarkdownMeta(raw);
        const docHeadings = extractHeadings(docContent);
        
        setMeta(docMeta);
        setContent(docContent);
        setHeadings(docHeadings);
      } catch (err) {
        console.error('Error loading document:', err);
        setError('Failed to load document');
      } finally {
        setLoading(false);
      }
    }
    
    load();
  }, [path]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading document...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-8">
        <div className="text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="text-2xl font-semibold mb-2">{error}</h2>
          <p className="text-gray-600 dark:text-gray-400">The requested document could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-8">
        {meta.title && (
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
            {meta.description && (
              <p className="text-xl text-gray-600 dark:text-gray-400">{meta.description}</p>
            )}
          </div>
        )}
        
        <MarkdownRenderer content={content} />
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      
      <TableOfContents headings={headings} />
    </>
  );
}
