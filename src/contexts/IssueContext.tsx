import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Issue, IssueStatus, IssueCategory } from '@/types/issue';
import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy,
  Timestamp,
  increment
} from 'firebase/firestore';

interface IssueContextType {
  issues: Issue[];
  loading: boolean;
  addIssue: (issue: Omit<Issue, 'id' | 'upvotes' | 'reportedAt' | 'updatedAt'>) => Promise<void>;
  updateIssueStatus: (id: string, status: IssueStatus, notes?: string) => Promise<void>;
  upvoteIssue: (id: string) => Promise<void>;
  getIssueById: (id: string) => Issue | undefined;
  filterByStatus: (status: IssueStatus | 'all') => Issue[];
  filterByCategory: (category: IssueCategory | 'all') => Issue[];
}

const IssueContext = createContext<IssueContextType | undefined>(undefined);

const ISSUES_COLLECTION = 'issues';

export const IssueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  // Subscribe to Firestore issues collection
  useEffect(() => {
    const q = query(collection(db, ISSUES_COLLECTION), orderBy('reportedAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const issuesData: Issue[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          description: data.description,
          category: data.category,
          status: data.status,
          location: data.location,
          imageUrl: data.imageUrl,
          upvotes: data.upvotes || 0,
          reportedBy: data.reportedBy,
          reportedAt: data.reportedAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date(),
          assignedTo: data.assignedTo,
          resolutionNotes: data.resolutionNotes,
        } as Issue;
      });
      setIssues(issuesData);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching issues:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addIssue = useCallback(async (issueData: Omit<Issue, 'id' | 'upvotes' | 'reportedAt' | 'updatedAt'>) => {
    const now = Timestamp.now();
    await addDoc(collection(db, ISSUES_COLLECTION), {
      ...issueData,
      upvotes: 0,
      reportedAt: now,
      updatedAt: now,
    });
  }, []);

  const updateIssueStatus = useCallback(async (id: string, status: IssueStatus, notes?: string) => {
    const issueRef = doc(db, ISSUES_COLLECTION, id);
    const updateData: Record<string, unknown> = {
      status,
      updatedAt: Timestamp.now(),
    };
    if (notes) {
      updateData.resolutionNotes = notes;
    }
    await updateDoc(issueRef, updateData);
  }, []);

  const upvoteIssue = useCallback(async (id: string) => {
    const issueRef = doc(db, ISSUES_COLLECTION, id);
    await updateDoc(issueRef, {
      upvotes: increment(1),
    });
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
        loading,
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
