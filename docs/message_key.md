# message key
```
base64url: -0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz
```
## first group (31 available bits, 4 and 2 characters):
```
domain id ( did )  -  23 bits -  8,388,608 domains 
channel id ( cid ) -  08 bits -  256 channels per domain
```
```
min : 0000 0000 0000 0000 0000 0000 | 0000 0000   =   AAAA | AA
max : 0111 1111 1111 1111 1111 1111 | 1111 1111   =   f___ | _w
```

## 2nd group ( 31 available bits, 4 and 2 characters ) 
```
thread id ( thid ) -  23 bits - 8,388,608 unique threads (visitors) per channel
type id ( tid )    -  08 bits - 256 message types
```
```
min : 0000 0000 0000 0000 0000 0000 | 0000 0000   =   AAAA | AA
max : 0111 1111 1111 1111 1111 1111 | 1111 1111   =   f___ | _w
```

## 3rd group ( 48 bits,  8 characters )
```
timestamp ( ts )   - 48 bit milliseconds since unix epoch
```
```
min: 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000   =   AAAAAAAA
max: 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111   =   ________
```
Example string:
```
did  - 0000 0000 0000 0000 1010 0101 ( dec: 42240 ) = AACl
cid  - 0000 0011                     ( dec:     3 ) = Aw
thid - 0000 0000 0000 0000 0101 1010 ( dec: 23040 ) = AABa
tid  - 0000 0001                     ( dec:     1 ) = AQ
ts   - 0001 0101 0101 0101 0111 1101 0101 0001 0000 0101 0101 0101 ( dec: big ) = FVV9UQVV

Complete String: AAClAwAABaAQFVV9UQVV
                 └┰─┘└┤└─┰┘└┤└─┰────┘
                 did  │  │  │  ts
                  cid ┘  │  └ tid
                        thid
```

## Message Key Parser
```js

function base64(value,digis) {
	if ( typeof(value) === 'number') {
		if (digis) {
			return base64.getChars(value, '').padStart(digis,'A');
		} else {
			return base64.getChars(value, '');
		}
	}
	if (typeof(value) === 'string') {
		if (value === '') { return NaN; }
		return value.split('').reverse().reduce(function(prev, cur, i) {
			return prev + base64.chars.indexOf(cur) * Math.pow(64, i);
		}, 0);
	}
}
base64.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
base64.getChars = function(num, res) {
	var mod = num % 64,
	remaining = Math.floor(num / 64),
	chars = base64.chars.charAt(mod) + res;
	if (remaining <= 0) { return chars; }
	return base64.getChars(remaining, chars);
};

function parsemkey(base64safe) {
	// NOTE: returns object
	// TODO: validate base64safe
	return {
		did:  base64( base64safe.slice(0,4) ),
		cid:  base64( base64safe.slice(4,6) ),
		thid: base64( base64safe.slice(6,10) ),
		tid:  base64( base64safe.slice(10,12) ),
		ts:   base64( base64safe.slice(12,20) )
	};
}

function stringifymkey(did,cid,thid,tid,ts) {
	// NOTE: returns base64 mkey string
	return base64(did,4) + base64(cid,2) + base64(thid,4) + base64(tid,2) + base64(ts,8);
}
```

## RFC 4648 Base64 Safe Url
```
 0 A
 1 B
 2 C
 3 D
 4 E
 5 F
 6 G
 7 H
 8 I
 9 J
10 K
11 L
12 M
13 N
14 O 
15 P 
16 Q
17 R
18 S
19 T
20 U
21 V
22 W
23 X
24 Y
25 Z
26 a
27 b
28 c
29 d
30 e
31 f
32 g
33 h
17 R
18 S
19 T
20 U
21 V
22 W
23 X
24 Y
25 Z
26 a
27 b
28 c
29 d
30 e
31 f
32 g
33 h
17 R
18 S
19 T
20 U
21 V
22 W
23 X
24 Y
25 Z
26 a
27 b
28 c
29 d
30 e
31 f
32 g
33 h
34 i
35 j
36 k
37 l
38 m
39 n
40 o
41 p
42 q
43 r
44 s
45 t
46 u
47 v
48 w
49 x
50 y
51 z
52 0
53 1
54 2
55 3
56 4
57 5
58 6
59 7
60 8
61 9
62 -
63 _
```

