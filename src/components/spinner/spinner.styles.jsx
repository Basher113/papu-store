import styled from "styled-components";

export const Wrapper = styled.div`
  
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spin {
    to {
        -webkit-transform: rotate(360deg);
    }

  @-webkit-keyframes spin {
  to {
      -webkit-transform: rotate(360deg);
  }
}
}

`

export const Container = styled.div`
   display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #DB4444;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

`