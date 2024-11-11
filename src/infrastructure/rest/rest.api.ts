const baseUrl = 'https://dragonball-api.com';

export const Endpoints = {
  character: {
    getAll: `${baseUrl}/api/characters?limit=4`,
    getOne: `${baseUrl}/api/characters/{characterId}`,
  },
};

export interface CharacterApiResponse<T> {
  items: T;
}
