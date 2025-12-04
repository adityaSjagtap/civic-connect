import { useIssues } from '@/contexts/IssueContext';
import { AlertCircle, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const StatsBar = () => {
  const { issues } = useIssues();

  const stats = [
    {
      label: 'Reported',
      value: issues.filter((i) => i.status === 'reported').length,
      icon: AlertCircle,
      color: 'text-status-reported',
      bgColor: 'bg-status-reported/10',
    },
    {
      label: 'In Progress',
      value: issues.filter((i) => i.status === 'in-progress').length,
      icon: Clock,
      color: 'text-status-in-progress',
      bgColor: 'bg-status-in-progress/10',
    },
    {
      label: 'Resolved',
      value: issues.filter((i) => i.status === 'resolved').length,
      icon: CheckCircle,
      color: 'text-status-resolved',
      bgColor: 'bg-status-resolved/10',
    },
    {
      label: 'Total Upvotes',
      value: issues.reduce((sum, i) => sum + i.upvotes, 0),
      icon: TrendingUp,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.bgColor} rounded-xl p-4 border border-border/50`}
        >
          <div className="flex items-center gap-3">
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
            <div>
              <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
