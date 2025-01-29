import React from 'react';
import { Sparkles } from 'lucide-react';

const Overview = () => {
  const profileStats = {
    username: '@growthmaster',
    followers: '25.4K',
    following: '892',
    posts: '347',
    growthRate: '+12.5%',
    profileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'
  };

  const topReels = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop',
      title: 'Social Media Growth Hacks',
      views: '52.3K',
      likes: '4.2K',
      engagement: '8.2%'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop',
      title: 'Content Creation Tips',
      views: '48.7K',
      likes: '3.9K',
      engagement: '7.8%'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600&fit=crop',
      title: 'Instagram Algorithm Secrets',
      views: '45.1K',
      likes: '3.6K',
      engagement: '7.5%'
    }
  ];

  const growthTips = [
    {
      tip: 'Increase Reel frequency to 5x/week',
      impact: 'Potential 25% reach increase',
      priority: 'High'
    },
    {
      tip: 'Use trending audio in next 3 Reels',
      impact: 'Potential 15% engagement boost',
      priority: 'Medium'
    },
    {
      tip: 'Collaborate with 3 niche creators',
      impact: 'Estimated 2K follower growth',
      priority: 'High'
    }
  ];

  return (
    <>
      {/* Profile Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center space-x-6">
          <img
            src={profileStats.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">{profileStats.username}</h2>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-xl font-semibold">{profileStats.followers}</div>
                <div className="text-sm text-gray-500">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold">{profileStats.following}</div>
                <div className="text-sm text-gray-500">Following</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold">{profileStats.posts}</div>
                <div className="text-sm text-gray-500">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-green-500">{profileStats.growthRate}</div>
                <div className="text-sm text-gray-500">Growth Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Reels */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Reels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topReels.map((reel, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-2">{reel.title}</h4>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">{reel.views}</div>
                    <div className="text-gray-500">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{reel.likes}</div>
                    <div className="text-gray-500">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-500">{reel.engagement}</div>
                    <div className="text-gray-500">Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Growth Tips */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">AI Growth Recommendations</h3>
        <div className="space-y-4">
          {growthTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600 mt-1" />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{tip.tip}</h4>
                <p className="text-sm text-gray-500 mt-1">{tip.impact}</p>
              </div>
              <span className={`
                px-2 py-1 text-xs rounded-full
                ${tip.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}
              `}>
                {tip.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Overview;