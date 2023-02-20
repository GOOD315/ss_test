import { Comment } from "../dto/SingleNews.dto";

export interface SingleNews {
    id: number,
    createdAt: Date,
    author: string,
    title: string,
    url: string,
    text: string,
    points: number,
    children: Comment[]
}