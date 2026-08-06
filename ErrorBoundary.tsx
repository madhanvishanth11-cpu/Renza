import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './Button';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Renza Frontend ErrorBoundary caught an error:', error, errorInfo);
  }

  public handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-white dark:bg-zinc-950 text-center">
          <div className="max-w-md space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto border border-rose-500/20">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">Something went wrong</h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                An unforeseen error occurred in the application rendering boundary.
              </p>
            </div>
            <Button variant="primary" size="md" onClick={this.handleReload} leftIcon={<RefreshCw className="w-4 h-4" />}>
              Reload Application
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
