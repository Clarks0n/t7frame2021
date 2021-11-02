export const LARSMT = {
	"keyMoves": [
		"1, 2",
		"2, 1",
		"uf+4",
		"df+1",
		"d+2",
		"db+2, 1",
		"f, f+1+2",
		"df+4",
		"FC df+2",
		"d+4",
		"FC df+1+2"
	],
	"standingPunishers": [
		[
			"10F",
			"2, 1",
			"1, 2"
		],
		[
			"12F",
			"f+2, 4"
		],
		[
			"13F",
			"f+1+4"
		],
		[
			"14F",
			"f, b+2, 1"
		],
		[
			"15F",
			"f+1+2"
		],
		[
			"16F",
			"uf+3",
			"df+2, 1"
		],
		[
			"23F",
			"uf, n, 4"
		]
	],
	"crouchingPunishers": [
		[
			"10F",
			"FC d+1"
		],
		[
			"11F",
			"ws+4"
		],
		[
			"13F",
			"ws+2, 1"
		],
		[
			"15F",
			"ws+1",
			"ws+1, f"
		],
		[
			"16F",
			"uf+3"
		],
		[
			"23F",
			"uf, n, 4"
		]
	],
	"whiffPunishers": [
		"2, 1",
		"b+3, 4",
		"f, b+2, 1"
	],
	"standardCombos": [
		[
			"f+3,2  df+1  df+2,1  S!  f+3,1  b+3~F+1",
			"uf+4"
		],
		[
			"f+3,2  df+1  df+2,1  S!  f+3,1  b+3~F+1",
			"f, b+2, 1"
		],
		[
			"df+2  db+2,1  df+2,1  S!  f+3,1  b+3~F+1",
			"f+1+2"
		],
		[
			"4  S!  f+3,2  df+1  2  b+3~F+3+4",
			"f, f+2"
		],
		[
			"4  S!  f+3,2  df+1  2  b+3~F+3+4",
			"ws+1"
		],
		[
			"(side switch) SEN 3  df+2,1  S!  f+3,1  db+2~F+1",
			"f, f+2~F"
		],
		[
			"(side switch) SEN 3  df+2,1  S!  f+3,1  db+2~F+1",
			"ws+~F"
		],
		[
			"b+4  db+2,1  df+2,1  S!  f+3,1  db+2~F+1",
			"uf, n, 4"
		],
		[
			"ws+4  df+2,1  S!  f+3,1  b+3~F+1",
			"uf+3"
		],
		[
			"S!  f+3,2  df+1  2  b+3~F+3+4",
			"df+2, 1"
		],
		[
			"df+2  db+2,1  df+2,1  S!  f+3,1  b+3~F+1",
			"SEN 3"
		],
		[
			"S!  f+3,2  df+1  2  b+3~F+3+4",
			"SEN 4"
		],
		[
			"(crouch cancel)  S!  f+3,2  df+1  2  b+3~F+3+4",
			"DEN 1+2"
		],
		[
			"f+3,2  df+1  df+2,1  S!  f+3,1  b+3~F+1",
			"CH FC df+2"
		],
		[
			"f+3,2  df+1  df+2,1  S!  f+3,1  b+3~F+1",
			"CH (b+2), 1"
		],
		[
			"df+2  db+2,1  df+2,1  S!  f+3,1  b+3~F+1",
			"CH (ws+2), 1"
		],
		[
			"b+4  db+2,1  df+2,1  S!  f+3,1  db+2~F+1",
			"CH SEN df+1"
		],
		[
			"f+3,2  df+1  df+2,1  S!  f+3,1  b+3~F+1",
			"CH DEN 2"
		],
		[
			"DEN 1  df+1  2  df+2,1  S!  f+3,1  b+3~F+1",
			"RAGE DRIVE 1"
		],
		[
			"(1st hit must whiff)  UF,n,4  db+2,1  df+2,1  S!  f+3,1  b+3~F+1",
			"RAGE DRIVE 2"
		],
		[
			"ws+4  df+2,1  S!  f+3,1  b+3~F+1",
			"WAKE UP 3"
		],
		[
			"df+2  db+2,1  df+2,1  S!  f+3,1  b+3~F+1",
			"LOW PARRY"
		]
	],
	"smallCombos": [
		[
			"f+1+4",
			"RAGE DRIVE"
		],
		[
			"d+3+4",
			"CH d+2",
			"SS+ 2"
		],
		[
			"d+3",
			"df+1+2"
		],
		[
			"f,f+3+4",
			"CH uf+3+4, 1"
		]
	],
	"comboEnders": [
		[
			"WALL CARRY",
			"db+2,1",
			"db+2,3",
			"f+3,2"
		],
		[
			"WALL BREAK",
			"DEN 1,2",
			"SEN 1",
			"f+1+4"
		],
		[
			"FLOOR BREAK",
			"SEN df+1",
			"f,b+2,1",
			"d+2"
		],
		[
			"DAMAGE",
			"RAGE DRIVE 2",
			"RAGE ART",
			"wr+2+4"
		]
	],
	"wallCombos": [
		[
			"GENERAL",
			"everyone",
			"df+1  db+2,1  f+1+4"
		],
		[
			"",
			"low wall splat",
			"db+2,1  f+1+4"
		],
		[
			"",
			"bears and Gigas",
			"df+1  2  2,1,4"
		],
		[
			"WALL GRAB",
			"everyone",
			"wr+2+4 (or SEN 2+3)  f+1+4"
		]
	]
}