'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'var(--toast-background, #333)',
          color: 'var(--toast-foreground, #fff)',
        },
        // Accessibility settings for screen readers
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
        success: {
          style: {
            background: '#10b981',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#10b981',
          },
        },
        error: {
          style: {
            background: '#ef4444',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#ef4444',
          },
          // Error messages should interrupt immediately
          ariaProps: {
            role: 'alert',
            'aria-live': 'assertive',
          },
        },
      }}
    />
  );
}
