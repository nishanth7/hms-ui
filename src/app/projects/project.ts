export interface Project {
  _id?: number | string | null;
  name?: string;
  admin_user_id?: string;
  shared_user_ids?: string;
  status?: any[];
}
