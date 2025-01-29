import React, { useState } from 'react';
import { Film, Sparkles, Music, Hash } from 'lucide-react';

const ReelsGenerator = () => {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState('tutorial');
  const [duration, setDuration] = useState('30');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!topic) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const styleOptions = [
    { value: 'tutorial', label: 'Tutorial Style' },
    { value: 'storytelling', label: 'Storytelling' },
    { value: 'trending', label: 'Trending Format' },
    { value: 'educational', label: 'Educational' },
    { value: 'behind-scenes', label: 'Behind the Scenes' }
  ];

  const durationOptions = [
    { value: '15', label: '15 seconds' },
    { value: '30', label: '30 seconds' },
    { value: '60', label: '60 seconds' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Reels Generator</h2>
        
        <div className="space-y-6">
          {/* Topic Input */}
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
              What's your Reel about?
            </label>
            <input
              type="text"
              id="topic"
              placeholder="E.g., Social media growth tips, Behind the scenes of my business"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          {/* Style Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Reel Style
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {styleOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setStyle(option.value)}
                  className={`
                    p-3 rounded-lg border-2 flex items-center space-x-2
                    ${style === option.value 
                      ? 'border-purple-500 bg-purple-50 text-purple-700' 
                      : 'border-gray-200 hover:border-purple-200'}
                  `}
                >
                  <Film className="h-5 w-5" />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Duration Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reel Duration
            </label>
            <div className="flex space-x-4">
              {durationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setDuration(option.value)}
                  className={`
                    px-4 py-2 rounded-lg border-2
                    ${duration === option.value 
                      ? 'border-purple-500 bg-purple-50 text-purple-700' 
                      : 'border-gray-200 hover:border-purple-200'}
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !topic}
            className={`
              w-full py-3 rounded-lg text-white font-medium flex items-center justify-center space-x-2
              ${isGenerating || !topic
                ? 'bg-purple-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'}
            `}
          >
            {isGenerating ? (
              <>
                <Sparkles className="h-5 w-5 animate-spin" />
                <span>Generating Reel Concept...</span>
              </>
            ) : (
              <>
                <Film className="h-5 w-5" />
                <span>Generate Reel Concept</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Content Preview */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Generated Reel Concept</h3>
        {isGenerating ? (
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          </div>
        ) : (
          <p className="text-gray-500">Generate a reel concept to see the AI suggestions here.</p>
        )}
      </div>
    </div>
  );
};

export default ReelsGenerator;