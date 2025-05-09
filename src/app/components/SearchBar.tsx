'use client'
import { FormSearchProps } from '../types';
import SearchIcon from "./icons/SearchIcon";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = ({ 
  initialUsername, 
  error 
}: FormSearchProps) => {

const [username, setUsername] = useState(initialUsername);
const router = useRouter();
const debouncedUsername = useDebounce(username, 500);

  useEffect(() => {
    if (debouncedUsername) {
      router.push(`/?username=${encodeURIComponent(debouncedUsername)}`);
    }
  }, [debouncedUsername, router]);


    return (
        <div className="mb-6 flex flex-wrap items-center gap-2 bg-blue-200 dark:bg-blue-900 p-4 rounded-xl">
      <span className="min-w-[20px]">
        <SearchIcon className="fill-sky-500 dark:fill-sky-400" />
      </span>
      <input
        className="flex-1 h-14 p-2 rounded-lg bg-transparent text-slate-900 dark:text-white placeholder:text-slate-600 dark:placeholder:text-white focus:ring-2 focus:ring-sky-500"
        type="text"
        placeholder="Search github username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    );
};
export default SearchBar;
