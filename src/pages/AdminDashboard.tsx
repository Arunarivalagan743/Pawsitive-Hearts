import React, { useState } from 'react'
import { Users, Heart, Calendar, FileText, Plus, Edit, Trash2, Eye } from 'lucide-react'

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dogs')

  // Mock data - in real app, this would come from Supabase
  const stats = {
    totalDogs: 25,
    availableForAdoption: 18,
    pendingApplications: 12,
    upcomingEvents: 3
  }

  const dogs = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever Mix",
      age: 3,
      status: "available",
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Labrador Mix",
      age: 2,
      status: "pending",
      dateAdded: "2024-01-10"
    }
  ]

  const applications = [
    {
      id: 1,
      dogName: "Buddy",
      applicantName: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 98765 43210",
      status: "pending",
      dateSubmitted: "2024-11-20"
    },
    {
      id: 2,
      dogName: "Luna",
      applicantName: "Rahul Patel",
      email: "rahul@example.com",
      phone: "+91 98765 43211",
      status: "approved",
      dateSubmitted: "2024-11-18"
    }
  ]

  const events = [
    {
      id: 1,
      title: "Dog Adoption Drive",
      date: "2024-12-15",
      location: "Carter Road, Bandra",
      attendees: 25,
      maxAttendees: 50
    },
    {
      id: 2,
      title: "Free Dog Training Workshop",
      date: "2024-12-20",
      location: "Mahim Nature Park",
      attendees: 15,
      maxAttendees: 30
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage dogs, applications, and events</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 rounded-full p-3 mr-4">
                <Heart className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Dogs</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDogs}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <Users className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Available for Adoption</p>
                <p className="text-2xl font-bold text-gray-900">{stats.availableForAdoption}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Applications</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingApplications}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Upcoming Events</p>
                <p className="text-2xl font-bold text-gray-900">{stats.upcomingEvents}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'dogs', label: 'Dogs', icon: Heart },
                { id: 'applications', label: 'Applications', icon: FileText },
                { id: 'events', label: 'Events', icon: Calendar }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Dogs Tab */}
            {activeTab === 'dogs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Manage Dogs</h2>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Dog
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Breed</th>
                        <th className="text-left py-3 px-4">Age</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Date Added</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dogs.map(dog => (
                        <tr key={dog.id} className="border-b">
                          <td className="py-3 px-4 font-medium">{dog.name}</td>
                          <td className="py-3 px-4">{dog.breed}</td>
                          <td className="py-3 px-4">{dog.age} years</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              dog.status === 'available' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {dog.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{new Date(dog.dateAdded).toLocaleDateString()}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-500 hover:text-blue-700">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-orange-500 hover:text-orange-700">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-500 hover:text-red-700">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Adoption Applications</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Dog</th>
                        <th className="text-left py-3 px-4">Applicant</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Phone</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map(app => (
                        <tr key={app.id} className="border-b">
                          <td className="py-3 px-4 font-medium">{app.dogName}</td>
                          <td className="py-3 px-4">{app.applicantName}</td>
                          <td className="py-3 px-4">{app.email}</td>
                          <td className="py-3 px-4">{app.phone}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              app.status === 'approved' 
                                ? 'bg-green-100 text-green-800' 
                                : app.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{new Date(app.dateSubmitted).toLocaleDateString()}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-500 hover:text-blue-700">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-green-500 hover:text-green-700">
                                Approve
                              </button>
                              <button className="text-red-500 hover:text-red-700">
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Manage Events</h2>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Event
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Title</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Location</th>
                        <th className="text-left py-3 px-4">Attendees</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map(event => (
                        <tr key={event.id} className="border-b">
                          <td className="py-3 px-4 font-medium">{event.title}</td>
                          <td className="py-3 px-4">{new Date(event.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">{event.location}</td>
                          <td className="py-3 px-4">{event.attendees}/{event.maxAttendees}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-500 hover:text-blue-700">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-orange-500 hover:text-orange-700">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-500 hover:text-red-700">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}