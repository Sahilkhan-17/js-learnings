### 06.Kata - RGB To Hex Conversion 
Problem Statement -
> The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
> 
> Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
> 255, 255, 255 --> "FFFFFF"\
> 255, 255, 300 --> "FFFFFF"\
> 0, 0, 0       --> "000000"\
> 148, 0, 211   --> "9400D3"

Approach -
> - Clamping Values:\
>   For each of the red, green, and blue values, check if they are within the 0-255 range.\
>   If not, clamp them to the nearest valid value (0 for values < 0, 255 for values > 255).
> - Hexadecimal Conversion:\
>   Convert each clamped decimal value to a two-digit hexadecimal string. This involves:
>   - Using bitwise operations or string formatting to ensure the hexadecimal is in uppercase and two digits long.
>   - Handling cases where the hexadecimal representation might be a single digit by prepending a zero.
> - Combining Results:\
>   Concatenate the three two-digit hexadecimal strings into a single six-character string.

Solution -
```js
      function rgb(r, g, b) {

        //Ensure each RGB value is within the valid range (0-255)
        function clamp(value){
          return Math.max(0, Math.min(255, value));
        }

        function rgbToHex (colorValue){
           const clamped = clamp(colorValue);
           const hex = clamped.toString(16).toUpperCase();
           return hex.length === 1 ? "0" + hex : hex;
        }

        return rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
      }
```

Explanation:
> - Clamping Values:\
>   The `clamp function` ensures each RGB value is within the valid range (0-255). For example, 300 becomes 255, and -20 becomes 0.
> - Hexadecimal Conversion:\
>   Uses `toString(16)` to convert the number to a `hexadecimal` string, `toUpperCase()` converts letters to `uppercase`.
> - ` hex.length === 1 ? "0" + hex : hex; `:\
>   Hexadecimal color codes for each component are always two digits. If toString(16) returns a single digit ( e.g., 10.toString(16) returns "a" ), a leading "0" is prepended to ensure it's always two digits (e.g., "0a")
> - Combining Results:\
>   The three formatted hexadecimal strings are concatenated into a single six-character string, which is returned as the result.
