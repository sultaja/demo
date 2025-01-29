import React, { useState } from 'react';
import { Upload, Sparkles, AlertCircle } from 'lucide-react';

const AnalyzePage = () => {
  const [instagramUrl, setInstagramUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = () => {
    if (!instagramUrl) {
      setError('Please enter an Instagram profile URL');
      return;
    }
    setError('');
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Analyze Instagram Profile</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="instagram-url" className="block text-sm font-medium text-gray-700 mb-2">
              Instagram Profile URL
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                id="instagram-url"
                placeholder="https://instagram.com/username"
                className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
              />
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className={`
                  px-6 py-2 rounded-lg text-white font-medium flex items-center space-x-2
                  ${isAnalyzing 
                    ? 'bg-purple-400 cursor-not-allowed' 
                    : 'bg-purple-600 hover:bg-purple-700'}
                `}
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="h-5 w-5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5" />
                    <span>Analyze Profile</span>
                  </>
                )}
              </button>
            </div>
            {error && (
              <div className="mt-2 flex items-center text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {error}
              </div>
            )}
          </div>

          {isAnalyzing && (
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-purple-600 animate-pulse" />
                <span className="text-purple-700">AI is analyzing the Instagram profile...</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-2 bg-purple-200 rounded-full w-3/4 animate-pulse"></div>
                <div className="h-2 bg-purple-200 rounded-full w-1/2 animate-pulse"></div>
                <div className="h-2 bg-purple-200 rounded-full w-2/3 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Analysis Results will appear here */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Previous Analysis Results</h3>
        <p className="text-gray-500">No previous analysis available. Analyze a profile to see insights.</p>
      </div>
    </div>
  );
};

export default AnalyzePage;