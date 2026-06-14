import { Plus, Send, Eye, TrendingUp, Mail as MailIcon, BarChart3, Play, Pause } from 'lucide-react'
import { useState } from 'react'

type Campaign = {
  id: number
  name: string
  status: 'draft' | 'active' | 'paused' | 'completed'
  sent: number
  opens: number
  clicks: number
  replies: number
  openRate: string
  clickRate: string
}

export default function Outreach() {
  const [campaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: 'Q2 Product Update',
      status: 'active',
      sent: 1247,
      opens: 524,
      clicks: 224,
      replies: 42,
      openRate: '42%',
      clickRate: '18%',
    },
    {
      id: 2,
      name: 'Welcome Series',
      status: 'active',
      sent: 342,
      opens: 198,
      clicks: 89,
      replies: 23,
      openRate: '58%',
      clickRate: '26%',
    },
    {
      id: 3,
      name: 'Re-engagement Campaign',
      status: 'paused',
      sent: 856,
      opens: 247,
      clicks: 76,
      replies: 12,
      openRate: '29%',
      clickRate: '9%',
    },
  ])

  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(campaigns[0])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700'
      case 'paused':
        return 'bg-yellow-100 text-yellow-700'
      case 'draft':
        return 'bg-gray-100 text-gray-700'
      case 'completed':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Outreach Campaigns</h1>
            <p className="text-gray-600">Manage and track your email campaigns</p>
          </div>
          <button className="mt-4 sm:mt-0 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={20} />
            <span>New Campaign</span>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Send className="text-blue-600" size={20} />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">2,445</div>
            <div className="text-sm text-gray-600">Total Sent</div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Eye className="text-green-600" size={20} />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">969</div>
            <div className="text-sm text-gray-600">Total Opens</div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-purple-600" size={20} />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">389</div>
            <div className="text-sm text-gray-600">Total Clicks</div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <MailIcon className="text-orange-600" size={20} />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">77</div>
            <div className="text-sm text-gray-600">Total Replies</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Campaign List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-900">All Campaigns ({campaigns.length})</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {campaigns.map((campaign) => (
                  <button
                    key={campaign.id}
                    onClick={() => setSelectedCampaign(campaign)}
                    className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                      selectedCampaign?.id === campaign.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="mb-2">
                      <div className="font-medium text-gray-900 mb-1">{campaign.name}</div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">{campaign.sent}</span> sent
                      </div>
                      <div>
                        <span className="font-medium">{campaign.openRate}</span> open
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Templates */}
            <div className="bg-white rounded-lg shadow mt-6">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900">Email Templates</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    + New
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="font-medium text-gray-900 text-sm">Welcome Email</div>
                  <div className="text-xs text-gray-600 mt-1">Used 342 times</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="font-medium text-gray-900 text-sm">Follow-up</div>
                  <div className="text-xs text-gray-600 mt-1">Used 189 times</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="font-medium text-gray-900 text-sm">Product Update</div>
                  <div className="text-xs text-gray-600 mt-1">Used 127 times</div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Details */}
          <div className="lg:col-span-2">
            {selectedCampaign ? (
              <div className="space-y-6">
                {/* Campaign Header */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCampaign.name}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedCampaign.status)}`}>
                        {selectedCampaign.status.charAt(0).toUpperCase() + selectedCampaign.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {selectedCampaign.status === 'active' ? (
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                          <Pause size={18} />
                          <span>Pause</span>
                        </button>
                      ) : (
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          <Play size={18} />
                          <span>Resume</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{selectedCampaign.sent}</div>
                      <div className="text-sm text-gray-600">Sent</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{selectedCampaign.openRate}</div>
                      <div className="text-sm text-gray-600">Open Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{selectedCampaign.clickRate}</div>
                      <div className="text-sm text-gray-600">Click Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">{selectedCampaign.replies}</div>
                      <div className="text-sm text-gray-600">Replies</div>
                    </div>
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="text-gray-400" size={20} />
                    <h3 className="text-lg font-semibold text-gray-900">Performance Over Time</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Opens</span>
                        <span className="font-medium text-gray-900">{selectedCampaign.opens} / {selectedCampaign.sent}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: selectedCampaign.openRate }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Clicks</span>
                        <span className="font-medium text-gray-900">{selectedCampaign.clicks} / {selectedCampaign.sent}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: selectedCampaign.clickRate }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Replies</span>
                        <span className="font-medium text-gray-900">{selectedCampaign.replies} / {selectedCampaign.sent}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-600 h-2 rounded-full"
                          style={{ width: `${Math.round((selectedCampaign.replies / selectedCampaign.sent) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recipient List */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recipients</h3>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          S
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Sarah Johnson</div>
                          <div className="text-sm text-gray-600">sarah@acmecorp.com</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        Opened
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          M
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Mike Chen</div>
                          <div className="text-sm text-gray-600">mike@techstart.io</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                        Clicked
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          E
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Emma Davis</div>
                          <div className="text-sm text-gray-600">emma@innovate.com</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">
                        Sent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-500">Select a campaign to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
