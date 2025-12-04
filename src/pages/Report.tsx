import Header from '@/components/Header';
import ReportForm from '@/components/ReportForm';
import { motion } from 'framer-motion';

const Report = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      <main className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Report a Civic Issue
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Help make your community better by reporting issues that need attention. Your reports are reviewed by municipal authorities.
          </p>
        </motion.div>

        <ReportForm />
      </main>
    </div>
  );
};

export default Report;
