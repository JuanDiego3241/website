export interface Post {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: any | null;
  Title: string;
  Image: string;
  Content: string;
}