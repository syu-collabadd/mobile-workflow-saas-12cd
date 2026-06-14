import { Link } from 'react-router-dom'
import { Zap, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">FlowHub</div>
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard"
                className="hidden sm:inline-block text-gray-700 hover:text-blue-600"
              >
                Sign In
              </Link>
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Automate workflows on mobile
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Manage your team, automate outreach, and close deals faster with our mobile-first workflow platform. Built for modern teams who work on the go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Get Started
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium text-lg">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Workflow Dashboard</div>
                  <div className="text-sm text-gray-500">3 active automations</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Lead Follow-up</span>
                  <span className="text-green-600 text-sm font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Email Campaign</span>
                  <span className="text-green-600 text-sm font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Task Assignment</span>
                  <span className="text-green-600 text-sm font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8 text-sm font-medium uppercase tracking-wide">
            Trusted by growing teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <div className="text-2xl font-bold text-gray-400">Company A</div>
            <div className="text-2xl font-bold text-gray-400">Company B</div>
            <div className="text-2xl font-bold text-gray-400">Company C</div>
            <div className="text-2xl font-bold text-gray-400">Company D</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to scale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed for mobile-first teams who need to move fast
          </p>
        </div>

        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Workflow Automation
              </h3>
              <p className="text-gray-600 mb-6">
                Automate repetitive tasks and focus on what matters. Set up custom workflows that trigger based on customer actions, time, or team activity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Custom trigger conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Multi-step automation flows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Real-time monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-sm font-medium text-gray-500 mb-4">WORKFLOW BUILDER</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-gray-900">New lead captured</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <span className="text-gray-900">Send welcome email</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <span className="text-gray-900">Assign to sales rep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Unified CRM
              </h3>
              <p className="text-gray-600 mb-6">
                Manage all your contacts, deals, and conversations in one place. Built for mobile so you can update records and respond to leads from anywhere.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Contact management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Deal pipeline tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Activity history</span>
                </li>
              </ul>
            </div>
            <div className="md:order-1 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-sm font-medium text-gray-500 mb-4">CONTACTS</div>
                <div className="space-y-3">
                  {['Sarah Johnson', 'Mike Chen', 'Emma Davis'].map((name) => (
                    <div key={name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{name}</div>
                        <div className="text-sm text-gray-500">Last contact: 2 days ago</div>
                      </div>
                      <ArrowRight className="text-gray-400" size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Outreach Campaigns
              </h3>
              <p className="text-gray-600 mb-6">
                Launch multi-channel campaigns that reach your audience where they are. Track engagement and optimize your messaging in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Email templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Campaign analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">A/B testing</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-sm font-medium text-gray-500 mb-4">CAMPAIGN STATS</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1,247</div>
                    <div className="text-sm text-gray-600">Sent</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">42%</div>
                    <div className="text-sm text-gray-600">Open Rate</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">18%</div>
                    <div className="text-sm text-gray-600">Click Rate</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">127</div>
                    <div className="text-sm text-gray-600">Replies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-lg font-semibold text-gray-900 mb-2">Free</div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Up to 100 contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">1 workflow automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <Link
                to="/dashboard"
                className="block w-full bg-gray-100 text-gray-900 text-center px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="bg-blue-600 rounded-xl p-8 shadow-xl transform md:scale-105 relative">
              <div className="absolute top-0 right-8 bg-orange-500 text-white px-3 py-1 rounded-b-lg text-sm font-medium">
                Popular
              </div>
              <div className="text-lg font-semibold text-white mb-2">Pro</div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="text-blue-100">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white">Unlimited contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white">Unlimited workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white">Priority support</span>
                </li>
              </ul>
              <Link
                to="/dashboard"
                className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-lg font-semibold text-gray-900 mb-2">Enterprise</div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">SLA guarantees</span>
                </li>
              </ul>
              <button className="block w-full bg-gray-100 text-gray-900 text-center px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 FlowHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
