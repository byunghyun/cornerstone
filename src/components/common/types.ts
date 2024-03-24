import { HTMLAttributes, ReactNode } from 'react';

export interface SugarpoleButtonInterface
  extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
