import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Ammount = styled.div`
  color: #ffc700;
  font-weight: bold;
  font-size: 6rem;
`;

const Button = styled.button`
  font-family: 'Source Sans Pro', sans-serif;
  border: none;
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 20px 40px;
  background: #333139;
  border-radius: 100px;
  letter-spacing: 1px;
  cursor: pointer;
  :hover {
    background: white;
    color: black;
  }
`;

const Dollars = styled.span``;

const MainContainer = styled.div`
  background: #262529;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 10px;
  width: 700px;
  height: 14px;
  background: #4d4c53;
  outline: none;
  margin: 70px 0;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 50px;
    height: 50px;
    background: #ea346f;
    cursor: pointer;
    border-radius: 50%;
    outline: 15px solid rgba(234, 52, 111, 0.2);
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none; /* firefox needs this */
    width: 50px;
    height: 50px;
    background: #ea346f;
    cursor: pointer;
    border-radius: 50%;
    outline: 15px solid rgba(234, 52, 111, 0.2);
  }
  ::-moz-range-progress {
    background: #ea346f;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 14px;
  }
`;

const Sup = styled.sup`
  font-size: 5.5rem;
`;

const Wrapper = styled.div`
  background: #262529;
  box-shadow: 0px 0px 250px #000000;
  border-radius: 20px;
  padding: 60px 80px;
  text-align: center;
`;

function RangeSlider() {
  const [ammount, setAmmount] = useState(10);
  const [control, setControl] = useState(10);

  useEffect(() => {
    setControl(ammount);
  }, [ammount]);

  const onChange = (e) => {
    setAmmount(e.target.value);
  };

  const pressButton = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    confirm(`Do you want to buy it by $ ${ammount} ?`) ? alert(`Congratulations you bought it by $ ${ammount} !`) : alert('Go back and buy soon!');
  };

  return (
    <MainContainer>
      <Wrapper>
        <Ammount>
          <Sup>$</Sup>
          <Dollars>{control}</Dollars>
        </Ammount>
        <Slider
          type="range"
          min={0}
          max={100}
          step={1}
          label={ammount}
          value={control}
          onChange={onChange}
        />
        <br />
        <Button onClick={pressButton}>Buy Now</Button>
      </Wrapper>
    </MainContainer>
  );
}

export default RangeSlider;
