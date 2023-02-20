import { AllNews } from "../interfaces/AllNews";
import { SingleNews } from "../interfaces/SingleNews";
import { AllNewsDto } from "./AllNews.dto";
import { SingleNewsDto } from "./SingleNews.dto";

export class DtoConverter {
    public static AllNewsFromDto(dto: AllNewsDto): AllNews[] {
        const arr: AllNews[] = [];
        dto.hits.forEach(hit => {
            const allNews: AllNews = {
                id: Number(hit.objectID),
                title: hit.title,
                url: hit.url,
                author: hit.author,
                points: hit.points,
                comments: hit.num_comments
            }
            arr.push(allNews);
        });

        return arr;
    }

    public static SingleNewsFromDto(dto: SingleNewsDto): SingleNews {
        const singleNews: SingleNews = {
            id: dto.id,
            createdAt: dto.created_at,
            author: dto.author,
            title: dto.title,
            url: dto.url,
            text: dto.text,
            points: dto.points,
            children: dto.children
        };
        // ...
        return singleNews;
    }
}