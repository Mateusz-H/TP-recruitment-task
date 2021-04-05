export function getPagesRange(current, max) {
  let left = current - 1;
  let right = current + 3;
  let pages = [];
  for (let i = 1; i <= max; i++) {
    if (i === 1 || i === max || (i >= left && i < right)) {
      pages.push(i);
    }
  }
  return pages;
}

export function getSkippedPages(pages){
    let lastIndex;
    let skippedPages=[];
    for (let i of pages) {
        if (lastIndex) {
            if (i - lastIndex === 2) {
                skippedPages.push(lastIndex + 1);
            } else if (i - lastIndex !== 1) {
                skippedPages.push(0);
            }
        }
        skippedPages.push(i);
        lastIndex = i;
    }

    return skippedPages;
}
