//tooldata
var solubilitydata = [
  /*阴离子*/[['OH', '-'], ['Cl', '-'], ['Br', '-'], ['I', '-'], ['F', '-'], ['SO', '3', '2-'], ['CO', '3', '2-'], ['NO', '3', '-'], ['CN', '-'], ['PO', '4', '3-'], ['S', '2-'], ['SO', '3','2-']],
  /*阳离子*/[['H', '+'], ['NH', '4', '+'], ['K', '+'], ['Na', '+'], ['Mg', '2+'], ['Ca', '2+'], ['Ba', '2+'], ['Al', '3+'], ['Zn', '2+'], ['Fe', '2+'], ['Fe', '3+'], ['Cu', '2+'], ['Ag', '+']],
  //      | OH-   |  Cl-   |   Br-   |   I-  |    F-   | SO42-|  CO32- |  NO3-  |  CN-  | PO43-|   S2-  | SO32-  |
  /*H+*/  ['弱',   '溶,挥', '溶,挥', '溶,挥', '弱,挥', '溶', '弱,挥', '溶,挥', '弱,挥', '弱', '弱,挥', '弱,挥'],
  /*NH4+*/['弱,挥', '溶',    '溶',     '溶',    '溶',     '溶',   '溶',   '溶',    '溶',  '溶',   '溶',    '溶'   ],
  /*K+*/  ['溶',     '溶',    '溶',     '溶',    '溶',    '溶',    '溶',   '溶',    '溶',  '溶',   '溶',    '溶'   ],
  /*Na+*/ ['溶',     '溶',    '溶',     '溶',    '溶',    '溶',    '溶',   '溶',    '溶',  '溶',   '溶',    '溶'   ],
  /*Mg2+*/['不',     '溶',    '溶',     '溶',     '不',    '溶',   '微',   '溶',   '不详',  '不',  '反应',   '微'  ],
  /*Ca2+*/['微',     '溶',    '溶',     '溶',     '不',    '微',   '不',   '溶',   '不详',  '不',   '反应',  '不'  ],
  /*Ba2+*/['溶',     '溶',    '溶',     '溶',    '微',     '不',   '不',   '溶',    '不详', '不',   '反应',  '不'  ],
  /*Al3+*/['不',     '溶',    '溶',     '溶',    '微',     '溶',   '解',   '溶',    '不详',  '不',  '解',    '解'  ],
  /*Zn3+*/['不',     '溶',    '溶',     '溶',    '溶',     '溶',   '不',   '溶',     '不',  '不',   '不',    '不'  ],
  /*Fe2+*/['不',     '溶',    '溶',     '溶',    '溶',     '溶',   '不',   '溶',     '不详', '不',  '不',    '不'  ],
  /*Fe3+*/['不',     '溶',    '溶',     '氧还',   '微',    '溶',   '解',   '溶',     '不详', '不',  '氧还',   '不' ],
  /*Cu2+*/['不',     '溶',    '溶',     '氧还',  '微',     '溶',   '不',   '溶',    '不详',  '不',  '不',    '不'  ],
  /*Ag+*/ ['不',     '不',    '不',     '不',    '溶',     '微',   '不',   '溶',    '不',    '不',   '不',   '不'  ],
]



function getsolubilitydata(){
  return solubilitydata
}

module.exports = {
  getsolubilitydata:getsolubilitydata
}