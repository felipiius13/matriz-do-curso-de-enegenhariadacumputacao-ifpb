const c11 = document.getElementById('c11');
const c12 = document.getElementById('c12');
const c13 = document.getElementById('c13');
const c14 = document.getElementById('c14');
const c15 = document.getElementById('c15');
const c16 = document.getElementById('c16');
const c17 = document.getElementById('c17');

const c21 = document.getElementById('c21');
const c22 = document.getElementById('c22');
const c23 = document.getElementById('c23');
const c24 = document.getElementById('c24');
const c25 = document.getElementById('c25');
const c26 = document.getElementById('c26');
const c27 = document.getElementById('c27');

const c31 = document.getElementById('c31');
const c32 = document.getElementById('c32');
const c33 = document.getElementById('c33');
const c34 = document.getElementById('c34');
const c35 = document.getElementById('c35');
const c36 = document.getElementById('c36');

const c41 = document.getElementById('c41');
const c42 = document.getElementById('c42');
const c43 = document.getElementById('c43');
const c44 = document.getElementById('c44');
const c45 = document.getElementById('c45');

const c51 = document.getElementById('c51');
const c52 = document.getElementById('c52');
const c53 = document.getElementById('c53');
const c54 = document.getElementById('c54');
const c55 = document.getElementById('c55');

const c61 = document.getElementById('c61');
const c62 = document.getElementById('c62');
const c63 = document.getElementById('c63');
const c64 = document.getElementById('c64');
const c65 = document.getElementById('c65');

const c71 = document.getElementById('c71');
const c72 = document.getElementById('c72');
const c73 = document.getElementById('c73');
const c74 = document.getElementById('c74');
const c75 = document.getElementById('c75');

const c81 = document.getElementById('c81');
const c82 = document.getElementById('c82');
const c83 = document.getElementById('c83');
const c84 = document.getElementById('c84');
const c85 = document.getElementById('c85');

const c91 = document.getElementById('c91');
const c92 = document.getElementById('c92');
const c93 = document.getElementById('c93');
const c94 = document.getElementById('c94');
const c95 = document.getElementById('c95');

const c101 = document.getElementById('c101');
const c102 = document.getElementById('c102');
const c103 = document.getElementById('c103');
const c104 = document.getElementById('c104');
const c105 = document.getElementById('c105');

c11.reqs = [];
c12.reqs = [];
c13.reqs = [];
c14.reqs = [];
c15.reqs = [];
c16.reqs = [];
c17.reqs = [];

c21.reqs = ['c11'];
c22.reqs = [];
c23.reqs = [];
c24.reqs = ['c14', 'c15'];
c25.reqs = ['c14', 'c15'];
c26.reqs = ['c16'];
c27.reqs = [];

c31.reqs = ['c21'];
c32.reqs = [];
c33.reqs = ['c24'];
c34.reqs = ['c14', 'c15'];
c35.reqs = ['c14', 'c15'];
c36.reqs = ['c26'];

c41.reqs = ['c21'];
c42.reqs = [];
c43.reqs = ['c24'];
c44.reqs = ['c24', 'c36'];
c45.reqs = ['c36'];

c51.reqs = ['c31'];
c52.reqs = ['c31'];
c53.reqs = ['c24'];
c54.reqs = ['c24'];
c55.reqs = ['c36', 'c44'];

c61.reqs = ['c54'];
c62.reqs = ['c43'];
c63.reqs = ['c34', 'c35'];
c64.reqs = ['c31'];
c65.reqs = ['c55'];

c71.reqs = [];
c72.reqs = ['c24'];
c73.reqs = ['c63'];
c74.reqs = [];
c75.reqs = ['c52', 'c64'];

c81.reqs = ['c34', 'c35', 'c54'];
c82.reqs = ['c73'];
c83.reqs = ['c74'];
c84.reqs = ['c61', 'c64'];
c85.reqs = ['c75'];

c91.reqs = [];
c92.reqs = ['c83'];
c93.reqs = ['c44', 'c45'];
c94.reqs = ['c61', 'c75'];
c95.reqs = [];

