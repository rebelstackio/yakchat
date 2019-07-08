# Schedule Frequency Format

What can we do with Javascript Number? Bitwise operations regretfully (but understandably) restricted to 32 bit numbers (well, 31-bit numbers because the sign takes the 32nd bit).

We can work with the integer and fraction parts of an IEEE754 number separately: by restricting the integer part of our number to 31-bits (2,147,483,647) leaves us enough accuracy in the decimal part of the number to represent a second number with a decimal range of 1 - 999,999 ( or 2 ^ 19 -1 with some room to spare ). Due the magic of floating point radix, we not able to simply use the inverse of the fraction (which would otherwise afford us a much larger range) because not all bits combinations could be represented.

Our largest number is 2,147,483,648.999999, but practically (for bitwise purposes) the fraction will be smaller ( 2 ^ 19 - 1):
2,147,483,648.782425. You'll notice the fraction is reversed to easily tease the integer without having to deal with removing leading zeroes. So, taking our practically largest number of 2,147,483,648.782425, when we separate the two we have the following two numbers:

2,147,483,648 ( 1111111111111111111111111111111 ) and 524287 ( 1111111111111111111 )

Theses number sets are very convenient for maintaining flags for scheduling - there are maximum 31 days in a month which are commonly used in schedules. While we don't have enough flags to provide day-in-year, week-in-year or minute-in-hour, representing schedules by yearly, quarter-in-year, quarterly, month-in-year, monthly, day-in-month, weekly, day-in-week, daily, hour-in-day, hourly, odd-minute-in-hour, minutely.

