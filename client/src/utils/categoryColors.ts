export type CategoryColor = typeof categoryColors[number];

export const categoryColors = [
  'bg-rose-900',
  'bg-fuchsia-900',
  'bg-indigo-900',
  'bg-blue-900',
  'bg-teal-900',
  'bg-lime-900',
] as const;

// export const categoryColors = {
//   red: {
//     background: 'bg-red-900',
//     border: 'border-red-900',
//   },
//   green: {
//     background: 'bg-green-900',
//     border: 'border-green-900',
//   },
//   indigo: {
//     background: 'bg-indigo-900',
//     border: 'border-indigo-900',
//   },
// };