c101.reqs = [];
c102.reqs = [];
c103.reqs = ['c92'];
c104.reqs = [];
c105.reqs = [];

/* PRIMEIRO PERIODO */

c11.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c21.removeAttribute('disabled');
  } else {
    c21.disabled = true;
    c21.classList.remove('visited');
    c31.disabled = true;
    c31.classList.remove('visited');
    c41.disabled = true;
    c41.classList.remove('visited');
    c51.disabled = true;
    c51.classList.remove('visited');
    c52.disabled = true;
    c52.classList.remove('visited');
    c64.disabled = true;
    c64.classList.remove('visited');
    c75.disabled = true;
    c75.classList.remove('visited');
    c85.disabled = true;
    c85.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
    c61.disabled = true;
    c61.classList.remove('visited');
    c84.disabled = true;
    c84.classList.remove('visited');
  }
});
c12.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c13.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c14.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c25.removeAttribute('disabled');
    c24.removeAttribute('disabled');
    c34.removeAttribute('disabled');
    c35.removeAttribute('disabled');
  } else {
    c24.disabled = true;
    c24.classList.remove('visited');
    c25.disabled = true;
    c25.classList.remove('visited');
    c34.disabled = true;
    c34.classList.remove('visited');
    c35.disabled = true;
    c35.classList.remove('visited');
    c72.disabled = true;
    c72.classList.remove('visited');
    c33.disabled = true;
    c33.classList.remove('visited');
    c43.disabled = true;
    c43.classList.remove('visited');
    c44.disabled = true;
    c44.classList.remove('visited');
    c53.disabled = true;
    c53.classList.remove('visited');
    c54.disabled = true;
    c54.classList.remove('visited');
    c81.disabled = true;
    c81.classList.remove('visited');
    c63.disabled = true;
    c63.classList.remove('visited');
    c73.disabled = true;
    c73.classList.remove('visited');
    c61.disabled = true;
    c61.classList.remove('visited');
    c55.disabled = true;
    c55.classList.remove('visited');
    c62.disabled = true;
    c62.classList.remove('visited');
    c93.disabled = true;
    c93.classList.remove('visited');
    c65.disabled = true;
    c65.classList.remove('visited');
    c84.disabled = true;
    c84.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
    c82.disabled = true;
    c82.classList.remove('visited');
  }
});
c15.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c25.removeAttribute('disabled');
    c24.removeAttribute('disabled');
    c34.removeAttribute('disabled');
    c35.removeAttribute('disabled');
  } else {
    c24.disabled = true;
    c24.classList.remove('visited');
    c25.disabled = true;
    c25.classList.remove('visited');
    c34.disabled = true;
    c34.classList.remove('visited');
    c35.disabled = true;
    c35.classList.remove('visited');
    c72.disabled = true;
    c72.classList.remove('visited');
    c33.disabled = true;
    c33.classList.remove('visited');
    c43.disabled = true;
    c43.classList.remove('visited');
    c44.disabled = true;
    c44.classList.remove('visited');
    c53.disabled = true;
    c53.classList.remove('visited');
    c54.disabled = true;
    c54.classList.remove('visited');
    c81.disabled = true;
    c81.classList.remove('visited');
    c63.disabled = true;
    c63.classList.remove('visited');
    c73.disabled = true;
    c73.classList.remove('visited');
    c61.disabled = true;
    c61.classList.remove('visited');
    c55.disabled = true;
    c55.classList.remove('visited');
    c62.disabled = true;
    c62.classList.remove('visited');
    c93.disabled = true;
    c93.classList.remove('visited');
    c65.disabled = true;
    c65.classList.remove('visited');
    c84.disabled = true;
    c84.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
    c82.disabled = true;
    c82.classList.remove('visited');
  }
});
c16.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c26.removeAttribute('disabled');
  } else {
    c26.disabled = true;
    c26.classList.remove('visited');
    c36.disabled = true;
    c36.classList.remove('visited');
    c44.disabled = true;
    c44.classList.remove('visited');
    c45.disabled = true;
    c45.classList.remove('visited');
    c55.disabled = true;
    c55.classList.remove('visited');
    c65.disabled = true;
    c65.classList.remove('visited');
    c93.disabled = true;
    c93.classList.remove('visited');
  }
});
c17.addEventListener('click', function() {
  this.classList.toggle('visited');
});

