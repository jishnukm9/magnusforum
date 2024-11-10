



import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import React from 'react';
import { Home, Users, Tags, Briefcase, MessageSquare, Search, Menu, Bell } from 'lucide-react';
import ChatComponent from '@/components/ChatComponent';
import PageLoader from '@/components/PageLoader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MagnusForum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="h-screen flex flex-col bg-gray-50">
      <PageLoader />
        {/* Modern Header */}
        <header className="fixed top-0 left-0 right-0 bg-white border-b z-50 backdrop-blur-sm bg-white/80">
          <div className="flex items-center justify-between px-6 h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-gray-900 font-semibold text-lg">MagnusForum</span>
              </a>
              <div className="hidden lg:flex items-center relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  className="w-[500px] h-10 bg-gray-50 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-200"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full lg:hidden">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </button>
              <button className="px-4 py-2 text-gray-700 rounded-full border border-gray-200 hover:bg-gray-50 text-sm font-medium">
                Log in
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:from-orange-600 hover:to-pink-600 text-sm font-medium">
                Sign up
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full lg:hidden">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <div className="flex pt-16 h-[calc(100vh-4rem)]">
          {/* Modern Sidebar */}
          <aside className="fixed top-16 left-0 w-[240px] h-[calc(100vh-4rem)] border-r bg-white hidden lg:block">
            <nav className="space-y-1 p-4">
              <a href="/" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg group transition-colors">
                <Home className="w-5 h-5 mr-3 group-hover:text-orange-500" />
                <span className="font-medium">Home</span>
              </a>
              <a href="/questions" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg group transition-colors">
                <MessageSquare className="w-5 h-5 mr-3 group-hover:text-orange-500" />
                <span className="font-medium">Questions</span>
              </a>
              <a href="/tags" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg group transition-colors">
                <Tags className="w-5 h-5 mr-3 group-hover:text-orange-500" />
                <span className="font-medium">Tags</span>
              </a>
              <a href="/users" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg group transition-colors">
                <Users className="w-5 h-5 mr-3 group-hover:text-orange-500" />
                <span className="font-medium">Users</span>
              </a>
              <a href="/companies" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg group transition-colors">
                <Briefcase className="w-5 h-5 mr-3 group-hover:text-orange-500" />
                <span className="font-medium">Companies</span>
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:ml-[240px] flex-1 p-6">
            {children}
          </main>

          <ChatComponent />
        </div>
      </body>
    </html>
  );
}