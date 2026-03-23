import React from 'react';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
  type?: 'text' | 'badge' | 'avatar' | 'action';
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
  selectedIds?: Set<string | number>;
  idKey?: keyof T;
}

const Table = <T extends { [key: string]: any }>({
  columns,
  data,
  loading,
  emptyMessage = 'No data available',
  onRowClick,
  selectedIds,
  idKey = 'id',
}: TableProps<T>) => {
  return (
    <div className="w-full bg-surface-base border border-neutral-200 dark:border-neutral-700 rounded-md overflow-hidden relative transition-all duration-base">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              {columns.map((column, idx) => (
                <th
                  key={idx}
                  className={cn(
                    'px-4 py-3 text-caption font-semibold text-neutral-500 uppercase tracking-wider',
                    column.className
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="animate-pulse bg-surface-base">
                  {columns.map((_, j) => (
                    <td key={j} className="px-4 py-4 truncate">
                      <div className="h-4 bg-neutral-100 dark:bg-neutral-800 rounded-sm w-full" />
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-neutral-500 text-body-md">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item, idx) => {
                const isSelected = selectedIds?.has(item[idKey as string]);
                return (
                  <tr
                    key={idx}
                    onClick={() => onRowClick?.(item)}
                    className={cn(
                      'transition-colors duration-fast group cursor-pointer h-[52px]',
                      isSelected ? 'bg-primary-100 dark:bg-primary-900/40' : 'bg-surface-base dark:bg-surface-base hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                    )}
                  >
                    {columns.map((column, jdx) => (
                      <td
                        key={jdx}
                        className={cn('px-4 py-3 text-body-md text-neutral-700 dark:text-neutral-300', column.className)}
                      >
                        {typeof column.accessor === 'function'
                          ? column.accessor(item)
                          : item[column.accessor as string]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {loading && (
        <div className="absolute inset-0 bg-surface-base/10 backdrop-blur-[1px] flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default Table;
