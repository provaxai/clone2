import { useState, useEffect } from 'react';

/**
 * Hook que sincroniza estado React com localStorage automaticamente.
 * Funciona como useState mas persiste os dados entre recarregamentos.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      setStoredValue(prev => {
        const next = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    } catch (e) {
      console.warn(`[useLocalStorage] Erro ao salvar "${key}":`, e);
    }
  };

  return [storedValue, setValue] as const;
}
