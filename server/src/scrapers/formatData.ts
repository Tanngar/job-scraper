export function formatData(data: Record<string, string>[]) {
  return data.map((posting) =>
    Object.fromEntries(
      Object.entries(posting).map(([key, value]) => [
        key,
        trimAndRemoveLineBreaks(value),
      ])
    )
  );
}

function trimAndRemoveLineBreaks(text: string) {
  return text.replace(/(\r\n|\n|\r)/gm, '').trim();
}
