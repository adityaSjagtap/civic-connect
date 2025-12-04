import { useState, useMemo } from 'react';
import { useIssues } from '@/contexts/IssueContext';
import { IssueStatus, IssueCategory } from '@/types/issue';
import Header from '@/components/Header';
import IssueCard from '@/components/IssueCard';
import FilterBar from '@/components/FilterBar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Issues = () => {
  const { issues } = useIssues();
  const [selectedStatus, setSelectedStatus] = useState<IssueStatus | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<IssueCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIssues = useMemo(() => {
    return issues.filter((issue) => {
      const statusMatch = selectedStatus === 'all' || issue.status === selectedStatus;
      const categoryMatch = selectedCategory === 'all' || issue.category === selectedCategory;
      const searchMatch =
        searchQuery === '' ||
        issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        issue.location.address?.toLowerCase().includes(searchQuery.toLowerCase());
      return statusMatch && categoryMatch && searchMatch;
    });
  }, [issues, selectedStatus, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      <main className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">All Issues</h1>
          <p className="text-muted-foreground">
            Browse and upvote community issues to help prioritize what matters most.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 mb-8"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search issues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <FilterBar
            selectedStatus={selectedStatus}
            selectedCategory={selectedCategory}
            onStatusChange={setSelectedStatus}
            onCategoryChange={setSelectedCategory}
          />
        </motion.div>

        {/* Issues Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredIssues.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIssues.map((issue, index) => (
                <motion.div
                  key={issue.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <IssueCard issue={issue} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No issues found matching your criteria.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Try adjusting your filters or search query.
              </p>
            </div>
          )}
        </motion.div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Showing {filteredIssues.length} of {issues.length} issues
        </div>
      </main>
    </div>
  );
};

export default Issues;
