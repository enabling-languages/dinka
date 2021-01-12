if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_el_dinka());
}
function Keyboard_el_dinka()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this.KI="Keyboard_el_dinka";
  this.KN="Thuɔŋjäŋ";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={
    "default": ["`","1","2","3","4","5","6","7","8","9","0","-","=","","","","ŋ","w","e","r","t","y","u","i","o","p","[","]","\\","","","","a","ɛ","d","ɣ","g","h","j","k","l","◌̈","'","","","","","","",";","ɔ","c","v","b","n","m",",",".","/","","","","","",""],
    "rightalt": ["","","","","£","","","","","","","–","","","","","q","","€","","","","","","","","‘","’","","","","","","s","","f","","","","","","","","","","","","","","z","x","©","","","","","","…","","","","","","",""],
    "rightalt-shift": ["","","","","","","","","","","","—","","","","","Q","","","","","","","","","","“","”","","","","","","S","","F","","","","","","","","","","","","","","Z","X","","","","","","","","","","","","","",""],
    "shift": ["~","!","@","#","$","%","^","&","*","(",")","_","+","","","","Ŋ","W","E","R","T","Y","U","I","O","P","{","}","|","","","","A","Ɛ","D","Ɣ","G","H","J","K","L","◌̈","\"","","","","","","",":","Ɔ","C","V","B","N","M","<",">","?","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="3.1";
  this.KMBM=modCodes.LCTRL | modCodes.RCTRL | modCodes.LALT | modCodes.RALT | modCodes.SHIFT /* 0x001F */;
  this.KVKD="T_F T_Q T_S T_X T_Z T_COPYRIGHT T_EURO T_POUND T_EN_DASH T_EM_DASH T_LSINGLE_QUOTE T_RSINGLE_QUOTE T_LDB_QUOTE T_RDB_QUOTE T_ELLIPSIS T_DIAERESIS T_00E4 T_00C4 T_00EB T_00CB T_00EF T_00CF T_00F6 T_00D6 T_00E4_LONG T_00C4_LONG T_00EB_LONG T_00CB_LONG T_00EF_LONG T_00CF_LONG T_00F6_LONG T_00D6_LONG T_OPEN_E_0308 T_OPEN_O_0308 T_OPEN_E_0308_LONG T_OPEN_O_0308_LONG";
  this.KVKL={
  "phone": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "\u014B",
                "sk": [
                  {
                    "id": "T_Q",
                    "text": "q"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "id": "T_00EB",
                    "text": "\u00EB"
                  },
                  {
                    "id": "T_00EB_LONG",
                    "text": "\u00EB\u00EB"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u"
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "id": "T_00EF",
                    "text": "\u00EF"
                  },
                  {
                    "id": "T_00EF_LONG",
                    "text": "\u00EF\u00EF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "id": "T_00F6",
                    "text": "\u00F6"
                  },
                  {
                    "id": "T_00F6_LONG",
                    "text": "\u00F6\u00F6"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "a",
                "sk": [
                  {
                    "id": "T_00E4",
                    "text": "\u00E4"
                  },
                  {
                    "id": "T_00E4_LONG",
                    "text": "\u00E4\u00E4"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "\u025B",
                "sk": [
                  {
                    "id": "T_OPEN_E_0308",
                    "text": "\u025B\u0308"
                  },
                  {
                    "id": "T_OPEN_E_0308_LONG",
                    "text": "\u025B\u0308\u025B\u0308"
                  },
                  {
                    "id": "T_S",
                    "text": "s"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "d"
              },
              {
                "id": "K_F",
                "text": "\u0263",
                "sk": [
                  {
                    "id": "T_F",
                    "text": "f"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "width": "10",
                "id": "T_new_1544",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "T_Z",
                "text": "z"
              },
              {
                "id": "K_X",
                "text": "\u0254",
                "sk": [
                  {
                    "id": "T_OPEN_O_0308",
                    "text": "\u0254\u0308"
                  },
                  {
                    "id": "T_OPEN_O_0308_LONG",
                    "text": "\u0254\u0308\u0254\u0308"
                  },
                  {
                    "id": "T_X",
                    "text": "x"
                  }
                ]
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n"
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "\u014A",
                "sk": [
                  {
                    "id": "T_Q",
                    "text": "Q"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_00CB",
                    "text": "\u00CB"
                  },
                  {
                    "layer": "default",
                    "id": "T_00CB_LONG",
                    "text": "\u00CB\u00CB"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_00CF",
                    "text": "\u00CF"
                  },
                  {
                    "layer": "default",
                    "id": "T_00CF_LONG",
                    "text": "\u00CF\u00CF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "layer": "default",
                    "id": "T_00D6_LONG",
                    "text": "\u00D6\u00D6"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "A",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_00C4",
                    "text": "\u00C4"
                  },
                  {
                    "layer": "default",
                    "id": "T_00C4_LONG",
                    "text": "\u00C4\u00C4"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "\u0190",
                "sk": [
                  {
                    "id": "T_OPEN_E_0308",
                    "text": "\u0190\u0308"
                  },
                  {
                    "id": "T_OPEN_E_0308_LONG",
                    "text": "\u0190\u0308\u0190\u0308"
                  },
                  {
                    "id": "T_S",
                    "text": "S"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "\u0194",
                "sk": [
                  {
                    "id": "T_F",
                    "text": "F"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "width": "10",
                "id": "T_new_2102",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "T_Z",
                "text": "Z"
              },
              {
                "id": "K_X",
                "text": "\u0186",
                "sk": [
                  {
                    "id": "T_OPEN_O_0308",
                    "text": "\u0186\u0308"
                  },
                  {
                    "id": "T_OPEN_O_0308_LONG",
                    "text": "\u0186\u0308\u0186\u0308"
                  },
                  {
                    "id": "T_X",
                    "text": "X"
                  }
                ]
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "layer": "default",
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "50",
                "text": "$",
                "sk": [
                  {
                    "id": "T_EURO",
                    "text": "\u20AC"
                  },
                  {
                    "id": "T_POUND",
                    "text": "\u00A3"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "@"
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": "#"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": "%"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "&"
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "layer": "shift",
                "id": "K_QUOTE",
                "text": "\"",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_LDB_QUOTE",
                    "text": "\u201C"
                  },
                  {
                    "layer": "default",
                    "id": "T_RDB_QUOTE",
                    "text": "\u201D"
                  }
                ]
              },
              {
                "layer": "default",
                "id": "K_QUOTE",
                "text": "'",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_LSINGLE_QUOTE",
                    "text": "\u2018"
                  },
                  {
                    "layer": "default",
                    "id": "T_RSINGLE_QUOTE",
                    "text": "\u2019"
                  }
                ]
              },
              {
                "width": "10",
                "id": "T_new_3104",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_LBRKT",
                "text": "[",
                "sk": [
                  {
                    "id": "U_003C",
                    "text": "<"
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_003E",
                    "text": ">"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "layer": "default",
                "id": "K_HYPHEN",
                "text": "-",
                "sk": [
                  {
                    "id": "U_007E",
                    "text": "~"
                  },
                  {
                    "id": "T_EN_DASH",
                    "text": "\u2013"
                  },
                  {
                    "id": "T_EM_DASH",
                    "text": "\u2014"
                  },
                  {
                    "id": "T_ELLIPSIS",
                    "text": "\u2026"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_8",
                "text": "*"
              },
              {
                "layer": "default",
                "id": "K_SLASH",
                "text": "/"
              },
              {
                "layer": "default",
                "id": "T_COPYRIGHT",
                "text": "\u00A9"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  },
  "tablet": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "\u014B",
                "sk": [
                  {
                    "id": "T_Q",
                    "text": "q"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "id": "T_00EB",
                    "text": "\u00EB"
                  },
                  {
                    "id": "T_00EB_LONG",
                    "text": "\u00EB\u00EB"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u"
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "id": "T_00EF",
                    "text": "\u00EF"
                  },
                  {
                    "id": "T_00EF_LONG",
                    "text": "\u00EF\u00EF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "id": "T_00F6",
                    "text": "\u00F6"
                  },
                  {
                    "id": "T_00F6_LONG",
                    "text": "\u00F6\u00F6"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "text": "a",
                "sk": [
                  {
                    "id": "T_00E4",
                    "text": "\u00E4"
                  },
                  {
                    "id": "T_00E4_LONG",
                    "text": "\u00E4\u00E4"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "\u025B",
                "sk": [
                  {
                    "id": "T_OPEN_E_0308",
                    "text": "\u025B\u0308"
                  },
                  {
                    "id": "T_OPEN_E_0308_LONG",
                    "text": "\u025B\u0308\u025B\u0308"
                  },
                  {
                    "id": "T_S",
                    "text": "s"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "d"
              },
              {
                "id": "K_F",
                "text": "\u0263",
                "sk": [
                  {
                    "id": "T_F",
                    "text": "f"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "id": "T_DIAERESIS",
                "sp": "2",
                "text": "\u25CC\u0308"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "width": "150",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_X",
                "text": "\u0254",
                "sk": [
                  {
                    "id": "T_OPEN_O_0308",
                    "text": "\u0254\u0308"
                  },
                  {
                    "id": "T_OPEN_O_0308_LONG",
                    "text": "\u0254\u0308\u0254\u0308"
                  },
                  {
                    "id": "T_X",
                    "text": "x"
                  },
                  {
                    "id": "T_Z",
                    "text": "z"
                  }
                ]
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n"
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  }
                ]
              },
              {
                "width": "155",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "\u014A",
                "sk": [
                  {
                    "id": "T_Q",
                    "text": "Q"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_00CB",
                    "text": "\u00CB"
                  },
                  {
                    "layer": "default",
                    "id": "T_00CB_LONG",
                    "text": "\u00CB\u00CB"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_00CF",
                    "text": "\u00CF"
                  },
                  {
                    "layer": "default",
                    "id": "T_00CF_LONG",
                    "text": "\u00CF\u00CF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "layer": "default",
                    "id": "T_00D6_LONG",
                    "text": "\u00D6\u00D6"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "text": "A",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_00C4",
                    "text": "\u00C4"
                  },
                  {
                    "layer": "default",
                    "id": "T_00C4_LONG",
                    "text": "\u00C4\u00C4"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "\u0190",
                "sk": [
                  {
                    "id": "T_OPEN_E_0308",
                    "text": "\u0190\u0308"
                  },
                  {
                    "id": "T_OPEN_E_0308_LONG",
                    "text": "\u0190\u0308\u0190\u0308"
                  },
                  {
                    "id": "T_S",
                    "text": "S"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "\u0194",
                "sk": [
                  {
                    "id": "T_F",
                    "text": "F"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "layer": "default",
                "id": "T_DIAERESIS",
                "sp": "2",
                "text": "\u25CC\u0308"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "width": "150",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_X",
                "text": "\u0186",
                "sk": [
                  {
                    "id": "T_OPEN_O_0308",
                    "text": "\u0186\u0308"
                  },
                  {
                    "id": "T_OPEN_O_0308_LONG",
                    "text": "\u0186\u0308\u0186\u0308"
                  },
                  {
                    "id": "T_X",
                    "text": "X"
                  },
                  {
                    "id": "T_Z",
                    "text": "Z"
                  }
                ]
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "layer": "default",
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  }
                ]
              },
              {
                "width": "155",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "text": "$",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_EURO",
                    "text": "\u20AC"
                  },
                  {
                    "layer": "default",
                    "id": "T_POUND",
                    "text": "\u00A3"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "@"
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": "#"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": "%"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "&"
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "layer": "shift",
                "id": "K_QUOTE",
                "text": "\"",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_LDB_QUOTE",
                    "text": "\u201C"
                  },
                  {
                    "layer": "default",
                    "id": "T_RDB_QUOTE",
                    "text": "\u201D"
                  }
                ]
              },
              {
                "layer": "default",
                "id": "K_QUOTE",
                "text": "'",
                "sk": [
                  {
                    "layer": "default",
                    "id": "T_LSINGLE_QUOTE",
                    "text": "\u2018"
                  },
                  {
                    "layer": "default",
                    "id": "T_RSINGLE_QUOTE",
                    "text": "\u2019"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_BKQUOTE",
                "text": "~"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_LBRKT",
                "text": "[",
                "sk": [
                  {
                    "id": "U_003C",
                    "text": "<"
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_003E",
                    "text": ">"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "layer": "default",
                "id": "K_HYPHEN",
                "text": "-",
                "sk": [
                  {
                    "id": "U_2013",
                    "text": "\u2013"
                  },
                  {
                    "id": "U_2014",
                    "text": "\u2014"
                  },
                  {
                    "id": "T_ELLIPSIS",
                    "text": "\u2026"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_8",
                "text": "*"
              },
              {
                "layer": "default",
                "id": "K_SLASH",
                "text": "/"
              },
              {
                "id": "T_COPYRIGHT",
                "text": "\u00A9"
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.s_nfc=KeymanWeb.KLOAD(this.KI,"nfc","1");
  this.s_consonantLowerChars="ŋwrtypdɣghjklcvbnm";
  this.s_consonantLowerKeys=['','','','','','','','','','','','','','','','','',''];
  this.s_consonantUpperChars="ŊWRTYPDƔGHJKLCVBNM";
  this.s_consonantUpperKeys=['','','','','','','','','','','','','','','','','',''];
  this.s_vowelLowerChars="aeiouɛɔ";
  this.s_vowelLowerKeys=['','','','','','',''];
  this.s_vowelUpperChars="AEIOUƐƆ";
  this.s_vowelUpperKeys=['','','','','','',''];
  this.s_consonantChars="ŋwrtypdɣghjklcvbnmŊWRTYPDƔGHJKLCVBNM";
  this.s_consonantKeys=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_vowelChars="aeiouɛɔAEIOUƐƆ";
  this.s_vowelKeys=['','','','','','','','','','','','','',''];
  this.s_alphaChars="ŋwrtypdɣghjklcvbnmŊWRTYPDƔGHJKLCVBNMaeiouɛɔAEIOUƐƆ";
  this.s_alphaKeys=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_digitChars="1234567890";
  this.s_digitKeys=['','','','','','','','','',''];
  this.s_digitKeysPad=['','','','','','','','','',''];
  this.s_punctuationChars="`~!@#$%^&*()-_=+[{]}\\|,<.>/?;:'\"";
  this.s_punctuationKeys=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_coreChars="ŋwrtypdɣghjklcvbnmŊWRTYPDƔGHJKLCVBNMaeiouɛɔAEIOUƐƆ1234567890`~!@#$%^&*()-_=+[{]}\\|,<.>/?;:'\"";
  this.s_coreKeys=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_additionalChars="fFqQsSxXzZ©€£–—‘’“”…";
  this.s_additionalKeys=['','','','','','','','','','','','','','','','','','','',''];
  this.s_additionalKeysMacOS=['','','','','','','','','','','','','','','','','','','',''];
  this.s_additionalTouch=['','','','','','','','','','','','','','','','','','','',''];
  this.s_diaeresisKey=['','',''];
  this.s_diaeresisBase="aAeEiIoO";
  this.s_diaeresisBaseSub="aAeEoO";
  this.s_diaeresisChar="äÄëËïÏöÖ";
  this.s_diaeresisCharSub="äÄëËöÖ";
  this.s_diaeresisTouch=['','','','','','','',''];
  this.s_diaeresisLongTouch=['','','','','','','',''];
  this.s_diaeresisExtendedBase="ɛƐɔƆ";
  this.s_diaeresisAll="äÄëËïÏöÖ̈";
  this.s_nonDiaeresisFinal="iIuU";
  this.s_nonDiaeresisFinalSub="uU";
  this.s_notDiaeresis="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZŋŊɣƔ";
  this.s_altKeys=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s55="0";
  this.s56="0";
  this.s57="1";
  this.s58="1";
  this.s60="touch";
  this.s61="macos";
  this.s62="touch";
  this.s63="0";
  this.s64="1";
  this.s65="0";
  this.s66="1";
  this.s67="0";
  this.s68="1";
  this.s69="0";
  this.s70="1";
  this.s71="0";
  this.s72="1";
  this.s73="0";
  this.s74="1";
  this.s75="0";
  this.s76="1";
  this.s77="0";
  this.s78="1";
  this.s79="0";
  this.s80="1";
  this.s81="0";
  this.s82="1";
  this.s83="0";
  this.s84="1";
  this.s85="0";
  this.s86="1";
  this.s87="0";
  this.s88="1";
  this.s89="0";
  this.s90="1";
  this.s91="0";
  this.s92="1";
  this.s93="0";
  this.s94="1";
  this.s95="0";
  this.s96="1";
  this.s97="0";
  this.s98="1";
  this.s99="0";
  this.s100="1";
  this.s101="0";
  this.s102="1";
  this.s103="0";
  this.s104="touch";
  this.s105="1";
  this.s106="touch";
  this.s107="0";
  this.s108="touch";
  this.s109="1";
  this.s110="touch";
  this.s111="touch";
  this.s112="touch";
  this.s113="touch";
  this.s114="touch";
  this.s115="touch";
  this.s116="touch";
  this.s117="touch";
  this.s118="touch";
  this.s119="0";
  this.s120="1";
  this.s121="0";
  this.s122="1";
  this.s123="0";
  this.s124="1";
  this.s125="0";
  this.s126="1";
  this.s127="0";
  this.s128="1";
  this.s129="0";
  this.s130="1";
  this.s131="0";
  this.s132="1";
  this.s133="0";
  this.s134="1";
  this.s135="macos";
  this.KVER="13.0.115.0";
  this.gs=function(t,e) {
    return this.g_constraints(t,e);
  };
  this.g_constraints=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10F)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisChar}])){
        r=m=1;   // Line 140
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
      }
      else if(k.KFCM(1,t,['̈'])){
        r=m=1;   // Line 141
        k.KDC(1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_notDiaeresis}])){
        r=m=1;   // Line 143
        k.KDC(1,t);
        k.KIO(-1,this.s_notDiaeresis,1,t);
      }
      else if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LCTRL | modCodes.VIRTUAL_KEY /* 0x4001 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        this.s_nfc=this.s55;
        k.KSAVE("nfc",this.s_nfc);
      }
    }
    else if(k.KKM(e, modCodes.RCTRL | modCodes.VIRTUAL_KEY /* 0x4002 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        this.s_nfc=this.s56;
        k.KSAVE("nfc",this.s_nfc);
      }
    }
    else if(k.KKM(e, modCodes.LCTRL | modCodes.VIRTUAL_KEY /* 0x4001 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        this.s_nfc=this.s57;
        k.KSAVE("nfc",this.s_nfc);
      }
    }
    else if(k.KKM(e, modCodes.RCTRL | modCodes.VIRTUAL_KEY /* 0x4002 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        this.s_nfc=this.s58;
        k.KSAVE("nfc",this.s_nfc);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP8 /* 0x68 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP9 /* 0x69 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP5 /* 0x65 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP0 /* 0x60 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP6 /* 0x66 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP7 /* 0x67 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP1 /* 0x61 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP2 /* 0x62 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP3 /* 0x63 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP4 /* 0x64 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x123)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LCTRL | modCodes.VIRTUAL_KEY /* 0x4001 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x122)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x123)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x100)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x101)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x102)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x102)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x103)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x103)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x104)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x104)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x105)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x106)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x107)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x108)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x109)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10A)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10B)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10C)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10D)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10E)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x120)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x120)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x121)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x121)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x110)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x111)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x112)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x113)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x114)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x115)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x116)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x117)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x118)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x119)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11A)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11B)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11C)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11D)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11E)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11F)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x122)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.RCTRL | modCodes.VIRTUAL_KEY /* 0x4002 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        r=this.g_main(t,e);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisChar}])){
        r=m=1;   // Line 140
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
      }
      else if(k.KFCM(1,t,['̈'])){
        r=m=1;   // Line 141
        k.KDC(1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_notDiaeresis}])){
        r=m=1;   // Line 143
        k.KDC(1,t);
        k.KIO(-1,this.s_notDiaeresis,1,t);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisChar}])){
        r=m=1;   // Line 140
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
      }
      else if(k.KFCM(1,t,['̈'])){
        r=m=1;   // Line 141
        k.KDC(1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_notDiaeresis}])){
        r=m=1;   // Line 143
        k.KDC(1,t);
        k.KIO(-1,this.s_notDiaeresis,1,t);
      }
    }
    if(!m&&k.KIK(e)) {
      r=1;
      k.KDC(-1,t);
      r=this.g_main(t,e);
    }
    return r;
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(k.KFCM(4,t,[{t:'a',a:this.s_diaeresisBase},'̈',{t:'a',a:this.s_diaeresisBase},'̈'])&&this.s_nfc===this.s121){
        r=m=1;   // Line 249
        k.KDC(4,t);
        k.KIO(-1,this.s_diaeresisBase,1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_diaeresisExtendedBase},'̈',{t:'a',a:this.s_diaeresisExtendedBase},'̈'])){
        r=m=1;   // Line 252
        k.KDC(4,t);
        k.KO(-1,t,"̈");
        k.KIO(-1,this.s_diaeresisExtendedBase,3,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBase},'̈'])&&this.s_nfc===this.s119){
        r=m=1;   // Line 247
        k.KDC(2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisChar},{t:'a',a:this.s_diaeresisChar}])&&this.s_nfc===this.s122){
        r=m=1;   // Line 250
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisChar}])&&this.s_nfc===this.s120){
        r=m=1;   // Line 248
        k.KDC(1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisExtendedBase},'̈'])){
        r=m=1;   // Line 251
        k.KDC(2,t);
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(k.KFCM(4,t,[{t:'a',a:this.s_diaeresisBase},'̈',{t:'a',a:this.s_diaeresisBase},'̈'])&&this.s_nfc===this.s125){
        r=m=1;   // Line 257
        k.KDC(4,t);
        k.KIO(-1,this.s_diaeresisBase,1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_diaeresisExtendedBase},'̈',{t:'a',a:this.s_diaeresisExtendedBase},'̈'])){
        r=m=1;   // Line 259
        k.KDC(4,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,1,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,3,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBase},'̈'])&&this.s_nfc===this.s123){
        r=m=1;   // Line 254
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisBase,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisChar},{t:'a',a:this.s_diaeresisChar}])&&this.s_nfc===this.s126){
        r=m=1;   // Line 258
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisBase,1,t);
        k.KIO(-1,this.s_diaeresisBase,2,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisChar}])&&this.s_nfc===this.s124){
        r=m=1;   // Line 255
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisBase,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisExtendedBase},'̈'])){
        r=m=1;   // Line 256
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,1,t);
      }
    }
    else if(k.KKM(e, modCodes.LCTRL | modCodes.VIRTUAL_KEY /* 0x4001 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(k.KFCM(4,t,[{t:'a',a:this.s_diaeresisBase},'̈',{t:'a',a:this.s_diaeresisBase},'̈'])&&this.s_nfc===this.s129){
        r=m=1;   // Line 264
        k.KDC(4,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_diaeresisExtendedBase},'̈',{t:'a',a:this.s_diaeresisExtendedBase},'̈'])){
        r=m=1;   // Line 266
        k.KDC(4,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBase},'̈'])&&this.s_nfc===this.s127){
        r=m=1;   // Line 261
        k.KDC(2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisChar},{t:'a',a:this.s_diaeresisChar}])&&this.s_nfc===this.s130){
        r=m=1;   // Line 265
        k.KDC(2,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisChar}])&&this.s_nfc===this.s128){
        r=m=1;   // Line 262
        k.KDC(1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisExtendedBase},'̈'])){
        r=m=1;   // Line 263
        k.KDC(2,t);
      }
    }
    else if(k.KKM(e, modCodes.RCTRL | modCodes.VIRTUAL_KEY /* 0x4002 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(k.KFCM(4,t,[{t:'a',a:this.s_diaeresisBase},'̈',{t:'a',a:this.s_diaeresisBase},'̈'])&&this.s_nfc===this.s133){
        r=m=1;   // Line 271
        k.KDC(4,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_diaeresisExtendedBase},'̈',{t:'a',a:this.s_diaeresisExtendedBase},'̈'])){
        r=m=1;   // Line 273
        k.KDC(4,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBase},'̈'])&&this.s_nfc===this.s131){
        r=m=1;   // Line 268
        k.KDC(2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisChar},{t:'a',a:this.s_diaeresisChar}])&&this.s_nfc===this.s134){
        r=m=1;   // Line 272
        k.KDC(2,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisChar}])&&this.s_nfc===this.s132){
        r=m=1;   // Line 269
        k.KDC(1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisExtendedBase},'̈'])){
        r=m=1;   // Line 270
        k.KDC(2,t);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10F)) {
      if(k.KFCM(3,t,['a','a',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s79){
        r=m=1;   // Line 191
        k.KDC(3,t);
        k.KO(-1,t,"ää");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['a','a',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s80){
        r=m=1;   // Line 192
        k.KDC(3,t);
        k.KO(-1,t,"ää");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['A','A',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s81){
        r=m=1;   // Line 193
        k.KDC(3,t);
        k.KO(-1,t,"ÄÄ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['A','A',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s82){
        r=m=1;   // Line 194
        k.KDC(3,t);
        k.KO(-1,t,"ÄÄ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['e','e',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s83){
        r=m=1;   // Line 195
        k.KDC(3,t);
        k.KO(-1,t,"ëë");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['e','e',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s84){
        r=m=1;   // Line 196
        k.KDC(3,t);
        k.KO(-1,t,"ëë");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['E','E',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s85){
        r=m=1;   // Line 197
        k.KDC(3,t);
        k.KO(-1,t,"ËË");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['E','E',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s86){
        r=m=1;   // Line 198
        k.KDC(3,t);
        k.KO(-1,t,"ËË");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['i','i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s87){
        r=m=1;   // Line 199
        k.KDC(3,t);
        k.KO(-1,t,"ïï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['i','i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s88){
        r=m=1;   // Line 200
        k.KDC(3,t);
        k.KO(-1,t,"ïï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['I','I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s89){
        r=m=1;   // Line 201
        k.KDC(3,t);
        k.KO(-1,t,"ÏÏ");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['I','I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s90){
        r=m=1;   // Line 202
        k.KDC(3,t);
        k.KO(-1,t,"ÏÏ");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['o','o',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s91){
        r=m=1;   // Line 203
        k.KDC(3,t);
        k.KO(-1,t,"öö");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['o','o',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s92){
        r=m=1;   // Line 204
        k.KDC(3,t);
        k.KO(-1,t,"öö");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['O','O',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s93){
        r=m=1;   // Line 205
        k.KDC(3,t);
        k.KO(-1,t,"ÖÖ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['O','O',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s94){
        r=m=1;   // Line 206
        k.KDC(3,t);
        k.KO(-1,t,"ÖÖ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(2,t,['a','a'])&&this.s_nfc===this.s63){
        r=m=1;   // Line 166
        k.KDC(2,t);
        k.KO(-1,t,"ää");
      }
      else if(k.KFCM(2,t,['a','a'])&&this.s_nfc===this.s64){
        r=m=1;   // Line 167
        k.KDC(2,t);
        k.KO(-1,t,"ää");
      }
      else if(k.KFCM(2,t,['A','A'])&&this.s_nfc===this.s65){
        r=m=1;   // Line 168
        k.KDC(2,t);
        k.KO(-1,t,"ÄÄ");
      }
      else if(k.KFCM(2,t,['A','A'])&&this.s_nfc===this.s66){
        r=m=1;   // Line 169
        k.KDC(2,t);
        k.KO(-1,t,"ÄÄ");
      }
      else if(k.KFCM(2,t,['e','e'])&&this.s_nfc===this.s67){
        r=m=1;   // Line 170
        k.KDC(2,t);
        k.KO(-1,t,"ëë");
      }
      else if(k.KFCM(2,t,['e','e'])&&this.s_nfc===this.s68){
        r=m=1;   // Line 171
        k.KDC(2,t);
        k.KO(-1,t,"ëë");
      }
      else if(k.KFCM(2,t,['E','E'])&&this.s_nfc===this.s69){
        r=m=1;   // Line 172
        k.KDC(2,t);
        k.KO(-1,t,"ËË");
      }
      else if(k.KFCM(2,t,['E','E'])&&this.s_nfc===this.s70){
        r=m=1;   // Line 173
        k.KDC(2,t);
        k.KO(-1,t,"ËË");
      }
      else if(k.KFCM(2,t,['i','i'])&&this.s_nfc===this.s71){
        r=m=1;   // Line 174
        k.KDC(2,t);
        k.KO(-1,t,"ïï");
      }
      else if(k.KFCM(2,t,['i','i'])&&this.s_nfc===this.s72){
        r=m=1;   // Line 175
        k.KDC(2,t);
        k.KO(-1,t,"ïï");
      }
      else if(k.KFCM(2,t,['I','I'])&&this.s_nfc===this.s73){
        r=m=1;   // Line 176
        k.KDC(2,t);
        k.KO(-1,t,"ÏÏ");
      }
      else if(k.KFCM(2,t,['I','I'])&&this.s_nfc===this.s74){
        r=m=1;   // Line 177
        k.KDC(2,t);
        k.KO(-1,t,"ÏÏ");
      }
      else if(k.KFCM(2,t,['o','o'])&&this.s_nfc===this.s75){
        r=m=1;   // Line 178
        k.KDC(2,t);
        k.KO(-1,t,"öö");
      }
      else if(k.KFCM(2,t,['o','o'])&&this.s_nfc===this.s76){
        r=m=1;   // Line 179
        k.KDC(2,t);
        k.KO(-1,t,"öö");
      }
      else if(k.KFCM(2,t,['O','O'])&&this.s_nfc===this.s77){
        r=m=1;   // Line 180
        k.KDC(2,t);
        k.KO(-1,t,"ÖÖ");
      }
      else if(k.KFCM(2,t,['O','O'])&&this.s_nfc===this.s78){
        r=m=1;   // Line 181
        k.KDC(2,t);
        k.KO(-1,t,"ÖÖ");
      }
      else if(k.KFCM(3,t,['ɛ','ɛ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 207
        k.KDC(3,t);
        k.KO(-1,t,"ɛ̈ɛ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['Ɛ','Ɛ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 208
        k.KDC(3,t);
        k.KO(-1,t,"Ɛ̈Ɛ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['ɔ','ɔ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 209
        k.KDC(3,t);
        k.KO(-1,t,"ɔ̈ɔ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['Ɔ','Ɔ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 210
        k.KDC(3,t);
        k.KO(-1,t,"Ɔ̈Ɔ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBaseSub},{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s95){
        r=m=1;   // Line 212
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisBaseSub,1,t);
        k.KO(-1,t,"̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBaseSub},{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s96){
        r=m=1;   // Line 213
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(2,t,['i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s97){
        r=m=1;   // Line 214
        k.KDC(2,t);
        k.KO(-1,t,"ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s98){
        r=m=1;   // Line 215
        k.KDC(2,t);
        k.KO(-1,t,"ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s99){
        r=m=1;   // Line 216
        k.KDC(2,t);
        k.KO(-1,t,"Ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s100){
        r=m=1;   // Line 217
        k.KDC(2,t);
        k.KO(-1,t,"Ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['ɛ','ɛ'])){
        r=m=1;   // Line 182
        k.KDC(2,t);
        k.KO(-1,t,"ɛ̈ɛ̈");
      }
      else if(k.KFCM(2,t,['Ɛ','Ɛ'])){
        r=m=1;   // Line 183
        k.KDC(2,t);
        k.KO(-1,t,"Ɛ̈Ɛ̈");
      }
      else if(k.KFCM(2,t,['ɔ','ɔ'])){
        r=m=1;   // Line 184
        k.KDC(2,t);
        k.KO(-1,t,"ɔ̈ɔ̈");
      }
      else if(k.KFCM(2,t,['Ɔ','Ɔ'])){
        r=m=1;   // Line 185
        k.KDC(2,t);
        k.KO(-1,t,"Ɔ̈Ɔ̈");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisExtendedBase},{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 219
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,1,t);
        k.KO(-1,t,"̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisBase}])&&this.s_nfc===this.s101){
        r=m=1;   // Line 225
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisBase,1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisBase}])&&this.s_nfc===this.s102){
        r=m=1;   // Line 226
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisExtendedBase}])){
        r=m=1;   // Line 228
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,['u'])){
        r=m=1;   // Line 278
        k.KDC(1,t);
        k.KO(-1,t,"u");
      }
      else if(k.KFCM(1,t,['U'])){
        r=m=1;   // Line 279
        k.KDC(1,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x115)) {
      if(this.s_nfc===this.s103&&k.KIFS(31,this.s104,t)){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"Ï");
      }
      else if(this.s_nfc===this.s105&&k.KIFS(31,this.s106,t)){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"Ï");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x114)) {
      if(this.s_nfc===this.s103&&k.KIFS(31,this.s104,t)){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"ï");
      }
      else if(this.s_nfc===this.s105&&k.KIFS(31,this.s106,t)){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"ï");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x113)) {
      if(this.s_nfc===this.s103&&k.KIFS(31,this.s104,t)){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"Ë");
      }
      else if(this.s_nfc===this.s105&&k.KIFS(31,this.s106,t)){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"Ë");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x117)) {
      if(this.s_nfc===this.s103&&k.KIFS(31,this.s104,t)){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"Ö");
      }
      else if(this.s_nfc===this.s105&&k.KIFS(31,this.s106,t)){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"Ö");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x110)) {
      if(this.s_nfc===this.s103&&k.KIFS(31,this.s104,t)){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"ä");
      }
      else if(this.s_nfc===this.s105&&k.KIFS(31,this.s106,t)){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"ä");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x111)) {
      if(this.s_nfc===this.s103&&k.KIFS(31,this.s104,t)){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"Ä");
      }
      else if(this.s_nfc===this.s105&&k.KIFS(31,this.s106,t)){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"Ä");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x112)) {
      if(this.s_nfc===this.s103&&k.KIFS(31,this.s104,t)){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"ë");
      }
      else if(this.s_nfc===this.s105&&k.KIFS(31,this.s106,t)){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"ë");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x116)) {
      if(this.s_nfc===this.s103&&k.KIFS(31,this.s104,t)){
        r=m=1;   // Line 230
        k.KDC(0,t);
        k.KO(-1,t,"ö");
      }
      else if(this.s_nfc===this.s105&&k.KIFS(31,this.s106,t)){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"ö");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x118)) {
      if(this.s_nfc===this.s107&&k.KIFS(31,this.s108,t)){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"ää");
      }
      else if(this.s_nfc===this.s109&&k.KIFS(31,this.s110,t)){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"ää");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x119)) {
      if(this.s_nfc===this.s107&&k.KIFS(31,this.s108,t)){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"ÄÄ");
      }
      else if(this.s_nfc===this.s109&&k.KIFS(31,this.s110,t)){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"ÄÄ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11A)) {
      if(this.s_nfc===this.s107&&k.KIFS(31,this.s108,t)){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"ëë");
      }
      else if(this.s_nfc===this.s109&&k.KIFS(31,this.s110,t)){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"ëë");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11B)) {
      if(this.s_nfc===this.s107&&k.KIFS(31,this.s108,t)){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"ËË");
      }
      else if(this.s_nfc===this.s109&&k.KIFS(31,this.s110,t)){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"ËË");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11C)) {
      if(this.s_nfc===this.s107&&k.KIFS(31,this.s108,t)){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"ïï");
      }
      else if(this.s_nfc===this.s109&&k.KIFS(31,this.s110,t)){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"ïï");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11D)) {
      if(this.s_nfc===this.s107&&k.KIFS(31,this.s108,t)){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"ÏÏ");
      }
      else if(this.s_nfc===this.s109&&k.KIFS(31,this.s110,t)){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"ÏÏ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11E)) {
      if(this.s_nfc===this.s107&&k.KIFS(31,this.s108,t)){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"öö");
      }
      else if(this.s_nfc===this.s109&&k.KIFS(31,this.s110,t)){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"öö");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11F)) {
      if(this.s_nfc===this.s107&&k.KIFS(31,this.s108,t)){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"ÖÖ");
      }
      else if(this.s_nfc===this.s109&&k.KIFS(31,this.s110,t)){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"ÖÖ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_S /* 0x53 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_S /* 0x53 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_X /* 0x58 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Z /* 0x5A */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_F /* 0x46 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_C /* 0x43 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"©");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_E /* 0x45 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_4 /* 0x34 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"–");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"—");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"‘");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"’");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"”");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"…");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_F /* 0x46 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Z /* 0x5A */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_X /* 0x58 */)) {
      if(!k.KIFS(31,this.s60,t)){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Q /* 0x51 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_S /* 0x53 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_S /* 0x53 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_X /* 0x58 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_X /* 0x58 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Z /* 0x5A */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_Z /* 0x5A */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"©");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_E /* 0x45 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_4 /* 0x34 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"–");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"—");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"‘");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"’");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"”");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"…");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4014 */, keyCodes.K_F /* 0x46 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_F /* 0x46 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_Q /* 0x51 */)) {
      if(k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x101)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x102)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x103)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x103)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x104)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x104)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x105)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"©");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x106)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x107)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x108)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"–");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x109)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"—");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10A)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"‘");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10B)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"’");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10C)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10D)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"”");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10E)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"…");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x100)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x102)) {
      if(k.KIFS(31,this.s62,t)){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x120)) {
      if(k.KIFS(31,this.s111,t)){
        r=m=1;   // Line 234
        k.KDC(0,t);
        k.KO(-1,t,"ɛ̈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x120)) {
      if(k.KIFS(31,this.s112,t)){
        r=m=1;   // Line 235
        k.KDC(0,t);
        k.KO(-1,t,"Ɛ̈");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x121)) {
      if(k.KIFS(31,this.s113,t)){
        r=m=1;   // Line 236
        k.KDC(0,t);
        k.KO(-1,t,"ɔ̈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x121)) {
      if(k.KIFS(31,this.s114,t)){
        r=m=1;   // Line 237
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ̈");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x122)) {
      if(k.KIFS(31,this.s115,t)){
        r=m=1;   // Line 238
        k.KDC(0,t);
        k.KO(-1,t,"ɛ̈ɛ̈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x122)) {
      if(k.KIFS(31,this.s116,t)){
        r=m=1;   // Line 239
        k.KDC(0,t);
        k.KO(-1,t,"Ɛ̈Ɛ̈");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x123)) {
      if(k.KIFS(31,this.s117,t)){
        r=m=1;   // Line 240
        k.KDC(0,t);
        k.KO(-1,t,"ɔ̈ɔ̈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x123)) {
      if(k.KIFS(31,this.s118,t)){
        r=m=1;   // Line 241
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ̈Ɔ̈");
      }
    }
    else if(k.KKM(e, modCodes.LALT | modCodes.VIRTUAL_KEY /* 0x4004 */, keyCodes.K_O /* 0x4F */)) {
      if(k.KIFS(31,this.s135,t)){
        r=m=1;   // Line 286
        k.KDC(0,t);
        k.KO(-1,t,"◌̈");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP3 /* 0x63 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP4 /* 0x64 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP2 /* 0x62 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP9 /* 0x69 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP8 /* 0x68 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP5 /* 0x65 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP7 /* 0x67 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP1 /* 0x61 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP6 /* 0x66 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP0 /* 0x60 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 285
        k.KDC(0,t);
        k.KO(-1,t,"◌̈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(k.KFCM(3,t,['a','a',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s79){
        r=m=1;   // Line 191
        k.KDC(3,t);
        k.KO(-1,t,"ää");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['a','a',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s80){
        r=m=1;   // Line 192
        k.KDC(3,t);
        k.KO(-1,t,"ää");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['A','A',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s81){
        r=m=1;   // Line 193
        k.KDC(3,t);
        k.KO(-1,t,"ÄÄ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['A','A',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s82){
        r=m=1;   // Line 194
        k.KDC(3,t);
        k.KO(-1,t,"ÄÄ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['e','e',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s83){
        r=m=1;   // Line 195
        k.KDC(3,t);
        k.KO(-1,t,"ëë");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['e','e',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s84){
        r=m=1;   // Line 196
        k.KDC(3,t);
        k.KO(-1,t,"ëë");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['E','E',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s85){
        r=m=1;   // Line 197
        k.KDC(3,t);
        k.KO(-1,t,"ËË");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['E','E',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s86){
        r=m=1;   // Line 198
        k.KDC(3,t);
        k.KO(-1,t,"ËË");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['i','i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s87){
        r=m=1;   // Line 199
        k.KDC(3,t);
        k.KO(-1,t,"ïï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['i','i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s88){
        r=m=1;   // Line 200
        k.KDC(3,t);
        k.KO(-1,t,"ïï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['I','I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s89){
        r=m=1;   // Line 201
        k.KDC(3,t);
        k.KO(-1,t,"ÏÏ");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['I','I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s90){
        r=m=1;   // Line 202
        k.KDC(3,t);
        k.KO(-1,t,"ÏÏ");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['o','o',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s91){
        r=m=1;   // Line 203
        k.KDC(3,t);
        k.KO(-1,t,"öö");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['o','o',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s92){
        r=m=1;   // Line 204
        k.KDC(3,t);
        k.KO(-1,t,"öö");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['O','O',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s93){
        r=m=1;   // Line 205
        k.KDC(3,t);
        k.KO(-1,t,"ÖÖ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['O','O',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s94){
        r=m=1;   // Line 206
        k.KDC(3,t);
        k.KO(-1,t,"ÖÖ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(2,t,['a','a'])&&this.s_nfc===this.s63){
        r=m=1;   // Line 166
        k.KDC(2,t);
        k.KO(-1,t,"ää");
      }
      else if(k.KFCM(2,t,['a','a'])&&this.s_nfc===this.s64){
        r=m=1;   // Line 167
        k.KDC(2,t);
        k.KO(-1,t,"ää");
      }
      else if(k.KFCM(2,t,['A','A'])&&this.s_nfc===this.s65){
        r=m=1;   // Line 168
        k.KDC(2,t);
        k.KO(-1,t,"ÄÄ");
      }
      else if(k.KFCM(2,t,['A','A'])&&this.s_nfc===this.s66){
        r=m=1;   // Line 169
        k.KDC(2,t);
        k.KO(-1,t,"ÄÄ");
      }
      else if(k.KFCM(2,t,['e','e'])&&this.s_nfc===this.s67){
        r=m=1;   // Line 170
        k.KDC(2,t);
        k.KO(-1,t,"ëë");
      }
      else if(k.KFCM(2,t,['e','e'])&&this.s_nfc===this.s68){
        r=m=1;   // Line 171
        k.KDC(2,t);
        k.KO(-1,t,"ëë");
      }
      else if(k.KFCM(2,t,['E','E'])&&this.s_nfc===this.s69){
        r=m=1;   // Line 172
        k.KDC(2,t);
        k.KO(-1,t,"ËË");
      }
      else if(k.KFCM(2,t,['E','E'])&&this.s_nfc===this.s70){
        r=m=1;   // Line 173
        k.KDC(2,t);
        k.KO(-1,t,"ËË");
      }
      else if(k.KFCM(2,t,['i','i'])&&this.s_nfc===this.s71){
        r=m=1;   // Line 174
        k.KDC(2,t);
        k.KO(-1,t,"ïï");
      }
      else if(k.KFCM(2,t,['i','i'])&&this.s_nfc===this.s72){
        r=m=1;   // Line 175
        k.KDC(2,t);
        k.KO(-1,t,"ïï");
      }
      else if(k.KFCM(2,t,['I','I'])&&this.s_nfc===this.s73){
        r=m=1;   // Line 176
        k.KDC(2,t);
        k.KO(-1,t,"ÏÏ");
      }
      else if(k.KFCM(2,t,['I','I'])&&this.s_nfc===this.s74){
        r=m=1;   // Line 177
        k.KDC(2,t);
        k.KO(-1,t,"ÏÏ");
      }
      else if(k.KFCM(2,t,['o','o'])&&this.s_nfc===this.s75){
        r=m=1;   // Line 178
        k.KDC(2,t);
        k.KO(-1,t,"öö");
      }
      else if(k.KFCM(2,t,['o','o'])&&this.s_nfc===this.s76){
        r=m=1;   // Line 179
        k.KDC(2,t);
        k.KO(-1,t,"öö");
      }
      else if(k.KFCM(2,t,['O','O'])&&this.s_nfc===this.s77){
        r=m=1;   // Line 180
        k.KDC(2,t);
        k.KO(-1,t,"ÖÖ");
      }
      else if(k.KFCM(2,t,['O','O'])&&this.s_nfc===this.s78){
        r=m=1;   // Line 181
        k.KDC(2,t);
        k.KO(-1,t,"ÖÖ");
      }
      else if(k.KFCM(3,t,['ɛ','ɛ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 207
        k.KDC(3,t);
        k.KO(-1,t,"ɛ̈ɛ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['Ɛ','Ɛ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 208
        k.KDC(3,t);
        k.KO(-1,t,"Ɛ̈Ɛ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['ɔ','ɔ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 209
        k.KDC(3,t);
        k.KO(-1,t,"ɔ̈ɔ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['Ɔ','Ɔ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 210
        k.KDC(3,t);
        k.KO(-1,t,"Ɔ̈Ɔ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBaseSub},{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s95){
        r=m=1;   // Line 212
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisBaseSub,1,t);
        k.KO(-1,t,"̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBaseSub},{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s96){
        r=m=1;   // Line 213
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(2,t,['i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s97){
        r=m=1;   // Line 214
        k.KDC(2,t);
        k.KO(-1,t,"ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s98){
        r=m=1;   // Line 215
        k.KDC(2,t);
        k.KO(-1,t,"ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s99){
        r=m=1;   // Line 216
        k.KDC(2,t);
        k.KO(-1,t,"Ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s100){
        r=m=1;   // Line 217
        k.KDC(2,t);
        k.KO(-1,t,"Ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['ɛ','ɛ'])){
        r=m=1;   // Line 182
        k.KDC(2,t);
        k.KO(-1,t,"ɛ̈ɛ̈");
      }
      else if(k.KFCM(2,t,['Ɛ','Ɛ'])){
        r=m=1;   // Line 183
        k.KDC(2,t);
        k.KO(-1,t,"Ɛ̈Ɛ̈");
      }
      else if(k.KFCM(2,t,['ɔ','ɔ'])){
        r=m=1;   // Line 184
        k.KDC(2,t);
        k.KO(-1,t,"ɔ̈ɔ̈");
      }
      else if(k.KFCM(2,t,['Ɔ','Ɔ'])){
        r=m=1;   // Line 185
        k.KDC(2,t);
        k.KO(-1,t,"Ɔ̈Ɔ̈");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisExtendedBase},{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 219
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,1,t);
        k.KO(-1,t,"̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisBase}])&&this.s_nfc===this.s101){
        r=m=1;   // Line 225
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisBase,1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisBase}])&&this.s_nfc===this.s102){
        r=m=1;   // Line 226
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisExtendedBase}])){
        r=m=1;   // Line 228
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,['u'])){
        r=m=1;   // Line 278
        k.KDC(1,t);
        k.KO(-1,t,"u");
      }
      else if(k.KFCM(1,t,['U'])){
        r=m=1;   // Line 279
        k.KDC(1,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(k.KFCM(3,t,['a','a',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s79){
        r=m=1;   // Line 191
        k.KDC(3,t);
        k.KO(-1,t,"ää");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['a','a',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s80){
        r=m=1;   // Line 192
        k.KDC(3,t);
        k.KO(-1,t,"ää");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['A','A',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s81){
        r=m=1;   // Line 193
        k.KDC(3,t);
        k.KO(-1,t,"ÄÄ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['A','A',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s82){
        r=m=1;   // Line 194
        k.KDC(3,t);
        k.KO(-1,t,"ÄÄ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['e','e',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s83){
        r=m=1;   // Line 195
        k.KDC(3,t);
        k.KO(-1,t,"ëë");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['e','e',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s84){
        r=m=1;   // Line 196
        k.KDC(3,t);
        k.KO(-1,t,"ëë");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['E','E',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s85){
        r=m=1;   // Line 197
        k.KDC(3,t);
        k.KO(-1,t,"ËË");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['E','E',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s86){
        r=m=1;   // Line 198
        k.KDC(3,t);
        k.KO(-1,t,"ËË");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['i','i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s87){
        r=m=1;   // Line 199
        k.KDC(3,t);
        k.KO(-1,t,"ïï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['i','i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s88){
        r=m=1;   // Line 200
        k.KDC(3,t);
        k.KO(-1,t,"ïï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['I','I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s89){
        r=m=1;   // Line 201
        k.KDC(3,t);
        k.KO(-1,t,"ÏÏ");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['I','I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s90){
        r=m=1;   // Line 202
        k.KDC(3,t);
        k.KO(-1,t,"ÏÏ");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,3,t);
      }
      else if(k.KFCM(3,t,['o','o',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s91){
        r=m=1;   // Line 203
        k.KDC(3,t);
        k.KO(-1,t,"öö");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['o','o',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s92){
        r=m=1;   // Line 204
        k.KDC(3,t);
        k.KO(-1,t,"öö");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['O','O',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s93){
        r=m=1;   // Line 205
        k.KDC(3,t);
        k.KO(-1,t,"ÖÖ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['O','O',{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s94){
        r=m=1;   // Line 206
        k.KDC(3,t);
        k.KO(-1,t,"ÖÖ");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(2,t,['a','a'])&&this.s_nfc===this.s63){
        r=m=1;   // Line 166
        k.KDC(2,t);
        k.KO(-1,t,"ää");
      }
      else if(k.KFCM(2,t,['a','a'])&&this.s_nfc===this.s64){
        r=m=1;   // Line 167
        k.KDC(2,t);
        k.KO(-1,t,"ää");
      }
      else if(k.KFCM(2,t,['A','A'])&&this.s_nfc===this.s65){
        r=m=1;   // Line 168
        k.KDC(2,t);
        k.KO(-1,t,"ÄÄ");
      }
      else if(k.KFCM(2,t,['A','A'])&&this.s_nfc===this.s66){
        r=m=1;   // Line 169
        k.KDC(2,t);
        k.KO(-1,t,"ÄÄ");
      }
      else if(k.KFCM(2,t,['e','e'])&&this.s_nfc===this.s67){
        r=m=1;   // Line 170
        k.KDC(2,t);
        k.KO(-1,t,"ëë");
      }
      else if(k.KFCM(2,t,['e','e'])&&this.s_nfc===this.s68){
        r=m=1;   // Line 171
        k.KDC(2,t);
        k.KO(-1,t,"ëë");
      }
      else if(k.KFCM(2,t,['E','E'])&&this.s_nfc===this.s69){
        r=m=1;   // Line 172
        k.KDC(2,t);
        k.KO(-1,t,"ËË");
      }
      else if(k.KFCM(2,t,['E','E'])&&this.s_nfc===this.s70){
        r=m=1;   // Line 173
        k.KDC(2,t);
        k.KO(-1,t,"ËË");
      }
      else if(k.KFCM(2,t,['i','i'])&&this.s_nfc===this.s71){
        r=m=1;   // Line 174
        k.KDC(2,t);
        k.KO(-1,t,"ïï");
      }
      else if(k.KFCM(2,t,['i','i'])&&this.s_nfc===this.s72){
        r=m=1;   // Line 175
        k.KDC(2,t);
        k.KO(-1,t,"ïï");
      }
      else if(k.KFCM(2,t,['I','I'])&&this.s_nfc===this.s73){
        r=m=1;   // Line 176
        k.KDC(2,t);
        k.KO(-1,t,"ÏÏ");
      }
      else if(k.KFCM(2,t,['I','I'])&&this.s_nfc===this.s74){
        r=m=1;   // Line 177
        k.KDC(2,t);
        k.KO(-1,t,"ÏÏ");
      }
      else if(k.KFCM(2,t,['o','o'])&&this.s_nfc===this.s75){
        r=m=1;   // Line 178
        k.KDC(2,t);
        k.KO(-1,t,"öö");
      }
      else if(k.KFCM(2,t,['o','o'])&&this.s_nfc===this.s76){
        r=m=1;   // Line 179
        k.KDC(2,t);
        k.KO(-1,t,"öö");
      }
      else if(k.KFCM(2,t,['O','O'])&&this.s_nfc===this.s77){
        r=m=1;   // Line 180
        k.KDC(2,t);
        k.KO(-1,t,"ÖÖ");
      }
      else if(k.KFCM(2,t,['O','O'])&&this.s_nfc===this.s78){
        r=m=1;   // Line 181
        k.KDC(2,t);
        k.KO(-1,t,"ÖÖ");
      }
      else if(k.KFCM(3,t,['ɛ','ɛ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 207
        k.KDC(3,t);
        k.KO(-1,t,"ɛ̈ɛ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['Ɛ','Ɛ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 208
        k.KDC(3,t);
        k.KO(-1,t,"Ɛ̈Ɛ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['ɔ','ɔ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 209
        k.KDC(3,t);
        k.KO(-1,t,"ɔ̈ɔ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(3,t,['Ɔ','Ɔ',{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 210
        k.KDC(3,t);
        k.KO(-1,t,"Ɔ̈Ɔ̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,3,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBaseSub},{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s95){
        r=m=1;   // Line 212
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisBaseSub,1,t);
        k.KO(-1,t,"̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisBaseSub},{t:'a',a:this.s_nonDiaeresisFinal}])&&this.s_nfc===this.s96){
        r=m=1;   // Line 213
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(2,t,['i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s97){
        r=m=1;   // Line 214
        k.KDC(2,t);
        k.KO(-1,t,"ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['i',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s98){
        r=m=1;   // Line 215
        k.KDC(2,t);
        k.KO(-1,t,"ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s99){
        r=m=1;   // Line 216
        k.KDC(2,t);
        k.KO(-1,t,"Ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['I',{t:'a',a:this.s_nonDiaeresisFinalSub}])&&this.s_nfc===this.s100){
        r=m=1;   // Line 217
        k.KDC(2,t);
        k.KO(-1,t,"Ï");
        k.KIO(-1,this.s_nonDiaeresisFinalSub,2,t);
      }
      else if(k.KFCM(2,t,['ɛ','ɛ'])){
        r=m=1;   // Line 182
        k.KDC(2,t);
        k.KO(-1,t,"ɛ̈ɛ̈");
      }
      else if(k.KFCM(2,t,['Ɛ','Ɛ'])){
        r=m=1;   // Line 183
        k.KDC(2,t);
        k.KO(-1,t,"Ɛ̈Ɛ̈");
      }
      else if(k.KFCM(2,t,['ɔ','ɔ'])){
        r=m=1;   // Line 184
        k.KDC(2,t);
        k.KO(-1,t,"ɔ̈ɔ̈");
      }
      else if(k.KFCM(2,t,['Ɔ','Ɔ'])){
        r=m=1;   // Line 185
        k.KDC(2,t);
        k.KO(-1,t,"Ɔ̈Ɔ̈");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_diaeresisExtendedBase},{t:'a',a:this.s_nonDiaeresisFinal}])){
        r=m=1;   // Line 219
        k.KDC(2,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,1,t);
        k.KO(-1,t,"̈");
        k.KIO(-1,this.s_nonDiaeresisFinal,2,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisBase}])&&this.s_nfc===this.s101){
        r=m=1;   // Line 225
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisBase,1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisBase}])&&this.s_nfc===this.s102){
        r=m=1;   // Line 226
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisChar,1,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_diaeresisExtendedBase}])){
        r=m=1;   // Line 228
        k.KDC(1,t);
        k.KIO(-1,this.s_diaeresisExtendedBase,1,t);
        k.KO(-1,t,"̈");
      }
      else if(k.KFCM(1,t,['u'])){
        r=m=1;   // Line 278
        k.KDC(1,t);
        k.KO(-1,t,"u");
      }
      else if(k.KFCM(1,t,['U'])){
        r=m=1;   // Line 279
        k.KDC(1,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"Ɣ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"M");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"Ŋ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"Ɛ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"ɣ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"ŋ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"ɛ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"ɔ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    return r;
  };
}
