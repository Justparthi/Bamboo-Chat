import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function getFromAndTo(page: number, itemPerPage: number) {
	let from = page * itemPerPage;
	const to = from + itemPerPage; // Change 'let' to 'const'
  
	if (page > 0) {
	  from += 1;
	}
  
	return { from, to };
  }
  