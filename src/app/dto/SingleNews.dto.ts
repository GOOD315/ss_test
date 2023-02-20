export interface SingleNewsDto {
    id: number,
    created_at: Date,
    author: string,
    title: string,
    url: string,
    text: string,
    points: number,
    parent_id: number,
    children: Comment[]
}

export interface Comment {
    id: number,
    created_at: Date,
    author: string,
    text: string,
    points: number,
    parent_id: number,
    children: Comment[],

    isExpanded: boolean
}