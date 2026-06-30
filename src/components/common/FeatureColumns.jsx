import { FadeUp } from './FadeUp';

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii'];

// Tailwind needs literal class strings — map, don't interpolate.
const GRID = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
};

/**
 * Borderless "operating principles" columns: gold italic roman-numeral index,
 * uppercase letterspaced title, muted body — separated by hairline dividers.
 * items: [{ title, desc, meta? }]
 */
export const FeatureColumns = ({ items, cols = 4, dark = false, className = '' }) => {
  const divide = dark ? 'border-white/15' : 'border-border';
  const titleColor = dark ? 'text-white' : 'text-foreground';
  const bodyColor = dark ? 'text-white/55' : 'text-muted-foreground';

  return (
    <div className={`grid ${GRID[cols] || GRID[4]} ${className}`}>
      {items.map((it, i) => {
        const firstInRow = i % cols === 0;
        return (
          <FadeUp
            key={it.title}
            delay={(i % cols) * 0.07}
            className={[
              'group flex flex-col py-9 lg:py-11 px-6 sm:px-7 lg:px-9 border-t',
              divide,
              firstInRow ? 'lg:pl-0' : 'lg:border-l',
            ].join(' ')}
          >
            <span className="font-serif italic text-[26px] leading-none text-accent">
              {ROMAN[i] || i + 1}.
            </span>
            <h3 className={`mt-7 text-[14.5px] font-bold uppercase tracking-[0.05em] leading-snug ${titleColor}`}>
              {it.title}
            </h3>
            <p className={`mt-4 text-[13.5px] leading-relaxed ${bodyColor} flex-1`}>{it.desc}</p>
            {it.meta && <div className={`mt-6 pt-5 border-t ${divide}`}>{it.meta}</div>}
          </FadeUp>
        );
      })}
    </div>
  );
};
