import React, { useState, useEffect } from 'react';
import ImageMapper from '../ImageMapper';

const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';

const JSON =
  'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json';

const Example: React.FC = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await (await fetch(JSON)).json();
      const area = data.map((cur: Record<string, unknown>, i: number) => {
        if (i % 4 === 0) {
          const temp = { ...cur };
          temp.disabled = true;
          return temp;
        }
        return cur;
      });
      setAreas(area);
      console.log(area);
    })();
  }, []);

  if (!areas.length) return null;

  return (
    <ImageMapper
      src={URL}
      map={{
        name: 'my-map',
        areas,
      }}
      onClick={(area, index, e) => console.log(area, index, e)}
    />
  );
};

export default Example;
