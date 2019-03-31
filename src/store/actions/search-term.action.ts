export const SEARCH_BY_TERM = 'SEARCH_BY_TERM';

export function searchByTerm(payload: string): { type: string, payload: string } {
    return {
        type: SEARCH_BY_TERM,
        payload
    };
}