/* SEGUNDO PERIODO */

c21.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c31.removeAttribute('disabled');
    c41.removeAttribute('disabled');
  } else {
    c31.disabled = true;
    c31.classList.remove('visited');
    c41.disabled = true;
    c41.classList.remove('visited');
    c51.disabled = true;
    c51.classList.remove('visited');
    c52.disabled = true;
    c52.classList.remove('visited');
    c64.disabled = true;
    c64.classList.remove('visited');
    c75.disabled = true;
    c75.classList.remove('visited');
    c85.disabled = true;
    c85.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
    c61.disabled = true;
    c61.classList.remove('visited');
    c84.disabled = true;
    c84.classList.remove('visited');
  }
});
c22.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c23.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c24.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c72.removeAttribute('disabled');
    c33.removeAttribute('disabled');
    c43.removeAttribute('disabled');
    c44.removeAttribute('disabled');
    c53.removeAttribute('disabled');
    c54.removeAttribute('disabled');
  } else {
    c72.disabled = true;
    c72.classList.remove('visited');
    c33.disabled = true;
    c33.classList.remove('visited');
    c43.disabled = true;
    c43.classList.remove('visited');
    c44.disabled = true;
    c44.classList.remove('visited');
    c53.disabled = true;
    c53.classList.remove('visited');
    c54.disabled = true;
    c54.classList.remove('visited');
    c62.disabled = true;
    c62.classList.remove('visited');
    c93.disabled = true;
    c93.classList.remove('visited');
    c55.disabled = true;
    c55.classList.remove('visited');
    c61.disabled = true;
    c61.classList.remove('visited');
    c81.disabled = true;
    c81.classList.remove('visited');
    c65.disabled = true;
    c65.classList.remove('visited');
    c84.disabled = true;
    c84.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
  }
});
c25.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c26.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c36.removeAttribute('disabled');
  } else {
    c36.disabled = true;
    c36.classList.remove('visited');
    c44.disabled = true;
    c44.classList.remove('visited');
    c45.disabled = true;
    c45.classList.remove('visited');
    c55.disabled = true;
    c55.classList.remove('visited');
    c65.disabled = true;
    c65.classList.remove('visited');
    c93.disabled = true;
    c93.classList.remove('visited');
  }
});
c27.addEventListener('click', function() {
  this.classList.toggle('visited');
});

/* TERCEIRO PERIODO */

c31.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c51.removeAttribute('disabled');
    c52.removeAttribute('disabled');
    c64.removeAttribute('disabled');
  } else {
    c51.disabled = true;
    c51.classList.remove('visited');
    c52.disabled = true;
    c52.classList.remove('visited');
    c64.disabled = true;
    c64.classList.remove('visited');
    c75.disabled = true;
    c75.classList.remove('visited');
    c85.disabled = true;
    c85.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
    c61.disabled = true;
    c61.classList.remove('visited');
    c84.disabled = true;
    c84.classList.remove('visited');
  }
});
c32.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c33.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c34.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c81.removeAttribute('disabled');
    c63.removeAttribute('disabled');
  } else {
    c63.disabled = true;
    c63.classList.remove('visited');
    c81.disabled = true;
    c81.classList.remove('visited');
    c73.disabled = true;
    c73.classList.remove('visited');
    c82.disabled = true;
    c82.classList.remove('visited');
  }
});
c35.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c81.removeAttribute('disabled');
    c63.removeAttribute('disabled');
  } else {
    c63.disabled = true;
    c63.classList.remove('visited');
    c81.disabled = true;
    c81.classList.remove('visited');
    c73.disabled = true;
    c73.classList.remove('visited');
    c82.disabled = true;
    c82.classList.remove('visited');
  }
});
c36.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c44.removeAttribute('disabled');
    c45.removeAttribute('disabled');
    c55.removeAttribute('disabled');
  } else {
    c44.disabled = true;
    c44.classList.remove('visited');
    c45.disabled = true;
    c45.classList.remove('visited');
    c55.disabled = true;
    c55.classList.remove('visited');
    c65.disabled = true;
    c65.classList.remove('visited');
    c93.disabled = true;
    c93.classList.remove('visited');
  }
});

