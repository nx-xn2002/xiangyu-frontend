/**
 * 用户类型
 */
export type UserType = {
    id: number;
    username?: string;
    userAccount: string;
    profile: string;
    avatarUrl?: string;
    gender?: number;
    phone?: string;
    email?: string;
    userStatus: number;
    userRole: number;
    tags: string[];
    createTime: Date;
};