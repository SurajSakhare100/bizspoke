'use client'

import React from 'react'

interface ErrorFallbackProps {
  message?: string
  children?: React.ReactNode
  className?: string
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  message = "Content unavailable", 
  children,
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center p-8 bg-gray-50 rounded-lg ${className}`}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {message}
        </h3>
        <p className="text-gray-600 mb-4">
          We're having trouble loading this content right now.
        </p>
        {children}
      </div>
    </div>
  )
}

interface LoadingFallbackProps {
  message?: string
  className?: string
}

export const LoadingFallback: React.FC<LoadingFallbackProps> = ({ 
  message = "Loading...",
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  )
}

interface EmptyStateFallbackProps {
  title?: string
  message?: string
  actionText?: string
  onAction?: () => void
  className?: string
}

export const EmptyStateFallback: React.FC<EmptyStateFallbackProps> = ({
  title = "No content available",
  message = "There's no content to display at the moment.",
  actionText,
  onAction,
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center p-12 ${className}`}>
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        {actionText && onAction && (
          <button
            onClick={onAction}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  )
}
