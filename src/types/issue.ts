export type IssueStatus = 'reported' | 'in-progress' | 'resolved';

export type IssueCategory = 'pothole' | 'garbage' | 'streetlight' | 'water' | 'other';

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: IssueCategory;
  status: IssueStatus;
  location: {
    lat: number;
    lng: number;
    address?: string;
  };
  imageUrl?: string;
  upvotes: number;
  reportedBy: string;
  reportedAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  resolutionNotes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'admin';
  avatarUrl?: string;
}

export const CATEGORY_CONFIG: Record<IssueCategory, { label: string; icon: string; color: string }> = {
  pothole: { label: 'Pothole', icon: '🕳️', color: 'category-pothole' },
  garbage: { label: 'Garbage', icon: '🗑️', color: 'category-garbage' },
  streetlight: { label: 'Streetlight', icon: '💡', color: 'category-streetlight' },
  water: { label: 'Water Logging', icon: '💧', color: 'category-water' },
  other: { label: 'Other', icon: '📋', color: 'category-other' },
};

export const STATUS_CONFIG: Record<IssueStatus, { label: string; color: string }> = {
  reported: { label: 'Reported', color: 'status-reported' },
  'in-progress': { label: 'In Progress', color: 'status-in-progress' },
  resolved: { label: 'Resolved', color: 'status-resolved' },
};
