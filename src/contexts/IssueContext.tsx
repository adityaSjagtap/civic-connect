import React, { createContext, useContext, useState, useCallback } from 'react';
import { Issue, IssueStatus, IssueCategory } from '@/types/issue';
import { mockIssues } from '@/data/mockIssues';

interface IssueContextType {
  issues: Issue[];
  addIssue: (issue: Omit<Issue, 'id' | 'upvotes' | 'reportedAt' | 'updatedAt'>) => void;
  updateIssueStatus: (id: string, status: IssueStatus, notes?: string) => void;
  upvoteIssue: (id: string) => void;
  getIssueById: (id: string) => Issue | undefined;
  filterByStatus: (status: IssueStatus | 'all') => Issue[];
  filterByCategory: (category: IssueCategory | 'all') => Issue[];
}

const IssueContext = createContext<IssueContextType | undefined>(undefined);

export const IssueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [issues, setIssues] = useState<Issue[]>(mockIssues);

  const addIssue = useCallback((issueData: Omit<Issue, 'id' | 'upvotes' | 'reportedAt' | 'updatedAt'>) => {
    const newIssue: Issue = {
      ...issueData,
      id: Date.now().toString(),
      upvotes: 0,
      reportedAt: new Date(),
      updatedAt: new Date(),
    };
    setIssues(prev => [newIssue, ...prev]);
  }, []);

  const updateIssueStatus = useCallback((id: string, status: IssueStatus, notes?: string) => {
    setIssues(prev =>
      prev.map(issue =>
        issue.id === id
          ? { ...issue, status, updatedAt: new Date(), resolutionNotes: notes || issue.resolutionNotes }
          : issue
      )
    );
  }, []);

  const upvoteIssue = useCallback((id: string) => {
    setIssues(prev =>
      prev.map(issue =>
        issue.id === id ? { ...issue, upvotes: issue.upvotes + 1 } : issue
      )
    );
  }, []);

  const getIssueById = useCallback((id: string) => {
    return issues.find(issue => issue.id === id);
  }, [issues]);

  const filterByStatus = useCallback((status: IssueStatus | 'all') => {
    if (status === 'all') return issues;
    return issues.filter(issue => issue.status === status);
  }, [issues]);

  const filterByCategory = useCallback((category: IssueCategory | 'all') => {
    if (category === 'all') return issues;
    return issues.filter(issue => issue.category === category);
  }, [issues]);

  return (
    <IssueContext.Provider
      value={{
        issues,
        addIssue,
        updateIssueStatus,
        upvoteIssue,
        getIssueById,
        filterByStatus,
        filterByCategory,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

export const useIssues = () => {
  const context = useContext(IssueContext);
  if (!context) {
    throw new Error('useIssues must be used within an IssueProvider');
  }
  return context;
};
