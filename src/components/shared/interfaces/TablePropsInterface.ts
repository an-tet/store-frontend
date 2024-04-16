type SearchItemType = {
  key: string;
  placeholder: string;
};

type ActionsType = {
  type: string;
  redirectTo: string;
};

type HeadersType = {
  key: string;
  text: string;
};

export interface TablePropsInterface {
  headers: HeadersType[];
  searchItem: SearchItemType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[];
  actions: ActionsType[];
}
