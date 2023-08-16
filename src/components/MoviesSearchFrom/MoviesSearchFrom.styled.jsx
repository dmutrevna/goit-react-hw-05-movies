import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  width: 400px;
  margin: 0 auto;
  padding-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex-grow: 1;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(225 217 217);
    color: black;
  }
`;
