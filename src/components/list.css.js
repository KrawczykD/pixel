import styled from 'styled-components';

let list = styled.ul`
display:flex;
flex-direction:column;


  & > h1 {
    font-size: 2rem;
    padding:10px;
  }

  & > li {
    padding: 5px;
  }

  & > li:hover {
    cursor:pointer;
    color:white;
    transition:color .3s;
  }
`

export default list;