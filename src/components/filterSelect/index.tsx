import { PLATFORMS, GENRES_ARR, TAGS, SORT_BY } from 'constants/games';
import React from 'react';
import { Form, Label, Select, Option, IconCheckSquare } from './style';
interface Props {
  onChange: (e: any) => void;
}

const FilterSelect = ({ onChange }: Props) => {
  return (
    <Form onChange={onChange}>
      <Label htmlFor="platform-select">
        Platform:
        <IconCheckSquare />
        <Select name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <Option key={platform.value} value={platform.value}>
              {platform.display}
            </Option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="genre-select">
        Genre:
        <IconCheckSquare />
        <Select name="genre" id="genre-select">
          <Option value="">All Genres</Option>
          {GENRES_ARR.map((genre) => (
            <Option key={genre.value} value={genre.value}>
              {genre.display}
            </Option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="tag-select">
        Tag:
        <IconCheckSquare />
        <Select name="tag" id="tag-select">
          <Option value="">All Tags</Option>
          {TAGS.map((tag) => (
            <Option key={tag.value} value={tag.value}>
              {tag.display}
            </Option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="sortBy-select">
        Sort By:
        <IconCheckSquare />
        <Select name="sortBy" id="sortBy-select">
          {SORT_BY.map((sortBy) => (
            <Option key={sortBy.value} value={sortBy.value}>
              {sortBy.display}
            </Option>
          ))}
        </Select>
      </Label>
    </Form>
  );
};

export default React.memo(FilterSelect);
