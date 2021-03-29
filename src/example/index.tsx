import React, { useState, useEffect } from 'react';
import ImageMapper from '../ImageMapper';

const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';

const JSON =
  'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json';

const Example: React.FC = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    (async () => {
      const area = await (await fetch(JSON)).json();
      setAreas(area);
      console.log(area);
    })();
  }, []);

  const handleClick = () => {
    const area = areas.map((cur: Record<string, unknown>, i: number) => {
      if (i % 4 === 0) {
        const temp = { ...cur };
        // temp.active = false;
        temp.preFillColor = 'rgba(255,255,255,.25)';
        return temp;
      }
      return cur;
    });
    setAreas(area);
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
        onClick={(area, index, e) => console.log(area, index, e)}
      />
      <button type="button" onClick={handleClick}>
        Hello
      </button>
    </React.Fragment>
  );
};

export default Example;