Using the fractional-to-bitwise part of our number (which we'll call the "type-setter") we'll be able specify these different types of scheduling (mixing types will come at another version so make sure you're checking other flags are in naught condition). The larger 31 bits will be used to define the schedule as per the type-setter (which we'll call the "definer").

## Type, Modulo, First 
With all those wonderful 19 bits we have enough room to represent a modulo for repeating series and First of period, without having to include a definer. Sometimes we may even include the definer within the 19 bits to allow shorter (variable-length) base64 keys.

### Specific Date/Time
```
ms_epoch: integer greater than 2 ^ 31
Example: 1552740528810
```

### Year
```
type|startyear|modulo: 1000000|00000000|0000
definer: not used
Examples:
	1000000 00000000 0001 =  ( yearly )
	1000000 00101110 0010  ( bi-annually starting 2018 )
```

### Quarter-in-year (optionally implemented)
```
type|definer: 1100000|000000000000
definer: not used
Examples:

```

### Month-in-year
```
type|startyear|modulo: 1010000|0000000|00000
definer: optional - when used matching is combined with modulo. 12 bits representing 12 months
Examples:
	1010000 0000000 00001 = 0. ( monthly ) parseFloat("0." + parseInt("1010000000000000001",2).toString().split("").reverse().join("")) = 0.186723
	1010000 0011100 00010 =  ( bi-monthly starting 2000 )
```

### Week-in-year
```
type|modulo|last: 1001000|00000000000|0
definer: not used
Examples:
	1001000 0000000 00001 =  ( weekly )
	1001000 0011100 00010  ( bi-weekly starting 2000 )
```

### Week-in-month
```
type|definer|last: 0011000|00000000000|0
modulo: not used
```

### Day-in-year
```
type|modulo|last: 1000100|00000000000|0
definer: not used
```

### Day-in-quarter (optionally implemented)
```
type|modulo: 0100100|000000000000
definer: not used
```

### Day-in-month
```
type|modulo: 0010100|000000000000
definer: when used, matching is combined with modulo. 31 bits representing 31 days
```

### Day-in-week
```
type|definer|modulo: 0001100|0000000|00000
definer: when used, matching is combined with modulo. 7 bits representing 7 days
```

### Weekday-in-month
```
type|definer|modulo|last|first: 0011100|0000000|000|0|0
definer: when used, matching is combined with modulo. 7 bits representing 7 days
```

### Hour-in-day
```
type|modulo|first: 0000110|00000000000|0
definer: when used, matching is combined with modulo. 24 bits representing 24 hours
```

### Minute-in-hour
```
type|modulo|first: 0000011|00000000000|0
definer: not used
```



## Functions

```js
class SFF {
	static base64(value,digis) {
		const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
		const getChars = function(num, res) {
			var mod = num % 64,
			remaining = Math.floor(num / 64),
			chars = chars.charAt(mod) + res;
			if (remaining <= 0) { return chars; }
			return getChars(remaining, chars);
		};
		if ( typeof(value) === 'number') {
			if (digis) { return getChars(value, '').padStart(digis,'A');}
			else { return getChars(value, ''); }
		}
		if ( typeof(value) === 'string') {
			if (value === '') { return NaN; }
			return value.split('').reverse().reduce(function(prev, cur, i) {
				return prev + chars.indexOf(cur) * Math.pow(64, i);
			}, 0);
		}
	}
	static get typeenum() {
		const t = {
			"specificdatetime":0,
			"year":parseInt("1000000",2),
			"quarterinyear":parseInt("1100000",2),
			"monthinyear":parseInt("1010000",2),
			"weekinyear":parseInt("1001000",2),
			"weekinmonth":parseInt("0011000",2),
			"dayinyear":parseInt("1000100",2),
			"dayinquarter":parseInt("0100100",2),
			"dayinmonth":parseInt("0010100",2),
			"dayinweek":parseInt("0001100",2),
			"weekdayinmonth":parseInt("0011100",2),
			"hourinday":parseInt("0000110",2),
			"minuteinhour":parseInt("0000011",2),
		};
		t[0]="specificdatetime",
		t[parseInt("1000000",2)]="year";
		t[parseInt("1100000",2)]="quarterinyear";
		t[parseInt("1010000",2)]="monthinyear";
		t[parseInt("1001000",2)]="weekinyear";
		t[parseInt("0011000",2)]="weekinmonth";
		t[parseInt("1000100",2)]="dayinyear";
		t[parseInt("0100100",2)]="dayinquarter";
		t[parseInt("0010100",2)]="dayinmonth";
		t[parseInt("0001100",2)]="dayinweek";
		t[parseInt("0011100",2)]="weekdayinmonth";
		t[parseInt("0000110",2)]="hourinday";
		t[parseInt("0000011",2)]="minuteinhour";
		return t;
	}
	static parse ( sSFF ) {
		let typefraction, typeint, definerinteger, type, modulo, negated = false;
		switch typeof sSFF {
			case 'string':
				if ( sSFF.substring(0,1) === "-" ) {
					negated = true;
					sSFF = sSFF.substring(1);
				}
				typeint = base64( sSFF.substring(0,4) );
				typefraction = parseFloat( "0." + base64(sSFF.substring(0,4)).toString().split("").reverse().join("") );
				definerinteger = parseInt(base64( (sSFF.substring(4).length >0) ? sSFF.substring(4) : "A" ) );
			case 'number':
				if ( sSFF < 0 ) {
					negated = true;
					sSFF = Math.abs(sSFF);
				}
				definerinteger = parseInt(sSFF);
				if ( definerinteger < Math.pow(2,31) ) {
					typeint = 0;
				} else {
					typefraction = sSFF - defineinteger;
					typeint = parseInt( typefraction.toString().substring(2).split("").reverse().join("") );
				}
				break;
			default: throw new TypeError(`The argument supplied: ${sSFF} is not a valid serialized SFF`);
		}
		let r = {};
		r.type = typeint >> 12;
		r.typename = SFF.typeenum[typeint >> 12];
		switch r.typename {
			case "specificdatetime":break;
			case "year": // type|startyear|modulo: 1000000|00000000|0000  definer: not used
				break;
			case "quarterinyear": // type|definer: 1100000|000000000000  definer: not used
				break;
			case "monthinyear": // type|startyear|modulo: 1010000|0000000|00000  definer: optional
				break;
			case "weekinyear": // type|modulo|last: 1001000|00000000000|0  definer: not used
				break;
			case "weekinmonth": // type|definer|last: 0011000|00000000000|0   modulo: not used
				break;
			case "dayinyear": // type|modulo|last: 1000100|00000000000|0   definer: not used
				break;
			case "dayinquarter": // type|modulo: 0100100|000000000000      definer: not used
				break;
			case "dayinmonth": // type|modulo: 0010100|000000000000   definer: optional 31 bits representing 31 days
				break;
			case "dayinweek": // type|definer|modulo: 0001100|0000000|00000   definer: optional 7 bits representing 7 days
				break;
			case "weekdayinmonth":break;
			case "hourinday":break;
			case "minuteinhour":break;

		}
	}
}
```