/* QUARTO PERÍODO */

c41.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c42.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c43.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c62.removeAttribute('disabled');
  } else {
    c62.disabled = true;
    c62.classList.remove('visited');
  }
});
c44.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c55.removeAttribute('disabled');
    c93.removeAttribute('disabled');
  } else {
    c55.disabled = true;
    c55.classList.remove('visited');
    c65.disabled = true;
    c65.classList.remove('visited');
    c93.disabled = true;
    c93.classList.remove('visited');
  }
});
c45.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c93.removeAttribute('disabled');
  } else {
    c93.disabled = true;
    c93.classList.remove('visited');
  }
});

/* QUINTO PERÍODO */

c51.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c61.removeAttribute('disabled');
  } else {
    c61.disabled = true;
    c61.classList.remove('visited');
    c84.disabled = true;
    c84.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
  }
});
c52.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c75.removeAttribute('disabled');
  } else {
    c75.disabled = true;
    c75.classList.remove('visited');
    c85.disabled = true;
    c85.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
  }
})
c53.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c54.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c61.removeAttribute('disabled');
    c81.removeAttribute('disabled');
  } else {
    c61.disabled = true;
    c61.classList.remove('visited');
    c81.disabled = true;
    c81.classList.remove('visited');
  }
});
c55.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c65.removeAttribute('disabled');
  } else {
    c65.disabled = true;
    c65.classList.remove('visited');
  }
});

/* SEXTO PERIODO */

c61.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c84.removeAttribute('disabled');
    c94.removeAttribute('disabled');
  } else {
    c84.disabled = true;
    c84.classList.remove('visited');
    c94.disabled = true;
    c94.classList.remove('visited');
  }
})
c62.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c63.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c73.removeAttribute('disabled');
  } else {
    c73.disabled = true;
    c73.classList.remove('visited');
    c82.disabled = true;
    c82.classList.remove('visited');
  }
})
c64.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c75.removeAttribute('disabled');
    c84.removeAttribute('disabled');
  } else {
    c84.disabled = true;
    c84.classList.remove('visited');
    c75.disabled = true;
    c75.classList.remove('visited');
  }
})
c65.addEventListener('click', function() {
  this.classList.toggle('visited');
});

/* SETIMO PERIODO */

c71.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c72.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c73.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c82.removeAttribute('disabled');
  } else {
    c82.disabled = true;
    c82.classList.remove('visited');
  }
});
c74.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c83.removeAttribute('disabled');
  } else {
    c83.disabled = true;
    c83.classList.remove('visited');
    c92.disabled = true;
    c92.classList.remove('visited');
    c103.disabled = true;
    c103.classList.remove('visited');
  }
});
c75.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c85.removeAttribute('disabled');
    c94.removeAttribute('disabled');
  } else {
    c85.disabled = true;
    c85.classList.remove('visited');
    c94.disabled = true;
    c95.classList.remove('visited');
  }
});

/** OITAVO PERIODO */

c81.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c82.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c83.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c92.removeAttribute('disabled');
  } else {
    c92.disabled = true;
    c92.classList.remove('visited');
    c103.disabled = true;
    c103.classList.remove('visited');
  }
});
c84.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c85.addEventListener('click', function() {
  this.classList.toggle('visited');
});

/** NONO PERIODO */

c91.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c92.addEventListener('click', function() {
  this.classList.toggle('visited');
  if (this.classList.contains('visited')) {
    c103.removeAttribute('disabled');
  } else {
    c103.disabled = true;
    c103.classList.remove('visited');
  }
});
c93.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c94.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c95.addEventListener('click', function() {
  this.classList.toggle('visited');
});

/** DECIMO PERIODO */

c101.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c102.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c103.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c104.addEventListener('click', function() {
  this.classList.toggle('visited');
});
c105.addEventListener('click', function() {
  this.classList.toggle('visited');
});
