import { CharacterApiResponse, Endpoints } from '../../infrastructure/rest/rest.api';
import { restClient } from '../../infrastructure/rest/rest.client';
import { CharacterDTO, DetailedCharacterDTO } from './character.model';

export const findAllCharacters: () => Promise<CharacterDTO[]> = async () => {
  let charactesList: CharacterDTO[] = [];
  try {
    const url = Endpoints.character.getAll;

    const apiResponse = await restClient.get<CharacterApiResponse<CharacterDTO[]>>(url);
    if (apiResponse.data && apiResponse.data.items) {
      charactesList = apiResponse.data.items;
    }
  } catch (error) {
    console.log('An error ocurred when fetching characters', { error });
  }
  return charactesList;
};

export const findCharactersByIds: (
  characterIds: number[]
) => Promise<DetailedCharacterDTO[]> = async (characterIds) => {
  let characters: DetailedCharacterDTO[] = [];
  const requests = characterIds.map((id) => findOneCharacter(id));
  try {
    const response = await Promise.all(requests);
    if (response != null) {
      characters = response as DetailedCharacterDTO[];
    }
  } catch (error) {
    console.error('Error fetching character list by ID', { error });
  }
  return characters;
};

export const findOneCharacter: (
  characterId: number
) => Promise<DetailedCharacterDTO | null> = async (characterId) => {
  let character: DetailedCharacterDTO | null = null;
  try {
    const tmpUrl = Endpoints.character.getOne.replace('{characterId}', characterId.toString(10));

    const apiResponse = await restClient.get<DetailedCharacterDTO>(tmpUrl);
    if (apiResponse.data && apiResponse.data) {
      character = apiResponse.data;
    }
  } catch (error) {
    console.log('An error ocurred when fetching characters', { error });
  }
  return character;
};
