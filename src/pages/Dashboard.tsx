import { TrendingUp, Users, Mail, Play, Pause, Plus, Activity } from 'lucide-react'
import { useState } from 'react'

export default function Dashboard() {
  const [workflows] = useState([
    { id: 1, name: 'Lead Follow-up', status: 'active', runs: 127, success: 98 },
    { id: 2, name: 'Email Campaign', status: 'active', runs: 342, success: 95 },
    { id: 3, name: 'Task Assignment', status: 'paused', runs: 89, success: 100 },
  ])

  const [tasks] = useState([
    { id: 1, title: 'Follow up with Sarah Johnson', priority: 'high', due: 'Today' },
    { id: 2, title: 'Review Q2 campaign results', priority: 'medium', due: 'Tomorrow' },
    { id: 3, title: 'Update CRM contacts', priority: 'low', due: 'This week' },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your workflows.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="text-blue-600" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium">+12%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">558</div>
            <div className="text-gray-600 text-sm">Active Workflows</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium">+8%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">2,847</div>
            <div className="text-gray-600 text-sm">Total Contacts</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Mail className="text-purple-600" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium">+23%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
            <div className="text-gray-600 text-sm">Emails Sent</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium">+5%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">42%</div>
            <div className="text-gray-600 text-sm">Conversion Rate</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Active Workflows */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Active Workflows</h2>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  <Plus size={20} />
                  <span className="hidden sm:inline">New Workflow</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {workflows.map((workflow) => (
                  <div
                    key={workflow.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{workflow.name}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            workflow.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {workflow.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{workflow.runs} runs</span>
                        <span>{workflow.success}% success rate</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      {workflow.status === 'active' ? (
                        <Pause size={20} />
                      ) : (
                        <Play size={20} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h2>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  <Plus size={20} />
                  <span className="hidden sm:inline">Add Task</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <button className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 hover:border-blue-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 mb-1">{task.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-medium ${
                            task.priority === 'high'
                              ? 'bg-red-100 text-red-700'
                              : task.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {task.priority}
                        </span>
                        <span className="text-gray-600">{task.due}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow lg:col-span-2">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Lead Follow-up workflow completed</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Sent follow-up email to 12 new leads
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">New contact added to CRM</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Sarah Johnson from Acme Corp
                    </div>
                    <div className="text-xs text-gray-500 mt-1">15 minutes ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Email campaign launched</div>
                    <div className="text-sm text-gray-600 mt-1">
                      "Q2 Product Update" sent to 342 subscribers
                    </div>
                    <div className="text-xs text-gray-500 mt-1">1 hour ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Workflow automation triggered</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Task Assignment workflow started for 8 new tasks
                    </div>
                    <div className="text-xs text-gray-500 mt-1">3 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
