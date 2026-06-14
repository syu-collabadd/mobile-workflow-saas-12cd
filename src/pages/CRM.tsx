import { Search, Plus, Filter, Mail, Phone, Building, Calendar, DollarSign, MoreVertical } from 'lucide-react'
import { useState } from 'react'

type Contact = {
  id: number
  name: string
  email: string
  company: string
  status: 'lead' | 'prospect' | 'customer'
  value: string
  lastContact: string
  initials: string
}

export default function CRM() {
  const [contacts] = useState<Contact[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@acmecorp.com',
      company: 'Acme Corp',
      status: 'customer',
      value: '$12,500',
      lastContact: '2 days ago',
      initials: 'SJ',
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike@techstart.io',
      company: 'TechStart',
      status: 'prospect',
      value: '$8,000',
      lastContact: '5 days ago',
      initials: 'MC',
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma@innovate.com',
      company: 'Innovate Inc',
      status: 'lead',
      value: '$15,000',
      lastContact: '1 week ago',
      initials: 'ED',
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james@global.co',
      company: 'Global Solutions',
      status: 'customer',
      value: '$22,000',
      lastContact: 'Yesterday',
      initials: 'JW',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      email: 'lisa@datatech.net',
      company: 'DataTech',
      status: 'prospect',
      value: '$10,500',
      lastContact: '3 days ago',
      initials: 'LA',
    },
  ])

  const [selectedContact, setSelectedContact] = useState<Contact | null>(contacts[0])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'customer':
        return 'bg-green-100 text-green-700'
      case 'prospect':
        return 'bg-blue-100 text-blue-700'
      case 'lead':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">CRM</h1>

          {/* Search and Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={20} />
                <span className="hidden sm:inline">Filter</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus size={20} />
                <span className="hidden sm:inline">Add Contact</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-900">Contacts ({contacts.length})</h2>
              </div>
              <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                {contacts.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() => setSelectedContact(contact)}
                    className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                      selectedContact?.id === contact.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {contact.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate">{contact.name}</div>
                        <div className="text-sm text-gray-600 truncate">{contact.company}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                            {contact.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            {selectedContact ? (
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                        {selectedContact.initials}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{selectedContact.name}</h2>
                        <p className="text-gray-600">{selectedContact.company}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedContact.status)}`}>
                      {selectedContact.status.charAt(0).toUpperCase() + selectedContact.status.slice(1)}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                      Last contact: {selectedContact.lastContact}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Contact Info */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Mail className="text-gray-400" size={20} />
                        <span>{selectedContact.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Phone className="text-gray-400" size={20} />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Building className="text-gray-400" size={20} />
                        <span>{selectedContact.company}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <DollarSign className="text-gray-400" size={20} />
                        <span>Deal Value: {selectedContact.value}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 pb-4 border-b border-gray-200">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="text-blue-600" size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Email sent</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Follow-up regarding Q2 proposal
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                            <Calendar size={12} />
                            <span>{selectedContact.lastContact}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 pb-4 border-b border-gray-200">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="text-green-600" size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Phone call</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Discussed implementation timeline
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                            <Calendar size={12} />
                            <span>1 week ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="text-purple-600" size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Meeting scheduled</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Product demo on Friday at 2 PM
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                            <Calendar size={12} />
                            <span>2 weeks ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Mail size={20} />
                      <span>Send Email</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Phone size={20} />
                      <span>Call</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Calendar size={20} />
                      <span>Schedule</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-500">Select a contact to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
