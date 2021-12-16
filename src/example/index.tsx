/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import ImageMapper from '../ImageMapper';
import areass from './area.json';

const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';

const JSON =
  'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json';

const Example: React.FC = () => {
  // const [areas, setAreas] = useState([]);
  const [areas, setAreas] = useState(areass);
  const ref = useRef(null);

  // useEffect(() => {
  //   (async () => {
  //     const area = await (await fetch(JSON)).json();
  //     const areaas = area.map((cur: Record<string, unknown>, i: number) => {
  //       if (i % 4 === 0) {
  //         const temp = { ...cur };
  //         // temp.active = false;
  //         // temp.preFillColor = 'red';
  //         return temp;
  //       }
  //       return cur;
  //     });
  //     areaas[0].prefillColor = 'red';
  //     setAreas(areaas);
  //     console.log(areaas);
  //   })();
  // }, []);

  const handleClick = () => {
    // const area = areas.map((cur: Record<string, unknown>, i: number) => {
    //   if (i % 4 === 0) {
    //     const temp = { ...cur };
    //     // temp.active = false;
    //     // temp.preFillColor = 'red';
    //     return temp;
    //   }
    //   return cur;
    // });
    // area[0].prefillColor = 'red';
    // setAreas(area);
  };

  if (!areas.length) return null;

  return (
    <React.Fragment>
      <ImageMapper
        src={URL}
        map={{
          name: 'my-map',
          areas,
        }}
        responsive
        parentWidth={500}
      />
      <button type="button" onClick={handleClick}>
        Hello
      </button>
      <button type="button" onClick={() => ref.current.clearHighlightedArea()}>
        Clear
      </button>
    </React.Fragment>
  );
};

export default Example;
