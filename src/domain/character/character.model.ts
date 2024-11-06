interface CommonFields {
  id: number;
  image: string;
  name: string;
  ki: string;
}

export interface CharacterDTO extends CommonFields {
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  affiliation: string;
}

interface Planet extends Omit<CommonFields, 'ki'> {
  name: string;
  image: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Transformation extends CommonFields {}

export interface DetailedCharacterDTO extends CharacterDTO {
  originPlanet: Planet;
  transformations: Transformation[];
}
