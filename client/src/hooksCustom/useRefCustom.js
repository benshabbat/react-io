import { useState } from 'react';

export function useRefCustom(initialValue) {
  const [ref] = useState({ current: initialValue });
  
  return ref;
}