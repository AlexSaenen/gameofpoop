import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;
  cursor: pointer;

  &:first-child {
    border-top: none;
  }

  &:hover {
    background-color: #f8f8f8;
  }
`;

export default Wrapper;
