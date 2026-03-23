import React from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import Button from '../components/Button';
import { Plus, Clock, Activity, Heart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const metrics = [
    { label: 'Total Pets', value: '42', icon: <Heart className="text-error-500" />, trend: '+4 this week' },
    { label: 'Active Appointments', value: '12', icon: <Clock className="text-warning-500" />, trend: 'Next: 2 PM' },
    { label: 'Healthy Pets (AI)', value: '85%', icon: <Activity className="text-success-500" />, trend: '↑ 2% vs last month' },
  ];

  const recentActivities = [
    { id: 1, name: 'Toby', type: 'Dog', status: 'Healthy', time: '2 hours ago' },
    { id: 2, name: 'Luna', type: 'Cat', status: 'Warning', time: '4 hours ago' },
    { id: 3, name: 'Simba', type: 'Golden Retriever', status: 'Healthy', time: '1 day ago' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-slow">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-h1 text-neutral-900">Welcome Back, Jane!</h1>
          <p className="text-body-md text-neutral-500">Here's what's happening in your clinic today.</p>
        </div>
        <Button leftIcon={<Plus size={18} />} size="lg">Add New Pet</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((m) => (
          <Card key={m.label} size="full" className="hover:scale-[1.02] transform transition-transform cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-caption font-bold text-neutral-500 uppercase tracking-widest">{m.label}</span>
                <span className="text-h1 text-neutral-900 leading-tight">{m.value}</span>
                <span className="text-body-sm text-neutral-400">{m.trend}</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-xl shrink-0">
                {m.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-h2 text-neutral-900">Recent AI Checkups</h2>
        <Table 
          columns={[
            { header: 'Pet Name', accessor: 'name', className: 'font-bold' },
            { header: 'Breed', accessor: 'type' },
            { 
              header: 'Status', 
              accessor: (item: any) => (
                <span className={`px-2 py-0.5 rounded-full text-caption font-bold ${
                  item.status === 'Healthy' ? 'bg-success-500/10 text-success-500' : 'bg-warning-500/10 text-warning-500'
                }`}>
                  {item.status}
                </span>
              )
            },
            { header: 'Last Analysis', accessor: 'time', className: 'text-neutral-500' },
          ]}
          data={recentActivities}
        />
      </div>
    </div>
  );
};

export default Dashboard;
