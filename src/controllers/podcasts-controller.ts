import { IncomingMessage, ServerResponse } from "http"
import {serviceListEpisodes} from "../services/list-episodes-services"
import { serviceFilterEpisodes } from "../services/filter-epidodes-service";
import { FilterPodcastModel } from "../models/filter-podcast-model";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: FilterPodcastModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, { "content-type": "application/json" });
    res.end(JSON.stringify(content.body));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, { "content-type": "application/json" });
    res.end(JSON.stringify(content.body));
};