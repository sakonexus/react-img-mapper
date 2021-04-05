import React, { useState, useEffect, useRef } from 'react';
import ImageMapper from '../ImageMapper';

const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';

const JSON =
  'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json';

const Example: React.FC = () => {
  const [areas, setAreas] = useState([]);
  const ref = useRef(null);

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
        temp.preFillColor = 'red';
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
        containerRef={ref}
        src={URL}
        map={{
          name: 'my-map',
          areas,
        }}
        // onClick={(area, index, e) => console.log(area, index, e)}
        stayHighlighted
        // stayMultiHighlighted
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
