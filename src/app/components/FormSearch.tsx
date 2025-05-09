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

const FormSearch = ({ 
  initialUsername, 
  error 
}: FormSearchProps) => {

const [username, setUsername] = useState(initialUsername)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/?username=${encodeURIComponent(username)}`)
  }

    return (
        <form 
        onSubmit={handleSubmit}
        className="mb-6 flex flex-wrap items-center gap-2 bg-blue-200 dark:bg-blue-900 p-4 rounded-xl">
            <span className="min-w-[20px]">
                <SearchIcon className="fill-sky-500 dark:fill-sky-400" />
            </span>
            <input
                className="flex-1 h-14 p-2 rounded-lg bg-transparent text-slate-900 dark:text-white placeholder:text-slate-600 dark:placeholder:text-white focus:ring-2 focus:ring-sky-500"
                type="text"
                placeholder="Search github username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button className="bg-sky-500 dark:bg-sky-600 rounded-lg py-4 px-4 text-white font-bold">
                Search
            </button>
        </form>
    );
};
export default FormSearch;
