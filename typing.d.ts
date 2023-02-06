export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Advice {
  slip: { id: number; advice: string };
}
