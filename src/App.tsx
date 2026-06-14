import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import CRM from './pages/CRM'
import Outreach from './pages/Outreach'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isLanding = location.pathname === '/'

  if (isLanding) return null

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">FlowHub</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/dashboard"
              className={`${location.pathname === '/dashboard' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Dashboard
            </Link>
            <Link
              to="/crm"
              className={`${location.pathname === '/crm' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              CRM
            </Link>
            <Link
              to="/outreach"
              className={`${location.pathname === '/outreach' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Outreach
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/dashboard"
              className={`block ${location.pathname === '/dashboard' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/crm"
              className={`block ${location.pathname === '/crm' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              onClick={() => setMobileMenuOpen(false)}
            >
              CRM
            </Link>
            <Link
              to="/outreach"
              className={`block ${location.pathname === '/outreach' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Outreach
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function App() {
  return (
    <Router basename="/mobile-workflow-saas-12cd">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/outreach" element={<Outreach />} />
      </Routes>
    </Router>
  )
}

export default App
