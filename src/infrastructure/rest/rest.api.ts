export const Endpoints = {
  character: {
    getAll: 'https://dragonball-api.com/api/characters?limit=4',
    getOne: 'https://dragonball-api.com/api/characters/{characterId}',
  },
};

export interface CharacterApiResponse<T> {
  items: T;
}
