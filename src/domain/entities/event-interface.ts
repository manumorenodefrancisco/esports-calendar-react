export type Evento = {
    external_id: number;
    scheduled_at: string;
    match_name: string;

    league_name: string;
    tournament_name: string;
    serie_full_name?: string | null;

    videogame_name: string;
    opponents: Opponent[];
    match_type?: string | null;
    number_of_games?: number | null;
    status: string;

    results: Result[];
    winner_id?: number | null;

    streams: Stream[];

    end_at?: string | null;
    created_at?: string;
    updated_at?: string;
}

export type Opponent = {
    id: number;
    name: string;
    image_url?: string | null;
}

export type Result = {
    score: number;
    team_id: number;
}

export type Stream = {
    official?: boolean;
    raw_url?: string;
}