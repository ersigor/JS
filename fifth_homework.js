"use strict";


const chess = {
  chessMetod: document.getElementById('chess'),
  map() {
    const strs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
    const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
    const fig1 = [0,'T','K','O','Ф','K','O','K','T',0];
    const fig2 = [0,'П','П','П','П','П','П','П','П',0];
    for (let str = 0; str < strs.length; str++) {
      const tr = document.createElement('tr');
      this.chessMetod.appendChild(tr);
      for (let col = 0; col < cols.length; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        if (strs[str] === 0 && cols[col] !== 0) {
          td.innerHTML = cols[col];
        } else if (cols[col] === 0 && strs[str] !== 0) {
          td.innerHTML = strs[str].toString();
        }
        if (this.black(str, col)) {
          td.style.backgroundColor = 'black';
        }
        if ((str===1 || str===8) && col!==9 && col!==0) {
            td.innerHTML = fig1[col];
            td.style.color = 'grey';
        }
        if ((str===2 || str===7) && col!==9 && col!==0) {
            td.innerHTML = fig2[col];
            td.style.color = 'grey';
            
        }
      }
    }
  },

  black(str_, col_) {
    if (str_ === 0 || col_ === 0 || str_ === 9 || col_ === 9) {
      return false;
    }
    return (str_ % 2 === 1 && col_ % 2 === 0) || (str_ % 2 === 0 && col_ % 2 === 1);
  },
};
chess.map();