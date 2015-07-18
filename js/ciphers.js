$(document).ready(function() {
    
    $( "#vignereButton" ).click(function() {
		$("#vigenereCiphertext").val( vigenere($("#vigenerePlaintext").val(), $("#vigenereKey").val()) ); 
	});
	
	$( "#caesarButton" ).click(function() {
		$("#caesarCiphertext").val( caesar($("#caesarPlaintext").val(), $("#caesarOffset").val()) ); 
	});
	  	
	$( "#xtimeButton" ).click(function() {
  		$("#xtimeResult").val( xtime($("#xtimeFirst").val(), $("#xtimeSecond").val()) );
	});	

});

function xtime(first,second) {
	var iterations = xtime_decompose(second);
	var latest = parseInt(first);
	var values = [latest];
	var result = "00000000";
	for (var i = 0; i < iterations.length; i++) {
		latest = "0x" + xtime_xtime(latest);
		console.log("Latest Value: " + latest);
		values.push(parseInt(latest));			
	}
	iterations.reverse();
	console.log("Array: " + values);
	for (var i = 0; i < iterations.length; i++) {
		if (iterations[i] == '1') {
			console.log(result + " XOR " + values[i]);
			result = result ^ values[i];
		}
	}
	
	return "0x" + result.toString(16);
}

function xtime_decompose(value) {
	value = parseInt(value).toString(2);
	return value.split("");
}

function xtime_xtime(value) {
	console.log("Original Value: " + value);
	value = parseInt(value).toString(2);
	value = xtime_padLeft(value, 8, '0');
	console.log("Parsed and padded: " + value);
	var b7 = parseInt(value.charAt(0),2);
	var xor = parseInt("000" + b7 + b7 + "0" + b7 + "0",2);
	var binary = parseInt(value,2);
	binary = binary << 1;
	console.log("Left Shift: " + binary.toString(2));
	while (binary > 255) {
		binary -= 256;
	}	
	console.log("Crop back to 8: " + binary.toString(2));
	if (b7 == 1) {
		binary ++;
	}
	console.log("B0 = B7: " + binary.toString(2));

	binary = binary ^ xor;
	console.log("XOR-ed: " + binary.toString(2));

	return binary.toString(16);
}

function xtime_padLeft(string, amount, value) {
	var buffer = "";
	for (var i = 0; i < (amount - string.length); i++) {
		buffer += value;
	}
	return buffer + string;
}
function caesar(plaintext,offset) {
	if (!caesar_validOffset(offset)) {
		alert("Invalid Caesar Key");
		return;
	}
	
	return caesar_encryptText(plaintext,offset);
}

function caesar_encryptText(plain,offset) {
	var buffer = "";
	for (var i = 0; i < plain.length; i++) {
		if (plain.charAt(i) != ' ') {
			var c = plain.charAt(i);
			var value = (intValueForCharacter(c) + parseInt(offset)) % 26;
			value += 65; 
			buffer += String.fromCharCode(value);
        }
    }
    return buffer;
}

function caesar_validOffset(offset) {
	var digits = /^[0-9]*$/;
	for (i = 0; i < offset.length; i++) {
		if (!digits.test(offset.charAt(i))) {
			return false;
		}
	}
	return true;
}
function vigenere(plaintext,key) {	
	if (!vigenere_validKey(key)) {
		alert("Invalid Vigenere Key");
		return;
	}
	
	return vigenere_encryptText(plaintext,key);
}

function vigenere_encryptText(plain,key) {
	console.log("Trimming Whitespace...");
	plain = plain.replace(/\s+/g, '');
	var buffer = "";
	var paddedKey = "";
	for (var i = 0; i < Math.ceil(plain.length / key.length); i++) {
		paddedKey += key;
	}
	paddedKey = paddedKey.substring(0,plain.length);
	
	for (var i = 0; i < plain.length; i++) {
		var c = plain.charAt(i);
		var k = key.charAt(i);  
		buffer += vigenere_encryptCharacter(c,k);
    }
    return buffer;
}

function vigenere_encryptCharacter(character,key) {
console.log("Encrypting: "+ character + " with: " + key);
	var a = (intValueForCharacter(character) + intValueForCharacter(key)) % 26;
	a += 65;
	return String.fromCharCode(a);
}

function intValueForCharacter(character) {
	return character.toUpperCase().charCodeAt(0) - 65;
}

function vigenere_validKey(key) {
	var english = /^[A-Za-z]*$/;
	for (i = 0; i < key.length; i++) {
		if (!english.test(key.charAt(i))) {
			return false;
		}
	}
	return true;
}