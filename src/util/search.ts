import { Game } from 'types';

// search return list arr searchInput
const searchInput = (arr: Game[], searchText: string): Game[] => {
  let dataRender: Game[] = [];
  arr.filter((item: Game) => {
    if (item?.title?.toLowerCase()?.includes(searchText.toLowerCase())) {
      dataRender.push(item);
    }
    return true;
  });
  return dataRender;
};

export default searchInput;
