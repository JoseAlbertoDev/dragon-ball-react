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

export const findOneCharacters: (characterId: number) => Promise<CharacterDTO | null> = async (
  characterId
) => {
  let charactesList: CharacterDTO | null = null;
  try {
    const tmpUrl = Endpoints.character.getOne.replace('{characterId}', characterId.toString(10));

    const apiResponse = await restClient.get<DetailedCharacterDTO>(tmpUrl);
    if (apiResponse.data && apiResponse.data) {
      charactesList = apiResponse.data;
    }
  } catch (error) {
    console.log('An error ocurred when fetching characters', { error });
  }
  return charactesList;
};
