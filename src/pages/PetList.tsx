import React, { useState } from 'react';
import Table from '../components/Table';
import Button from '../components/Button';
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react';

const PetList: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const pets = [
    { id: '1', name: 'Max', breed: 'Golden Retriever', owner: 'Alice Smith', lastVisit: '2024-03-15', status: 'Healthy' },
    { id: '2', name: 'Bella', breed: 'Persian Cat', owner: 'Bob Johnson', lastVisit: '2024-03-18', status: 'In Treatment' },
    { id: '3', name: 'Charlie', breed: 'Beagle', owner: 'Charlie Brown', lastVisit: '2024-03-20', status: 'Observing' },
    { id: '4', name: 'Lucy', breed: 'Poodle', owner: 'Diana Ross', lastVisit: '2024-03-22', status: 'Healthy' },
    { id: '5', name: 'Oliver', breed: 'Maine Coon', owner: 'Edward Norton', lastVisit: '2024-03-22', status: 'Healthy' },
  ];

  const columns = [
    { header: 'ID', accessor: 'id', className: 'text-caption text-neutral-400' },
    { 
      header: 'Name', 
      accessor: (pet: any) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-caption">
            {pet.name[0]}
          </div>
          <span className="font-bold text-neutral-900">{pet.name}</span>
        </div>
      )
    },
    { header: 'Breed', accessor: 'breed' },
    { header: 'Owner', accessor: 'owner' },
    { header: 'Last Visit', accessor: 'lastVisit' },
    { 
      header: 'Status', 
      accessor: (pet: any) => (
        <span className={`px-2 py-1 rounded-full text-caption font-bold ${
          pet.status === 'Healthy' 
            ? 'bg-success-500/10 text-success-500' 
            : pet.status === 'In Treatment'
              ? 'bg-error-500/10 text-error-500'
              : 'bg-warning-500/10 text-warning-500'
        }`}>
          {pet.status}
        </span>
      )
    },
    { 
      header: '', 
      accessor: (pet: any) => (
        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal size={16} />
        </Button>
      ),
      className: 'w-[40px]'
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-slow">
      <div className="flex flex-col gap-2">
        <h1 className="text-h1 text-neutral-900">Pet Directory</h1>
        <p className="text-body-md text-neutral-500">Manage and view all pets in your care.</p>
      </div>

      <div className="flex gap-4 items-center bg-surface-base border border-neutral-200 dark:border-neutral-700 p-4 rounded-md">
        <div className="flex-grow flex items-center gap-2 px-3 py-2 bg-neutral-50 dark:bg-neutral-800 rounded-sm border border-neutral-200 dark:border-neutral-700 focus-within:ring-2 focus-within:ring-primary-500 transition-all">
          <Search size={18} className="text-neutral-400" />
          <input 
            type="text" 
            placeholder="Search by name, breed, or owner..." 
            className="bg-transparent border-none focus:outline-none w-full text-body-md text-neutral-900"
          />
        </div>
        <Button variant="secondary" leftIcon={<Filter size={18} />}>Filters</Button>
        <Button leftIcon={<Plus size={18} />}>Register Pet</Button>
      </div>

      <Table columns={columns as any} data={pets} loading={loading} />
    </div>
  );
};

export default PetList;
